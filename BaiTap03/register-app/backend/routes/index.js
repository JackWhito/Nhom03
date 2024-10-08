import express from "express";
import { verifyOtp, forgotPassword, resetPassword, checkUser, getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { searchItems, filterItems, getTopSeller, getTopView } from "../controllers/Items.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();
 
// Users related
router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
router.post('/checkUser', checkUser);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.post('/verifyOtp', verifyOtp);
// Items related
router.get('/items/search',searchItems);
router.get('/items/filter', filterItems);
router.get('/items/topsell', getTopSeller);
router.get('/items/topview', getTopView);
export default router;