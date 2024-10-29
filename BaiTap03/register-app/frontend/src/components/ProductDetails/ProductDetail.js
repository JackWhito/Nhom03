import React from 'react';

const ProductDetail = () => {
    return (
        <>
            <section id="product-detail" className="product-detail section">
                <div className="container">
                    <div className="product-head">
                        <div className="row">
                            <div className="col-lg-8 col-12">
                                <div className="product-main">
                                    <div className="title" style={{ color: 'black' }}>
                                        <h4>Example Brand</h4>
                                        <h3>Example Product Name</h3>
                                    </div>
                                    <div className="product-image">
                                        <img src="example-image-url.jpg" alt="Example Product" />
                                    </div>
                                    <div className="product-details">
                                        <p>This is an example product description.</p>
                                        <h3>$99.99</h3>
                                        <button className="btn">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProductDetail;
