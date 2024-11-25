import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Sales = () => {
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
      const fetchProductDetails = async () => {
        try {
          const response  = await axios.get(`http://localhost:5000/items`);   
          setProduct(response.data);
        } catch (error) {
          setError(error);
          console.error('Error fetching product details:', error);
        }
      };
    
      fetchProductDetails();
    }, []); // Empty dependency array to fetch data once
    
    const filterProductsOnSale = () => {
        if (!product) return; // Handle case where products haven't been fetched yet
        return product.filter((item) => item.onsale === false); // Filter by onSale property
    };    

    const sortProductsByViews = () => {
        if (!product) return; // Handle case where products haven't been fetched yet
        return product.sort((a, b) => b.viewed - a.viewed).slice(0, 3); // Sort descending by views and get top 3
    };

    const sortProductsBySold = () => {
        if (!product) return; // Handle case where products haven't been fetched yet
        return product.sort((a, b) => b.sold - a.sold).slice(0, 3); // Sort descending by views and get top 3
    };
return (
        <>
        <section className="shop-home-list section">
            <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-12"> {/* On Sale */}
                <div className="row">
                    <div className="col-12">
                    <div className="shop-section-title">
                        <h1>On sale</h1>
                    </div>
                    </div>
                </div>
                {product?.length > 0 && ( filterProductsOnSale().slice(0, 3).map((product) => (
                <tr key={product.id}>
                <div className="single-list">
                    <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="list-image overlay">
                        <img src={product.imageUrl} alt={product.name} />
                        <a href={'/product/'+ product.id} className="buy">
                            <i className="fa fa-shopping-bag" />
                        </a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 no-padding">
                        <div className="content">
                        <h5 className="title">
                            <a href={'/product/'+ product.id}>{product.name}</a>
                        </h5>
                        <p className="price with-discount">${product.price.toFixed(2)}</p>
                        </div>
                    </div>
                    </div>
                </div>
                </tr>
                )))}
                </div>
                <div className="col-lg-4 col-md-6 col-12"> {/* Best Saler  */}
                <div className="row">
                    <div className="col-12">
                    <div className="shop-section-title">
                        <h1>Best Seller</h1>
                    </div>
                    </div>
                </div>
                {/* Start Single List  */}
                {product?.length > 0 && ( sortProductsBySold().slice(0, 3).map((product) => (
                <tr key={product.id}>
                <div className="single-list">
                    <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="list-image overlay">
                        <img src={product.imageUrl} alt={product.name} />
                        <a href={'/product/'+ product.id} className="buy">
                            <i className="fa fa-shopping-bag" />
                        </a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 no-padding">
                        <div className="content">
                        <h5 className="title">
                            <a href={'/product/'+ product.id}>{product.name}</a>
                        </h5>
                        <p className="price with-discount">${product.price.toFixed(2)}</p>
                        </div>
                    </div>
                    </div>
                </div>
                </tr>
                )))}
                </div>
                <div className="col-lg-4 col-md-6 col-12"> {/* Most Viewed */}
                <div className="row">
                    <div className="col-12">
                    <div className="shop-section-title">
                        <h1>Top viewed</h1>
                    </div>
                    </div>
                </div>
                {/* Start Single List  */}
                {product?.length > 0 && (sortProductsByViews().map((product) => (
                <tr key={product.id}>
                <div className="single-list">
                    <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="list-image overlay">
                        <img src={product.imageUrl} alt={product.name} />
                        <a href={'/product/'+ product.id} className="buy">
                            <i className="fa fa-shopping-bag" />
                        </a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 no-padding">
                        <div className="content">
                        <h5 className="title">
                            <a href={'/product/'+ product.id}>{product.name}</a>
                        </h5>
                        <p className="price with-discount">${product.price.toFixed(2)}</p>
                        </div>
                    </div>
                    </div>
                </div>
                </tr>
                )))}
                {/* End Single List  */}
                </div>
            </div>
            </div>
        </section>
        </>
    );
}
export default Sales;