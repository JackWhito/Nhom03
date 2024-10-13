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
import Services from './Home/Services';
import Newsletter from './Home/NewsLetter';
import Footer from './Home/Footer';
import ContactBody from './Contact/ContactBody';

const Contact = () => {

    return (
        <body style={{backgroundColor:'white'}}>
        <head>
        {/* Meta Tag */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="copyright" content="" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
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
        </head>
        {/* Header */}
        <NavBar/>
        {/* Start Contact */}
        <ContactBody/>
        {/* Start Shop Services Area  */}
        <Services/>
        {/* Start Shop Newsletter  */}
        <Newsletter/>
        {/* Start Footer Area */}
        <Footer/>
        <script src="js/jquery.min.js"></script>
        <script src="js/jquery-migrate-3.0.0.js"></script>
        <script src="js/jquery-ui.min.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/colors.js"></script>
        <script src="js/slicknav.min.js"></script>
        <script src="js/owl-carousel.js"></script>
        <script src="js/magnific-popup.js"></script>
        <script src="js/waypoints.min.js"></script>
        <script src="js/finalcountdown.min.js"></script>
        <script src="js/nicesellect.js"></script>
        <script src="js/flex-slider.js"></script>
        <script src="js/scrollup.js"></script>
        <script src="js/onepage-nav.min.js"></script>
        <script src="js/easing.js"></script>
        <script src="js/active.js"></script>
        </body>
        
    )
}

export default Contact;
