import React, { useState, useEffect, useCallback } from 'react'; 
import axios from 'axios'; 
import {jwtDecode} from 'jwt-decode'; 
import { useHistory } from 'react-router-dom';
import '../css/style.css'
const CartBody = () => {
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState(''); 
    const [userId, setUserid] = useState('');
    const [cartItems, setCartItems] = useState([]); 
    const [cartItemsFetched, setCartItemsFetched] = useState(false);
    const history = useHistory(); 

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

    useEffect(() => { refreshToken(); getCartItems(); }, [refreshToken, getCartItems]);

    return (
        <>
        <div className="shopping-cart section">
            <div className="container">
            <div className="row">
                <div className="col-12">
                {/* Shopping Summery */}
                <table className="table shopping-summery">
                    <thead style={{background:'#F7941D'}}>
                    <tr className="main-hading" style={{verticalAlign:'middle'}}>
                        <th>PRODUCT</th>
                        <th>NAME</th>
                        <th className="text-center">UNIT PRICE</th>
                        <th className="text-center">QUANTITY</th>
                        <th className="text-center">TOTAL</th>
                        <th className="text-center">
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {cartItems.map((cartItem) =>(
                    <tr key={cartItem.product.id}>
                        <td className="image" data-title="No">
                        <img src="https://via.placeholder.com/100x100" alt="#" />
                        </td>
                        <td className="product-des" data-title="Description">
                        <p className="product-name">
                            <a href="#">{cartItem.product.name}</a>
                        </p>
                        <p className="product-des">
                            {cartItem.product.description}
                        </p>
                        </td>
                        <td className="price" data-title="Price">
                        <span>${cartItem.product.price} </span>
                        </td>
                        <td className="qty" data-title="Qty">
                        {/* Input Order */}
                        <div className="input-group">
                            <div className="button minus">
                            <button
                                type="button"
                                className="btn btn-primary btn-number"
                                data-type="minus"
                                data-field="quant[1]"
                            >
                                <i className="ti-minus" />
                            </button>
                            </div>
                            <input
                            type="text"
                            name="quant[1]"
                            className="input-number"
                            data-min={1}
                            data-max={100}
                            defaultValue={cartItem.quantity}
                            />
                            <div className="button plus">
                            <button
                                type="button"
                                className="btn btn-primary btn-number"
                                data-type="plus"
                                data-field="quant[1]"
                            >
                                <i className="ti-plus" />
                            </button>
                            </div>
                        </div>
                        {/*/ End Input Order */}
                        </td>
                        <td className="total-amount" data-title="Total">
                        <span>${(cartItem.quantity * cartItem.product.price).toFixed(2)}</span>
                        </td>
                        <td className="action" data-title="Remove">
                        <a href="#">
                            <i className="ti-trash remove-icon" />
                        </a>
                        </td>
                    </tr>
                     ))}
                    </tbody>
                </table>
                {/*/ End Shopping Summery */}
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                {/* Total Amount */}
                <div className="total-amount">
                    <div className="row">
                    <div className="col-lg-8 col-md-5 col-12">
                        <div className="left">
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-7 col-12">
                        <div className="right">
                        <ul>
                            <li>
                            Cart Subtotal<span>${total}</span>
                            </li>
                            <li>
                            Shipping<span>Free</span>
                            </li>
                            <li className="last">
                            You Pay<span>${total}</span>
                            </li>
                        </ul>
                        <div className="button5">
                            <a href="/checkout" className="btn">
                            Checkout
                            </a>
                            <a href="/" className="btn">
                            Continue shopping
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/*/ End Total Amount */}
                </div>
            </div>
            </div>
        </div>
        </>
    );
}
export default CartBody;