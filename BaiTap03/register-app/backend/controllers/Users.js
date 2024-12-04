import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Op } from "sequelize";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// Generate a random OTP
const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
};

// Configure nodemailer
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587, // Use 465 for SSL
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});


export const forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await Users.findOne({ where: { email: email } });
        if (!user) return res.status(404).json({ msg: "Email not found" });

        const otp = generateOTP();
        const otpExpires = Date.now()  + 5 * 60 * 1000; // 5 min

        // Save the OTP and its expiration time to the user's record
        await Users.update({ otp: otp, otp_expires: otpExpires }, { where: { email: email } });

        // Send the OTP via email
        const mailOptions = {
            to: email,
            from: process.env.EMAIL,
            subject: 'Password Reset OTP',
            text: `Your OTP for password reset is: ${otp}. It is valid for 5 min.`
        };

        transporter.sendMail(mailOptions, (error, response) => {
            if (error) {
                console.error('There was an error: ', error);
                return res.status(500).json({ msg: "Error sending email" });
            }
            res.json({ msg: 'OTP sent to email' });
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

export const resetPassword = async (req, res) => {
    const { email, otp, newPassword, confPassword } = req.body;
    if (newPassword !== confPassword) return res.status(400).json({ msg: "Password and Confirm Password do not match" });

    try {
        const user = await Users.findOne({
            where: {
                email: email,
                otp: otp,
                otp_expires: { [Op.gt]: Date.now() }
            }
        });

        if (!user) return res.status(400).json({ msg: "Invalid or expired OTP" });

        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(newPassword, salt);

        await Users.update({ password: hashPassword, otp: null, otp_expires: null }, { where: { id: user.id } });

        res.json({ msg: "Password has been reset" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};


export const checkUser = async (req, res) => {
    const { email, name } = req.body;
    try {
        const existingUser = await Users.findOne({ where: { [Op.or]: [{ email: email }, { name: name }] } });
        if (existingUser) {
            return res.json({ exists: true });
        }
        res.json({ exists: false });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};
 
export const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll({
            attributes:['id','name','email']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
};
 
export const Register = async (req, res) => {
    const { name, email, password, confPassword } = req.body;
    if (password !== confPassword) return res.status(400).json({ msg: "Password and Confirm Password do not match" });

    try {
        // Check if email or username already exists
        const existingUser = await Users.findOne({ where: { [Op.or]: [{ email: email }, { name: name }] } });
        if (existingUser) return res.status(400).json({ msg: "Email or Username already exists" });

        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);

        const otp = generateOTP();
        const otpExpires = Date.now() + 5 * 60 * 1000;; // 5 min

        // Save the user with OTP and expiration time
        await Users.create({
            name: name,
            email: email,
            password: hashPassword,
            otp: otp,
            otp_expires: otpExpires,
            isVerified: false // Add a field to track verification status
        });

        // Send the OTP via email
        const mailOptions = {
            to: email,
            from: process.env.EMAIL,
            subject: 'Account Verification OTP',
            text: `Your OTP for account verification is: ${otp}. It is valid for 5 min.`
        };

        transporter.sendMail(mailOptions, (error, response) => {
            if (error) {
                console.error('There was an error: ', error);
                return res.status(500).json({ msg: "Error sending email" });
            }
            res.json({ msg: 'OTP sent to email. Please verify your account.' });
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

export const verifyOtp = async (req, res) => {
    const { email, otp } = req.body;

    try {
        const user = await Users.findOne({
            where: {
                email: email,
                otp: otp,
                otp_expires: { [Op.gt]: Date.now() }
            }
        });

        if (!user) return res.status(400).json({ msg: "Invalid or expired OTP" });

        await Users.update({ otp: null, otp_expires: null, isVerified: true }, { where: { id: user.id } });

        res.json({ msg: "Account verified successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

 
export const Login = async(req, res) => {
    try {
        const user = await Users.findAll({
            where:{
                email: req.body.email
            }
        });
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if(!match) return res.status(400).json({msg: "Wrong Password"});
        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;
        const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '15s'
        });
        const refreshToken = jwt.sign({userId, name, email}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        await Users.update({refresh_token: refreshToken},{
            where:{
                id: userId
            }
        });
        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({ accessToken });
    } catch (error) {
        res.status(404).json({msg:"Email not found"});
    }
};
 
export const Logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const user = await Users.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    await Users.update({refresh_token: null},{
        where:{
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
};
export const getUserById = async (req, res) => {
    const { userId } = req.body;
  
    try {
      const user = await Users.findByPk(userId, {
        attributes: ['id', 'name', 'email', 'phonenumber', 'address', 'postalcode', 'country', 'city']
      });
  
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };