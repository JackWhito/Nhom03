import React, { useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import logoimg from "../images/M-logo.jpg";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { jwtDecode } from 'jwt-decode';
const ProductDetail = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState(''); 
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

  const fetchProductDetails = useCallback(async () => {
    if (productId) {
      try {
        const response = await axios.get(`http://localhost:5000/items/${productId}`,{
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: { userId: jwtDecode.userId }
        });
        setProduct(response.data);
      } catch (error) {
        setError(error);
        console.error('Error fetching product details:', error);
      }
    }
  },[token, axiosJWT]);
  
  useEffect(() => {
    fetchProductDetails();
  }, [productId]);

  const addToCart = async (productId) => {
    try {
      refreshToken();
      const userId = jwtDecode(token).userId;
      const quantity = 1
      const response = await axiosJWT.post(
        'http://localhost:5000/cart/add',
        { userId,productId,quantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Handle successful add to cart response (e.g., show success message)
      console.log('Product added to cart:', response.data);
      history.push("/cart")
    } catch (error) {
      console.error('Error adding product to cart:', error);
      // Handle add to cart error (e.g., show error message)
    }
  };
  return (
    <>
      <section id="product-detail" className="product-detail section">
        <div className="container">
          <div className="product-head">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="product-image">
                    <div className="product-image">
                      <img src={logoimg} alt='name'></img>
                    </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                {product ? ( // Check if product exists before rendering details
                  <div className="product-main">
                    <div className="title" style={{ color: 'black' }}>
                      <h3 className="product-name">{product.name}</h3>
                      <h4 className="brand-name">{product.brand}</h4>
                    </div>
                    <div className="product-details">
                      <p>{product.description}</p>
                      <h3 style={{fontSize:20, color:'black'}}>${product.price}</h3>
                      <button className="btn" onClick={() => addToCart(productId)} >Add to Cart</button>
                    </div>
                  </div>
                ) : (
                  <p>Loading product details...</p> // Display a loading message
                )}
                {error && <p>Error fetching product: {error.message}</p>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;