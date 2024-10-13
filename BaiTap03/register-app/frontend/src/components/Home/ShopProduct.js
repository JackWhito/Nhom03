import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../css/Home.css'
const ShopProducts = () => {
    const [items, setItems] = useState([]);
    const [currentItemPage, setCurrentItemPage] = useState(1);
    const itemsPerPage = 8;

    useEffect(() => {
        getItems();
    }, []);
    const getItems = async () => {
        const response = await axios.get('http://localhost:5000/items/search');
        setItems(response.data);
    }

    const indexOfLastItem = currentItemPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

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
                        totalItems={items.length}
                        paginate={paginateItems}
                        currentPage={currentItemPage}
                    />
                    </div>
                    <div className="tab-content" id="myTabContent">
                    {/* Start Single Tab */}
                    <div
                        className="tab-pane fade show active"
                        id="man"
                        role="tabpanel"
                    >
                        <div className="tab-single">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Women Hot Collection
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">Awesome Pink Show</a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Awesome Bags Collection
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <span className="new">New</span>
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Women Pant Collectons
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Awesome Bags Collection
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <span className="price-dec">30% Off</span>
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Awesome Cap For Women
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Polo Dress For Women
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <span className="out-of-stock">Hot</span>
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Black Sunglass For Women
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span className="old">$60.00</span>
                                    <span>$50.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/*/ End Single Tab */}
                    {/* Start Single Tab */}
                    <div className="tab-pane fade" id="women" role="tabpanel">
                        <div className="tab-single">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Women Hot Collection
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">Awesome Pink Show</a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Awesome Bags Collection
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <span className="new">New</span>
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Women Pant Collectons
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Awesome Bags Collection
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <span className="price-dec">30% Off</span>
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Awesome Cap For Women
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Polo Dress For Women
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <span className="out-of-stock">Hot</span>
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Black Sunglass For Women
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span className="old">$60.00</span>
                                    <span>$50.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/*/ End Single Tab */}
                    {/* Start Single Tab */}
                    <div className="tab-pane fade" id="kids" role="tabpanel">
                        <div className="tab-single">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Women Hot Collection
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">Awesome Pink Show</a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Awesome Bags Collection
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <span className="new">New</span>
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Women Pant Collectons
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Awesome Bags Collection
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <span className="price-dec">30% Off</span>
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Awesome Cap For Women
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Polo Dress For Women
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <span className="out-of-stock">Hot</span>
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Black Sunglass For Women
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span className="old">$60.00</span>
                                    <span>$50.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/*/ End Single Tab */}
                    {/* Start Single Tab */}
                    <div className="tab-pane fade" id="accessories" role="tabpanel">
                        <div className="tab-single">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Women Hot Collection
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">Awesome Pink Show</a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Awesome Bags Collection
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <span className="new">New</span>
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Women Pant Collectons
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Awesome Bags Collection
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <span className="price-dec">30% Off</span>
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Awesome Cap For Women
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Polo Dress For Women
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <span className="out-of-stock">Hot</span>
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Black Sunglass For Women
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span className="old">$60.00</span>
                                    <span>$50.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/*/ End Single Tab */}
                    {/* Start Single Tab */}
                    <div className="tab-pane fade" id="essential" role="tabpanel">
                        <div className="tab-single">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Women Hot Collection
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">Awesome Pink Show</a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Awesome Bags Collection
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <span className="new">New</span>
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Women Pant Collectons
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Awesome Bags Collection
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <span className="price-dec">30% Off</span>
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Awesome Cap For Women
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Polo Dress For Women
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <span className="out-of-stock">Hot</span>
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Black Sunglass For Women
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span className="old">$60.00</span>
                                    <span>$50.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/*/ End Single Tab */}
                    {/* Start Single Tab */}
                    <div className="tab-pane fade" id="prices" role="tabpanel">
                        <div className="tab-single">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Women Hot Collection
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">Awesome Pink Show</a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Awesome Bags Collection
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <span className="new">New</span>
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Women Pant Collectons
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Awesome Bags Collection
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <span className="price-dec">30% Off</span>
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Awesome Cap For Women
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Polo Dress For Women
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span>$29.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                                <div className="product-img">
                                <a href="product-details.html">
                                    <img
                                    className="default-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <img
                                    className="hover-img"
                                    src="https://via.placeholder.com/550x750"
                                    alt="#"
                                    />
                                    <span className="out-of-stock">Hot</span>
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                    <a
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        title="Quick View"
                                        href="#"
                                    >
                                        <i className=" ti-eye" />
                                        <span>Quick Shop</span>
                                    </a>
                                    <a title="Wishlist" href="#">
                                        <i className=" ti-heart " />
                                        <span>Add to Wishlist</span>
                                    </a>
                                    <a title="Compare" href="#">
                                        <i className="ti-bar-chart-alt" />
                                        <span>Add to Compare</span>
                                    </a>
                                    </div>
                                    <div className="product-action-2">
                                    <a title="Add to cart" href="#">
                                        Add to cart
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <a href="product-details.html">
                                    Black Sunglass For Women
                                    </a>
                                </h3>
                                <div className="product-price">
                                    <span className="old">$60.00</span>
                                    <span>$50.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
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