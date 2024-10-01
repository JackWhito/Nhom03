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


const Contact = () => {

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
                        <a href="blog-single.html">Contact</a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* End Breadcrumbs */}
        {/* Start Contact */}
        <section id="contact-us" className="contact-us section">
            <div className="container">
            <div className="contact-head">
                <div className="row">
                <div className="col-lg-8 col-12">
                    <div className="form-main">
                    <div className="title">
                        <h4>Get in touch</h4>
                        <h3>Write us a message</h3>
                    </div>
                    <form className="form" method="post" action="mail/mail.php">
                        <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="form-group">
                            <label>
                                Your Name<span>*</span>
                            </label>
                            <input name="name" type="text" placeholder="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="form-group">
                            <label>
                                Your Subjects<span>*</span>
                            </label>
                            <input name="subject" type="text" placeholder="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="form-group">
                            <label>
                                Your Email<span>*</span>
                            </label>
                            <input name="email" type="email" placeholder="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="form-group">
                            <label>
                                Your Phone<span>*</span>
                            </label>
                            <input name="company_name" type="text" placeholder="" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group message">
                            <label>
                                your message<span>*</span>
                            </label>
                            <textarea
                                name="message"
                                placeholder=""
                                defaultValue={""}
                            />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group button">
                            <button type="submit" className="btn ">
                                Send Message
                            </button>
                            </div>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                <div className="col-lg-4 col-12">
                    <div className="single-head">
                    <div className="single-info">
                        <i className="fa fa-phone" />
                        <h4 className="title">Call us Now:</h4>
                        <ul>
                        <li>+123 456-789-1120</li>
                        <li>+522 672-452-1120</li>
                        </ul>
                    </div>
                    <div className="single-info">
                        <i className="fa fa-envelope-open" />
                        <h4 className="title">Email:</h4>
                        <ul>
                        <li>
                            <a href="mailto:info@yourwebsite.com">
                            info@yourwebsite.com
                            </a>
                        </li>
                        <li>
                            <a href="mailto:info@yourwebsite.com">
                            support@yourwebsite.com
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="single-info">
                        <i className="fa fa-location-arrow" />
                        <h4 className="title">Our Address:</h4>
                        <ul>
                        <li>
                            KA-62/1, Travel Agency, 45 Grand Central Terminal, New York.
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/*/ End Contact */}
                {/* Start Shop Services Area  */}
                <section className="shop-services section home">
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
        {/* End Shop Services */}
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
        {/* Jquery Counterup JS */}
        {/* Countdown JS */}
        {/* Nice Select JS */}
        {/* Ytplayer JS */}
        {/* Flex Slider JS */}
        {/* ScrollUp JS */}
        {/* Onepage Nav JS */}
        {/* Easing JS */}
        {/* Google Map JS */}
        {/* Active JS */}

        </>
        
    )
}

export default Contact;
