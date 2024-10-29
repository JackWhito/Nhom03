// src/components/Logout.js
import React, { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Logout = () => {
    const history = useHistory();

    useEffect(() => {
        const logout = async () => {
            try {
                await axios.delete('http://localhost:5000/logout');
                sessionStorage.clear();
                history.push('/');
            } catch (error) {
                console.error('Logout failed:', error);
            }
        };

        logout();
    }, [history]);

    return (
        <div>
            <h1>Logging out...</h1>
        </div>
    );
};

export default Logout;
