import React, { useState } from 'react';
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import Modal from 'react-modal';
import './Register.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const [otp, setOtp] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const history = useHistory();


    const Register = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/users', {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword
            });
            setMsg(response.data.msg);
            setIsModalOpen(true);
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            } else {
                setMsg("An error occurred. Please try again.");
            }
        }
    };

    const verifyOtp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/verifyOtp', { email, otp });
            setMsg(response.data.msg);
            setIsModalOpen(false);
            history.push('/login'); // Navigate to the login page
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            } else {
                setMsg("An error occurred. Please try again.");
            }
        }
    };

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={Register} className="box">
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-5">
                                    <label className="label">Name</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Name"
                                            value={name} onChange={(e) => setName(e.target.value)} required />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Confirm Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="******" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} required />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">Register</button>
                                </div>
                                <div className="field mt-5 has-text-centered">
                                    <Link to="/login">Already have an account? Login here</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
                <h2 className="modal-text">Enter OTP</h2>
                <form onSubmit={verifyOtp}>
                    <p className="has-text-centered has-text-danger">{msg}</p>
                    <div className="field mt-5">
                        <label className="label modal-text">OTP</label>
                        <div className="controls">
                            <input type="text" className="input" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} required />
                        </div>
                    </div>
                    <div className="field mt-5">
                        <button className="button is-success is-fullwidth">Verify OTP</button>
                    </div>
                </form>
            </Modal>
        </section>
    );
}    

export default Register;
