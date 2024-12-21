import React, { useState, useEffect, useCallback } from 'react'; 
import axios from 'axios'; 
import { jwtDecode } from 'jwt-decode'; 
import { useHistory } from 'react-router-dom';

import '../htmltemplate/css/bootstrap.css';
import '../htmltemplate/css/magnific-popup.min.css';
import '../htmltemplate/css/font-awesome.css';
import '../htmltemplate/css/jquery.fancybox.min.css';
import '../htmltemplate/css/themify-icons.css';
import '../htmltemplate/css/niceselect.css';
import '../htmltemplate/css/animate.css';
import '../htmltemplate/css/flex-slider.min.css';
import '../htmltemplate/css/owl-carousel.css';
import '../htmltemplate/css/slicknav.min.css';
import '../htmltemplate/css/reset.css';
import './css/style.css';
import '../htmltemplate/css/responsive.css';

import NavBar from './Contact/NavBar';
import Services from './Home/Services';
import Newsletter from './Home/NewsLetter';
import Footer from './Home/Footer';
const Order = () => {
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState(''); 
    const [userId, setUserid] = useState('');
    const [orders, setOrder] = useState(''); 
    const [cartItemsFetched, setCartItemsFetched] = useState(false);
    const [userFetched, setUserFetched] = useState(false);
    const history = useHistory();
    const [userInfo, setUserInfo] = useState('');

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
            setUserid(decoded.userId);
        } catch (error) { 
            if (error.response) { 
                history.push("/login"); 
            } 
        } 
    },[history]); 
    
    const getOrder = async () => {
        if (cartItemsFetched) return; // Skip if already fetched
      
        try {
          const response = await axiosJWT.post('http://localhost:5000/order', {
            userId
          });
          setCartItemsFetched(true); // Mark fetched
          setOrder(response.data);
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
      };

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
      
    useEffect(() => { refreshToken();}, [refreshToken]);

    useEffect(() => {
        if (userId) {
          getOrder();
        }
      }, [userId]);
      
      useEffect(() => {
        if (userId) {
          getUser();
        }
      }, [userId]);

    return (
        <>
        {/* Header */}
        <NavBar/>
        {/*/ End Header */}
        {/* Start Checkout */}
        <div>
            <div class="col-lg-12 d-flex">
            <div class="checkout-form col-lg-6" style={{color: 'black', justifyContent:'center'}}>
                <h2 style={{fontSize:25, paddingTop:30 }}>Your Order Information</h2>
                <br/>
                {/* Form */}
                <form class="form" style={{padding:20, fontSize:18, paddingBottom:20}}>
                <div class="row">
                    <div class="col-lg-12">
                    <div class="form-group">
                        <label for="name">Your Name</label><br/>
                        <input type="text" name="name" readOnly style={{width:300}} value={userInfo.name} />
                    </div>
                    </div>
                    <div class="col-lg-12">
                    <div class="form-group">
                        <label for="dob">Phone Number</label><br/>
                        <input type="text" name="dob" placeholder="" readOnly style={{width:300}} value={userInfo.phonenumber} />
                    </div>
                    </div>
                    <div class="col-lg-12">
                    <div class="form-group">
                        <label for="email">Address</label><br/>
                        <input type="email" name="address" readOnly style={{width:300}} value={userInfo.address} />
                    </div>
                    </div>
                </div>
                </form>
                {/* End Form */}
            </div>
            <div class="checkout-form col-lg-6" style={{color: 'black', justifyContent:'center'}}>
                <h2 style={{fontSize:25, paddingTop:30 }}>Order Status</h2>
                <br/>
                {/* Form */}
                <form class="form" style={{padding:20, fontSize:18, paddingBottom:20}}>
                <div class="row">
                    <div class="col-lg-12">
                    <div class="form-group">
                        <label for="name">Shipping</label><br/>
                        <input type="text" name="name" readOnly style={{width:300}} value={orders.order_status}/>
                    </div>
                    </div>
                    <div class="col-lg-12">
                    <div class="form-group">
                        <label for="dob">Payment Status</label><br/>
                        <input type="text" name="dob" placeholder="" readOnly style={{width:300}} value={orders.payment_status}/>
                    </div>
                    </div>
                    <div class="col-lg-12">
                    <div class="form-group">
                        <label for="email">Payment Method</label><br/>
                        <input type="email" name="email" readOnly style={{width:300}} value={orders.payment_method}/>
                    </div>
                    </div>
                </div>
                </form>
                {/* End Form */}
            </div>
            </div>
        </div>
        {/*/ End Checkout */}
        {/* Start Shop Services Area  */}
        <Services/>
        {/* Start Shop Newsletter  */}
        <Newsletter/>
        {/* Start Footer Area */}
        <Footer/>
        </>
    );
}
export default Order;