import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { useHistory } from 'react-router-dom';

const Profile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const [items, setItems] = useState([]);
    const [userId, setId] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [currentItemPage, setCurrentItemPage] = useState(1);
    const usersPerPage = 5;
    const itemsPerPage = 4;
    const history = useHistory();

    useEffect(() => {
        const fetchData = async () =>{
        await refreshToken();
        getItems();
        getUsers();
        };
        fetchData();
    }, []);

    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accessToken);
            const decoded = jwtDecode(response.data.accessToken);
            setName(decoded.name);
            setEmail(decoded.email); // Assuming the token contains the email
            setExpire(decoded.exp);
            localStorage.setItem('userId', decoded.userId);
        } catch (error) {
            if (error.response) {
                history.push("/");
            }
        }
    };
    const userid = localStorage.getItem('userId');

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    const getUsers = async () => {
        const response = await axiosJWT.post('http://localhost:5000/cart/all', {
            userId:userid
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setUsers(response.data);
    }
    const getItems = async () => {
        const response = await axiosJWT.post('http://localhost:5000/order/all', {
            userId:userid
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setItems(response.data);
    }
    const total = users.reduce((acc, user) => {
        return acc + user.quantity * user.product.price;
    }, 0);
    // Get current users
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const indexOfLastItem = currentItemPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const paginateItems = pageNumber => setCurrentItemPage(pageNumber);

    // Go to previous page
    const goToPreviousPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const goToPreviousItemPage = () => {
        if (currentItemPage !== 1) setCurrentItemPage(currentItemPage - 1);
    };

    // Go to next page
    const goToNextPage = () => {
        if (currentPage !== Math.ceil(users.length / usersPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };
    const goToNextItemPage = () => {
        if (currentItemPage !== Math.ceil(items.length / itemsPerPage)) setCurrentItemPage(currentItemPage + 1);
    };
    const onLogout = async () =>{
        try {
            history.push('/logout');
        } catch (error) {
            console.error("There was an error logging out!", error);
        }
    };
    return (
        <div className="container">
            <h1 style={{color:"black"}}>Profile</h1>
            <p><strong style={{color:"black"}}>Name:</strong> {name}</p>
            <p><strong style={{color:"black"}}>Email:</strong> {email}</p>
            <br></br>
            <h2 style={{color:"black"}}>Cart Items</h2>
            <div className="table-container">
                <table className="table is-striped is-fullwidth">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.map((user, index) => (
                            <tr key={user.id}>
                                <td>{indexOfFirstUser + index + 1}</td>
                                <td>{user.product.name}</td>
                                <td>{user.product.price}</td>
                                <td>{user.quantity}</td>
                                <td>{total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination
                itemsPerPage={usersPerPage}
                totalItems={users.length}
                paginate={paginate}
                currentPage={currentPage}
                goToPreviousPage={goToPreviousPage}
                goToNextPage={goToNextPage}
            />
            <br></br>
            <h2 style={{color:"black"}}>Orders</h2>
            <div className="table-container">
                <table className="table is-striped is-fullwidth">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Payment Method</th>
                            <th>Payment Status</th>
                            <th>Order Status</th>
                            <th>Order Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item, index) => (
                            <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.payment_method}</td>
                            <td>{item.payment_status}</td>
                            <td>{item.order_status}</td>
                            <td>{item.order_date}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={items.length}
                paginate={paginateItems}
                currentPage={currentItemPage}
                goToPreviousPage={goToPreviousItemPage}
                goToNextPage={goToNextItemPage}
            />
            <br></br>
            <div style={{ padding: '10px', maxWidth: '100%', overflowX: 'auto' }}>
            <button
                onClick={onLogout}
                style={{
                    float: 'right',
                    padding: '10px 20px',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                }}
            >
                Logout
            </button>
            <button
                style={{
                    padding: '10px 20px',
                    backgroundColor: 'orange',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                }}
            >
                Edit Profile
            </button>
            </div>
        </div>
    );
};

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage, goToPreviousPage, goToNextPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', listStyleType: 'none', padding: '0' }}>
                <li style={{ margin: '0 5px' }} className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button onClick={goToPreviousPage} style={{ padding: '5px 10px', cursor: 'pointer' }} className='page-link'>
                        Previous
                    </button>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} style={{ margin: '0 5px' }} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        <button onClick={() => paginate(number)} style={{ padding: '5px 10px', cursor: 'pointer' }} className='page-link'>
                            {number}
                        </button>
                    </li>
                ))}
                <li style={{ margin: '0 5px' }} className={`page-item ${currentPage === Math.ceil(totalItems / itemsPerPage) ? 'disabled' : ''}`}>
                    <button onClick={goToNextPage} style={{ padding: '5px 10px', cursor: 'pointer' }} className='page-link'>
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );

};



export default Profile;
