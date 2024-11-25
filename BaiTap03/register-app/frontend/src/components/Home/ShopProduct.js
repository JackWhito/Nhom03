import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../css/Home.css'
const ShopProducts = () => {
    const [product, setProduct] = useState([]);
    const [error, setError] = useState(null);
    const [currentItemPage, setCurrentItemPage] = useState(1);
    const itemsPerPage = 8;

    useEffect(() => {
        fetchProductDetails();
    }, []);

    const fetchProductDetails = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/images/all`);   
          setProduct(response.data);
        } catch (error) {
          setError(error);
          console.error('Error fetching product details:', error);
        }
    }; 

    const indexOfLastItem = currentItemPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = product.slice(indexOfFirstItem, indexOfLastItem);

    const paginateItems = pageNumber => setCurrentItemPage(pageNumber);
    
    return (
        <>
        <div id="products" className="product-area section">
            <div className="container">
            <div className="row">
                <div className="col-12">
                <div className="section-title">
                    <h2>Trending Items</h2>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                <div className="product-info">
                    <div className="nav-main">
                    {/* Tab Nav */}
                    <Pagination
                        itemsPerPage={itemsPerPage}
                        totalItems={product.length}
                        paginate={paginateItems}
                        currentPage={currentItemPage}
                    />
                    </div>
                    <div className="tab-content" id="myTabContent">
                    {/* Start Single Tab */}
                    <div className="tab-pane fade show active" role="tabpanel">
                        <div className="tab-single">
                        <div className="row">
                            {product.slice(indexOfFirstItem, indexOfLastItem).map((product) => (
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12" key={product.id}>
                            <div className="single-product">
                                <div className="product-img">
                                <a href={'/product/'+ product.id}>
                                    <img className="default-img" src="https://via.placeholder.com/550x750" alt={product.name}/>
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href={'/product/'+ product.id}
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href={'/product/'+ product.id}>
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href={'/product/'+ product.id}>{product.name}</a>
                                </h3>
                                <div className="product-price">
                                    <span>${product.price}</span>
                                </div>
                                </div>
                            </div>
                        </div>
                        ))}
                        </div>
                        </div>
                    </div>
                    {/*/ End Single Tab */}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}
const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
        <ul className="pagination">
            {pageNumbers.map(number => (
            <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                <button onClick={() => paginate(number)} className='page-link'>
                {number}
                </button>
            </li>
            ))}
        </ul>
        </nav>
    );

};
export default ShopProducts;