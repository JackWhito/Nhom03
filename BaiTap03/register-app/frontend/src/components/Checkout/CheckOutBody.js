import React, { useState, useEffect, useCallback } from 'react'; 
import axios from 'axios'; 
import {jwtDecode} from 'jwt-decode'; 
import { useHistory } from 'react-router-dom';
import '../css/style.css';
import paymentMethod from "../images/payment-method.png";
const CheckOutBody = () => {
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState(''); 
    const [userId, setUserid] = useState('');
    const [cartItems, setCartItems] = useState([]); 
    const [cartItemsFetched, setCartItemsFetched] = useState(false);
    const [userFetched, setUserFetched] = useState(false);
    const history = useHistory();
    const [userInfo, setUserInfo] = useState('');
    const [cartId, setCartID] = useState('');

    const axiosJWT = axios.create(); 
    axiosJWT.interceptors.request.use(async (config) => { 
        const currentDate = new Date(); 
        if (expire * 1000 < currentDate.getTime()) { 
            const response = await axios.get('http://localhost:5000/token'); 
            config.headers.Authorization = `Bearer ${response.data.accessToken}`; 
            setToken(response.data.accessToken); 
            const decoded = jwtDecode(response.data.accessToken); 
            setExpire(decoded.exp);
            const userid = jwtDecode(token).userId;
            setUserid(userid);
        } 
        return config; 
    }, (error) => { 
        return Promise.reject(error); 
    }); 
  
    const refreshToken = useCallback(async () => { 
        try { const response = await axios.get('http://localhost:5000/token'); 
            setToken(response.data.accessToken); 
            const decoded = jwtDecode(response.data.accessToken); 
            setExpire(decoded.exp);
            
        } catch (error) { 
            if (error.response) { 
                history.push("/login"); 
            } 
        } 
    },[history]); 
    
    const total = cartItems.reduce((acc, item) => {
        return acc + item.quantity * item.product.price;
      }, 0);

    const getCartItems = useCallback(async () => {
        if (cartItemsFetched) return; // Skip if already fetched
        try {
            const response = await axiosJWT.post('http://localhost:5000/cart/all', {
                userId
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setCartItemsFetched(true); // Mark fetched
            setCartItems(response.data);
        } catch (error) {
          if (error.response) {
            if (error.response.status === 404) {
              console.error('Cart not found');
            } else {
              console.error('Failed to fetch cart items', error.response.data.error);
            }
          } else {
            console.error('Failed to fetch cart items', error.message);
          }
        }
      }, [axiosJWT, token, userId]);

      const getUser = useCallback(async () => {
        if(userFetched) return;
        try {
          const response = await axios.post('http://localhost:5000/user/info', {
            userId
          });
          setUserFetched(true);
          setUserInfo(response.data);
        } catch (error) {
          if (error.response) {
            const { status, data: { error: message } = {} } = error.response;
            switch (status) {
              case 404:
                console.warn('User not found');
                break;
              default:
                console.error('Failed to fetch user info:', message);
            }
          } else {
            console.error('Failed to fetch user info:', error.message);
          }
        }
      }, [userId]);
      
      const getCartID = useCallback(async () => {
        try {
            const response = await axios.post('http://localhost:5000/cart/view', { userId });
            setCartID(response.data.id);
        } catch (error) {
          if (error.response) {
            if (error.response.status === 404) {
              console.error('Cart not found');
            } else {
              console.error('Failed to fetch cart items', error.response.data.error);
            }
          } else {
            console.error('Failed to fetch cart items', error.message);
          }
        }
      }, [userId]);
    useEffect(() => { refreshToken(); getCartItems(); getUser(); getCartID()}, [refreshToken, getCartItems]);

    const handleCheckout = async () => {
        try {
          const response = await axios.post(
            'http://localhost:5000/create-order',
            { customer_id: userId, cart_id: cartId}
          );
          await axios.post(
            'http://localhost:5000/cart/empty',
            { userId}
          );
          history.push('/order');
        } catch (error) {
          console.error('Error during checkout:', error);
        }
    };
    
    return (
        <section className="shop checkout section">
            <div className="container">
            <div className="row">
                <div className="col-lg-8 col-12">
                <div className="checkout-form">
                    <h2>Your Checkout Information</h2>
                    <p></p>
                    {/* Form */}
                    <form className="form" method="post" action="#">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                            <label>
                            First Name
                            </label>
                            <input
                            type="text"
                            name="name"
                            value={userInfo.name}
                            readOnly
                            />
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                            <label>
                            Date of birth
                            </label>
                            <input
                            type="text"
                            name="name"
                            placeholder=""
                            readOnly
                            value={cartId}
                            />
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                            <label>
                            Email Address
                            </label>
                            <input
                            type="email"
                            name="email"
                            value={userInfo.email}
                            readOnly
                            />
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                            <label>
                            Phone Number
                            </label>
                            <input
                            type="number"
                            name="number"
                            value={userInfo.phonenumber}
                            readOnly
                            />
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                            <label>
                            Country
                            </label>
                            <input
                            value={userInfo.country}
                            readOnly/>
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                            <label>
                            City
                            </label>
                            <input
                            value={userInfo.city}
                            readOnly/>
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                            <label>
                            Address Line
                            </label>
                            <input
                            type="text"
                            name="address"
                            value={userInfo.address}
                            readOnly
                            />
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                            <label>
                            Postal Code
                            </label>
                            <input
                            type="text"
                            name="post"
                            value={userInfo.postalcode}
                            readOnly
                            />
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                        </div>
                    </div>
                    </form>
                    {/*/ End Form */}
                </div>
                </div>
                <div className="col-lg-4 col-12">
                <div className="order-details">
                    {/* Order Widget */}
                    <div className="single-widget">
                    <h2>CART TOTALS</h2>
                    <div className="content">
                        <ul>
                        <li>
                            Sub Total<span>${total}</span>
                        </li>
                        <li>
                            (+) Shipping<span>Free</span>
                        </li>
                        <li className="last">
                            Total<span>${total}</span>
                        </li>
                        </ul>
                    </div>
                    </div>
                    {/*/ End Order Widget */}
                    {/* Order Widget */}
                    <div className="single-widget">
                    <h2>Payments</h2>
                    <div className="content">
                        <div className="checkbox">
                        <label className="checkbox-inline">
                            <input name="news" id={1} type="checkbox" checked /> Cash On
                            Delivery
                        </label>
                        </div>
                    </div>
                    </div>
                    {/*/ End Order Widget */}
                    {/* Payment Method Widget */}
                    <div className="single-widget payement">
                    <div className="content">
                        <img src={paymentMethod} alt="#" />
                    </div>
                    </div>
                    {/*/ End Payment Method Widget */}
                    {/* Button Widget */}
                    <div className="single-widget get-button">
                    <div className="content">
                        <div className="button">
                        <a className="btn" onClick={handleCheckout}>
                            proceed to checkout
                        </a>
                        </div>
                    </div>
                    </div>
                    {/*/ End Button Widget */}
                </div>
                </div>
            </div>
            </div>
        </section>
    );
}
export default CheckOutBody;