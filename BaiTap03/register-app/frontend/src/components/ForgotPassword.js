import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const [showOtpPopup, setShowOtpPopup] = useState(false);
    const history = useHistory();

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/forgot-password', { email });
            setMsg(response.data.msg);
            setShowOtpPopup(true);
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/reset-password', { email, otp, newPassword, confPassword });
            setMsg(response.data.msg);
            setShowOtpPopup(false);
            history.push('/login'); // Navigate to the login page
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={handleForgotPassword} className="box">
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-5">
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input type="email" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">Send OTP</button>
                                </div>
                            </form>

                            {showOtpPopup && (
                                <div className="box">
                                    <form onSubmit={handleResetPassword}>
                                        <p className="has-text-centered">{msg}</p>
                                        <div className="field mt-5">
                                            <label className="label">OTP</label>
                                            <div className="controls">
                                                <input type="text" className="input" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="field mt-5">
                                            <label className="label">New Password</label>
                                            <div className="controls">
                                                <input type="password" className="input" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="field mt-5">
                                            <label className="label">Confirm Password</label>
                                            <div className="controls">
                                                <input type="password" className="input" placeholder="Confirm Password" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="field mt-5">
                                            <button className="button is-success is-fullwidth">Reset Password</button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ForgotPassword;
