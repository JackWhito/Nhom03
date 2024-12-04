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
import './css/style.css';
import '../htmltemplate/css/responsive.css';

import NavBar from './Contact/NavBar';
import CheckOutBody from './Checkout/CheckOutBody.js';
import Services from './Home/Services';
import Newsletter from './Home/NewsLetter';
import Footer from './Home/Footer';
const Checkout = () => {

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
        <NavBar/>
        {/*/ End Header */}
        {/* Start Checkout */}
        <CheckOutBody/>
        {/*/ End Checkout */}
        {/* Start Shop Services Area  */}
        <Services/>
        {/* Start Shop Newsletter  */}
        <Newsletter/>
        {/* Start Footer Area */}
        <Footer/>
        </>
    )
}

export default Checkout;
