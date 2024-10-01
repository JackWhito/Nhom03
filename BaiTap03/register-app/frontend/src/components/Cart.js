import React from 'react';

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
import '../htmltemplate/style.css';
import '../htmltemplate/css/responsive.css';

const Cart = () => {

    return (
        <>
        {/* Meta Tag */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="copyright" content="" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* Title Tag  */}
        <title>Eshop - eCommerce HTML5 Template.</title>
        {/* Favicon */}
        <link rel="icon" type="image/png" href="images/favicon.png" />
        {/* Web Font */}
        <link
            href="https://fonts.googleapis.com/css?family=Poppins:200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
            rel="stylesheet"
        />
        {/* StyleSheet */}
        {/* Bootstrap */}
        <link rel="stylesheet" href="css/bootstrap.css" />
        {/* Magnific Popup */}
        <link rel="stylesheet" href="css/magnific-popup.min.css" />
        {/* Font Awesome */}
        <link rel="stylesheet" href="css/font-awesome.css" />
        {/* Fancybox */}
        <link rel="stylesheet" href="css/jquery.fancybox.min.css" />
        {/* Themify Icons */}
        <link rel="stylesheet" href="css/themify-icons.css" />
        {/* Nice Select CSS */}
        <link rel="stylesheet" href="css/niceselect.css" />
        {/* Animate CSS */}
        <link rel="stylesheet" href="css/animate.css" />
        {/* Flex Slider CSS */}
        <link rel="stylesheet" href="css/flex-slider.min.css" />
        {/* Owl Carousel */}
        <link rel="stylesheet" href="css/owl-carousel.css" />
        {/* Slicknav */}
        <link rel="stylesheet" href="css/slicknav.min.css" />
        {/* Eshop StyleSheet */}
        <link rel="stylesheet" href="css/reset.css" />
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="css/responsive.css" />
        {/* Header */}
        <header className="header shop">
            {/* Topbar */}
            <div className="topbar">
            <div className="container">
                <div className="row">
                <div className="col-lg-5 col-md-12 col-12">
                    {/* Top Left */}
                    <div className="top-left">
                    <ul className="list-main">
                        <li>
                        <i className="ti-headphone-alt" /> +060 (800) 801-582
                        </li>
                        <li>
                        <i className="ti-email" /> support@shophub.com
                        </li>
                    </ul>
                    </div>
                    {/*/ End Top Left */}
                </div>
                <div className="col-lg-7 col-md-12 col-12">
                    {/* Top Right */}
                    <div className="right-content">
                    <ul className="list-main">
                        <li>
                        <i className="ti-location-pin" /> Store location
                        </li>
                        <li>
                        <i className="ti-alarm-clock" /> <a href="#">Daily deal</a>
                        </li>
                        <li>
                        <i className="ti-user" /> <a href="#">My account</a>
                        </li>
                        <li>
                        <i className="ti-power-off" />
                        <a href="login.html#">Login</a>
                        </li>
                    </ul>
                    </div>
                    {/* End Top Right */}
                </div>
                </div>
            </div>
            </div>
            {/* End Topbar */}
            <div className="middle-inner">
            <div className="container">
                <div className="row">
                <div className="col-lg-2 col-md-2 col-12">
                    {/* Logo */}
                    <div className="logo">
                    <a href="index.html">
                        <img src="images/logo.png" alt="logo" />
                    </a>
                    </div>
                    {/*/ End Logo */}
                    {/* Search Form */}
                    <div className="search-top">
                    <div className="top-search">
                        <a href="#0">
                        <i className="ti-search" />
                        </a>
                    </div>
                    {/* Search Form */}
                    <div className="search-top">
                        <form className="search-form">
                        <input
                            type="text"
                            placeholder="Search here..."
                            name="search"
                        />
                        <button value="search" type="submit">
                            <i className="ti-search" />
                        </button>
                        </form>
                    </div>
                    {/*/ End Search Form */}
                    </div>
                    {/*/ End Search Form */}
                    <div className="mobile-nav" />
                </div>
                <div className="col-lg-8 col-md-7 col-12">
                    <div className="search-bar-top">
                    <div className="search-bar">
                        <select>
                        <option selected="selected">All Category</option>
                        <option>watch</option>
                        <option>mobile</option>
                        <option>kid’s item</option>
                        </select>
                        <form>
                        <input
                            name="search"
                            placeholder="Search Products Here....."
                            type="search"
                        />
                        <button className="btnn">
                            <i className="ti-search" />
                        </button>
                        </form>
                    </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-12">
                    <div className="right-bar">
                    {/* Search Form */}
                    <div className="sinlge-bar">
                        <a href="#" className="single-icon">
                        <i className="fa fa-heart-o" aria-hidden="true" />
                        </a>
                    </div>
                    <div className="sinlge-bar">
                        <a href="#" className="single-icon">
                        <i className="fa fa-user-circle-o" aria-hidden="true" />
                        </a>
                    </div>
                    <div className="sinlge-bar shopping">
                        <a href="#" className="single-icon">
                        <i className="ti-bag" />{" "}
                        <span className="total-count">2</span>
                        </a>
                        {/* Shopping Item */}
                        <div className="shopping-item">
                        <div className="dropdown-cart-header">
                            <span>2 Items</span>
                            <a href="#">View Cart</a>
                        </div>
                        <ul className="shopping-list">
                            <li>
                            <a href="#" className="remove" title="Remove this item">
                                <i className="fa fa-remove" />
                            </a>
                            <a className="cart-img" href="#">
                                <img src="https://via.placeholder.com/70x70" alt="#" />
                            </a>
                            <h4>
                                <a href="#">Woman Ring</a>
                            </h4>
                            <p className="quantity">
                                1x - <span className="amount">$99.00</span>
                            </p>
                            </li>
                            <li>
                            <a href="#" className="remove" title="Remove this item">
                                <i className="fa fa-remove" />
                            </a>
                            <a className="cart-img" href="#">
                                <img src="https://via.placeholder.com/70x70" alt="#" />
                            </a>
                            <h4>
                                <a href="#">Woman Necklace</a>
                            </h4>
                            <p className="quantity">
                                1x - <span className="amount">$35.00</span>
                            </p>
                            </li>
                        </ul>
                        <div className="bottom">
                            <div className="total">
                            <span>Total</span>
                            <span className="total-amount">$134.00</span>
                            </div>
                            <a href="checkout.html" className="btn animate">
                            Checkout
                            </a>
                        </div>
                        </div>
                        {/*/ End Shopping Item */}
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* Header Inner */}
            <div className="header-inner">
            <div className="container">
                <div className="cat-nav-head">
                <div className="row">
                    <div className="col-12">
                    <div className="menu-area">
                        {/* Main Menu */}
                        <nav className="navbar navbar-expand-lg">
                        <div className="navbar-collapse">
                            <div className="nav-inner">
                            <ul className="nav main-menu menu navbar-nav">
                                <li className="active">
                                <a href="#">Home</a>
                                </li>
                                <li>
                                <a href="#">Product</a>
                                </li>
                                <li>
                                <a href="#">Service</a>
                                </li>
                                <li>
                                <a href="#">
                                    Shop
                                    <i className="ti-angle-down" />
                                    <span className="new">New</span>
                                </a>
                                <ul className="dropdown">
                                    <li>
                                    <a href="cart.html">Cart</a>
                                    </li>
                                    <li>
                                    <a href="checkout.html">Checkout</a>
                                    </li>
                                </ul>
                                </li>
                                <li>
                                <a href="#">Pages</a>
                                </li>
                                <li>
                                <a href="#">
                                    Blog
                                    <i className="ti-angle-down" />
                                </a>
                                <ul className="dropdown">
                                    <li>
                                    <a href="blog-single-sidebar.html">
                                        Blog Single Sidebar
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li>
                                <a href="contact.html">Contact Us</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </nav>
                        {/*/ End Main Menu */}
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/*/ End Header Inner */}
        </header>
        {/*/ End Header */}
        {/* Breadcrumbs */}
        <div className="breadcrumbs">
            <div className="container">
            <div className="row">
                <div className="col-12">
                <div className="bread-inner">
                    <ul className="bread-list">
                    <li>
                        <a href="index1.html">
                        Home
                        <i className="ti-arrow-right" />
                        </a>
                    </li>
                    <li className="active">
                        <a href="blog-single.html">Cart</a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* End Breadcrumbs */}
        {/* Shopping Cart */}
        <div className="shopping-cart section">
            <div className="container">
            <div className="row">
                <div className="col-12">
                {/* Shopping Summery */}
                <table className="table shopping-summery">
                    <thead>
                    <tr className="main-hading">
                        <th>PRODUCT</th>
                        <th>NAME</th>
                        <th className="text-center">UNIT PRICE</th>
                        <th className="text-center">QUANTITY</th>
                        <th className="text-center">TOTAL</th>
                        <th className="text-center">
                        <i className="ti-trash remove-icon" />
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="image" data-title="No">
                        <img src="https://via.placeholder.com/100x100" alt="#" />
                        </td>
                        <td className="product-des" data-title="Description">
                        <p className="product-name">
                            <a href="#">Women Dress</a>
                        </p>
                        <p className="product-des">
                            Maboriosam in a tonto nesciung eget distingy magndapibus.
                        </p>
                        </td>
                        <td className="price" data-title="Price">
                        <span>$110.00 </span>
                        </td>
                        <td className="qty" data-title="Qty">
                        {/* Input Order */}
                        <div className="input-group">
                            <div className="button minus">
                            <button
                                type="button"
                                className="btn btn-primary btn-number"
                                disabled="disabled"
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
                            defaultValue={1}
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
                        <span>$220.88</span>
                        </td>
                        <td className="action" data-title="Remove">
                        <a href="#">
                            <i className="ti-trash remove-icon" />
                        </a>
                        </td>
                    </tr>
                    <tr>
                        <td className="image" data-title="No">
                        <img src="https://via.placeholder.com/100x100" alt="#" />
                        </td>
                        <td className="product-des" data-title="Description">
                        <p className="product-name">
                            <a href="#">Women Dress</a>
                        </p>
                        <p className="product-des">
                            Maboriosam in a tonto nesciung eget distingy magndapibus.
                        </p>
                        </td>
                        <td className="price" data-title="Price">
                        <span>$110.00 </span>
                        </td>
                        <td className="qty" data-title="Qty">
                        {/* Input Order */}
                        <div className="input-group">
                            <div className="button minus">
                            <button
                                type="button"
                                className="btn btn-primary btn-number"
                                disabled="disabled"
                                data-type="minus"
                                data-field="quant[2]"
                            >
                                <i className="ti-minus" />
                            </button>
                            </div>
                            <input
                            type="text"
                            name="quant[2]"
                            className="input-number"
                            data-min={1}
                            data-max={100}
                            defaultValue={2}
                            />
                            <div className="button plus">
                            <button
                                type="button"
                                className="btn btn-primary btn-number"
                                data-type="plus"
                                data-field="quant[2]"
                            >
                                <i className="ti-plus" />
                            </button>
                            </div>
                        </div>
                        {/*/ End Input Order */}
                        </td>
                        <td className="total-amount" data-title="Total">
                        <span>$220.88</span>
                        </td>
                        <td className="action" data-title="Remove">
                        <a href="#">
                            <i className="ti-trash remove-icon" />
                        </a>
                        </td>
                    </tr>
                    <tr>
                        <td className="image" data-title="No">
                        <img src="https://via.placeholder.com/100x100" alt="#" />
                        </td>
                        <td className="product-des" data-title="Description">
                        <p className="product-name">
                            <a href="#">Women Dress</a>
                        </p>
                        <p className="product-des">
                            Maboriosam in a tonto nesciung eget distingy magndapibus.
                        </p>
                        </td>
                        <td className="price" data-title="Price">
                        <span>$110.00 </span>
                        </td>
                        <td className="qty" data-title="Qty">
                        {/* Input Order */}
                        <div className="input-group">
                            <div className="button minus">
                            <button
                                type="button"
                                className="btn btn-primary btn-number"
                                disabled="disabled"
                                data-type="minus"
                                data-field="quant[3]"
                            >
                                <i className="ti-minus" />
                            </button>
                            </div>
                            <input
                            type="text"
                            name="quant[3]"
                            className="input-number"
                            data-min={1}
                            data-max={100}
                            defaultValue={3}
                            />
                            <div className="button plus">
                            <button
                                type="button"
                                className="btn btn-primary btn-number"
                                data-type="plus"
                                data-field="quant[3]"
                            >
                                <i className="ti-plus" />
                            </button>
                            </div>
                        </div>
                        {/*/ End Input Order */}
                        </td>
                        <td className="total-amount" data-title="Total">
                        <span>$220.88</span>
                        </td>
                        <td className="action" data-title="Remove">
                        <a href="#">
                            <i className="ti-trash remove-icon" />
                        </a>
                        </td>
                    </tr>
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
                        <div className="coupon">
                            <form action="#" target="_blank">
                            <input name="Coupon" placeholder="Enter Your Coupon" />
                            <button className="btn">Apply</button>
                            </form>
                        </div>
                        <div className="checkbox">
                            <label className="checkbox-inline" htmlFor={2}>
                            <input name="news" id={2} type="checkbox" /> Shipping
                            (+10$)
                            </label>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-7 col-12">
                        <div className="right">
                        <ul>
                            <li>
                            Cart Subtotal<span>$330.00</span>
                            </li>
                            <li>
                            Shipping<span>Free</span>
                            </li>
                            <li>
                            You Save<span>$20.00</span>
                            </li>
                            <li className="last">
                            You Pay<span>$310.00</span>
                            </li>
                        </ul>
                        <div className="button5">
                            <a href="#" className="btn">
                            Checkout
                            </a>
                            <a href="#" className="btn">
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
        {/*/ End Shopping Cart */}
        {/* Start Shop Services Area  */}
        <section className="shop-services section">
            <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Service */}
                <div className="single-service">
                    <i className="ti-rocket" />
                    <h4>Free shiping</h4>
                    <p>Orders over $100</p>
                </div>
                {/* End Single Service */}
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Service */}
                <div className="single-service">
                    <i className="ti-reload" />
                    <h4>Free Return</h4>
                    <p>Within 30 days returns</p>
                </div>
                {/* End Single Service */}
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Service */}
                <div className="single-service">
                    <i className="ti-lock" />
                    <h4>Sucure Payment</h4>
                    <p>100% secure payment</p>
                </div>
                {/* End Single Service */}
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Service */}
                <div className="single-service">
                    <i className="ti-tag" />
                    <h4>Best Peice</h4>
                    <p>Guaranteed price</p>
                </div>
                {/* End Single Service */}
                </div>
            </div>
            </div>
        </section>
        {/* End Shop Newsletter */}
        {/* Start Shop Newsletter  */}
        <section className="shop-newsletter section">
            <div className="container">
            <div className="inner-top">
                <div className="row">
                <div className="col-lg-8 offset-lg-2 col-12">
                    {/* Start Newsletter Inner */}
                    <div className="inner">
                    <h4>Newsletter</h4>
                    <p>
                        {" "}
                        Subscribe to our newsletter and get <span>10%</span> off your
                        first purchase
                    </p>
                    <form
                        action="mail/mail.php"
                        method="get"
                        target="_blank"
                        className="newsletter-inner"
                    >
                        <input
                        name="EMAIL"
                        placeholder="Your email address"
                        required=""
                        type="email"
                        />
                        <button className="btn">Subscribe</button>
                    </form>
                    </div>
                    {/* End Newsletter Inner */}
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* End Shop Newsletter */}
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                >
                    <span className="ti-close" aria-hidden="true" />
                </button>
                </div>
                <div className="modal-body">
                <div className="row no-gutters">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    {/* Product Slider */}
                    <div className="product-gallery">
                        <div className="quickview-slider-active">
                        <div className="single-slider">
                            <img src="images/modal1.jpg" alt="#" />
                        </div>
                        <div className="single-slider">
                            <img src="images/modal2.jpg" alt="#" />
                        </div>
                        <div className="single-slider">
                            <img src="images/modal3.jpg" alt="#" />
                        </div>
                        <div className="single-slider">
                            <img src="images/modal4.jpg" alt="#" />
                        </div>
                        </div>
                    </div>
                    {/* End Product slider */}
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <div className="quickview-content">
                        <h2>Flared Shift Dress</h2>
                        <div className="quickview-ratting-review">
                        <div className="quickview-ratting-wrap">
                            <div className="quickview-ratting">
                            <i className="yellow fa fa-star" />
                            <i className="yellow fa fa-star" />
                            <i className="yellow fa fa-star" />
                            <i className="yellow fa fa-star" />
                            <i className="fa fa-star" />
                            </div>
                            <a href="#"> (1 customer review)</a>
                        </div>
                        <div className="quickview-stock">
                            <span>
                            <i className="fa fa-check-circle-o" /> in stock
                            </span>
                        </div>
                        </div>
                        <h3>$29.00</h3>
                        <div className="quickview-peragraph">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Mollitia iste laborum ad impedit pariatur esse optio tempora
                            sint ullam autem deleniti nam in quos qui nemo ipsum
                            numquam.
                        </p>
                        </div>
                        <div className="size">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                            <h5 className="title">Size</h5>
                            <select>
                                <option selected="selected">s</option>
                                <option>m</option>
                                <option>l</option>
                                <option>xl</option>
                            </select>
                            </div>
                            <div className="col-lg-6 col-12">
                            <h5 className="title">Color</h5>
                            <select>
                                <option selected="selected">orange</option>
                                <option>purple</option>
                                <option>black</option>
                                <option>pink</option>
                            </select>
                            </div>
                        </div>
                        </div>
                        <div className="quantity">
                        {/* Input Order */}
                        <div className="input-group">
                            <div className="button minus">
                            <button
                                type="button"
                                className="btn btn-primary btn-number"
                                disabled="disabled"
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
                            data-max={1000}
                            defaultValue={1}
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
                        </div>
                        <div className="add-to-cart">
                        <a href="#" className="btn">
                            Add to cart
                        </a>
                        <a href="#" className="btn min">
                            <i className="ti-heart" />
                        </a>
                        <a href="#" className="btn min">
                            <i className="fa fa-compress" />
                        </a>
                        </div>
                        <div className="default-social">
                        <h4 className="share-now">Share:</h4>
                        <ul>
                            <li>
                            <a className="facebook" href="#">
                                <i className="fa fa-facebook" />
                            </a>
                            </li>
                            <li>
                            <a className="twitter" href="#">
                                <i className="fa fa-twitter" />
                            </a>
                            </li>
                            <li>
                            <a className="youtube" href="#">
                                <i className="fa fa-pinterest-p" />
                            </a>
                            </li>
                            <li>
                            <a className="dribbble" href="#">
                                <i className="fa fa-google-plus" />
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* Modal end */}
        {/* Start Footer Area */}
        <footer className="footer">
            {/* Footer Top */}
            <div className="footer-top section">
            <div className="container">
                <div className="row">
                <div className="col-lg-5 col-md-6 col-12">
                    {/* Single Widget */}
                    <div className="single-footer about">
                    <div className="logo">
                        <a href="index.html">
                        <img src="images/logo2.png" alt="#" />
                        </a>
                    </div>
                    <p className="text">
                        Praesent dapibus, neque id cursus ucibus, tortor neque egestas
                        augue, magna eros eu erat. Aliquam erat volutpat. Nam dui mi,
                        tincidunt quis, accumsan porttitor, facilisis luctus, metus.
                    </p>
                    <p className="call">
                        Got Question? Call us 24/7
                        <span>
                        <a href="tel:123456789">+0123 456 789</a>
                        </span>
                    </p>
                    </div>
                    {/* End Single Widget */}
                </div>
                <div className="col-lg-2 col-md-6 col-12">
                    {/* Single Widget */}
                    <div className="single-footer links">
                    <h4>Information</h4>
                    <ul>
                        <li>
                        <a href="#">About Us</a>
                        </li>
                        <li>
                        <a href="#">Faq</a>
                        </li>
                        <li>
                        <a href="#">Terms &amp; Conditions</a>
                        </li>
                        <li>
                        <a href="#">Contact Us</a>
                        </li>
                        <li>
                        <a href="#">Help</a>
                        </li>
                    </ul>
                    </div>
                    {/* End Single Widget */}
                </div>
                <div className="col-lg-2 col-md-6 col-12">
                    {/* Single Widget */}
                    <div className="single-footer links">
                    <h4>Customer Service</h4>
                    <ul>
                        <li>
                        <a href="#">Payment Methods</a>
                        </li>
                        <li>
                        <a href="#">Money-back</a>
                        </li>
                        <li>
                        <a href="#">Returns</a>
                        </li>
                        <li>
                        <a href="#">Shipping</a>
                        </li>
                        <li>
                        <a href="#">Privacy Policy</a>
                        </li>
                    </ul>
                    </div>
                    {/* End Single Widget */}
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    {/* Single Widget */}
                    <div className="single-footer social">
                    <h4>Get In Tuch</h4>
                    {/* Single Widget */}
                    <div className="contact">
                        <ul>
                        <li>NO. 342 - London Oxford Street.</li>
                        <li>012 United Kingdom.</li>
                        <li>info@eshop.com</li>
                        <li>+032 3456 7890</li>
                        </ul>
                    </div>
                    {/* End Single Widget */}
                    <ul>
                        <li>
                        <a href="#">
                            <i className="ti-facebook" />
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            <i className="ti-twitter" />
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            <i className="ti-flickr" />
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            <i className="ti-instagram" />
                        </a>
                        </li>
                    </ul>
                    </div>
                    {/* End Single Widget */}
                </div>
                </div>
            </div>
            </div>
            {/* End Footer Top */}
            <div className="copyright">
            <div className="container">
                <div className="inner">
                <div className="row">
                    <div className="col-lg-6 col-12">
                    <div className="left">
                        <p>
                        Copyright © 2020{" "}
                        <a href="http://www.wpthemesgrid.com" target="_blank">
                            Wpthemesgrid
                        </a>{" "}
                        - All Rights Reserved.
                        </p>
                    </div>
                    </div>
                    <div className="col-lg-6 col-12">
                    <div className="right">
                        <img src="images/payments.png" alt="#" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </footer>
        {/* /End Footer Area */}
        {/* Jquery */}
        {/* Popper JS */}
        {/* Bootstrap JS */}
        {/* Color JS */}
        {/* Slicknav JS */}
        {/* Owl Carousel JS */}
        {/* Magnific Popup JS */}
        {/* Fancybox JS */}
        {/* Waypoints JS */}
        {/* Countdown JS */}
        {/* Nice Select JS */}
        {/* Ytplayer JS */}
        {/* Flex Slider JS */}
        {/* ScrollUp JS */}
        {/* Onepage Nav JS */}
        {/* Easing JS */}
        {/* Active JS */}
        </>

    )
}

export default Cart;
