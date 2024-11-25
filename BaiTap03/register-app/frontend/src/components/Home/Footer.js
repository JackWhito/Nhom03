import React from 'react';
import srcimg from "../images/M-logo.jpg";
import payments from "../images/payments.png";
const Footer = () => {
    
    return (
        <>
        <footer className="footer">
            {/* Footer Top */}
            <div className="footer-top section">
            <div className="container">
                <div className="row">
                <div className="col-lg-5 col-md-6 col-12">
                    {/* Single Widget */}
                    <div className="single-footer about">
                    <div className="logo">
                        <a href="/">
                        <img className="logoimage" src={srcimg} alt="#" />
                        </a>
                    </div>
                    <p className="text">
                    Looking for the perfect tech gadget? We've got you covered. From gaming consoles to smartwatches, our online store offers a diverse selection of electronics to suit every need.
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
                        <a>About Us</a>
                        </li>
                        <li>
                        <a>Faq</a>
                        </li>
                        <li>
                        <a>Terms &amp; Conditions</a>
                        </li>
                        <li>
                        <a>Contact Us</a>
                        </li>
                        <li>
                        <a>Help</a>
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
                        <a>Payment Methods</a>
                        </li>
                        <li>
                        <a>Money-back</a>
                        </li>
                        <li>
                        <a>Returns</a>
                        </li>
                        <li>
                        <a>Shipping</a>
                        </li>
                        <li>
                        <a>Privacy Policy</a>
                        </li>
                    </ul>
                    </div>
                    {/* End Single Widget */}
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    {/* Single Widget */}
                    <div className="single-footer social">
                    <h4>Get In Touch</h4>
                    {/* Single Widget */}
                    <div className="contact">
                        <ul>
                        <li>No. 1 - Vo Van Ngan Street.</li>
                        <li>Thu Duc, Ho Chi Minh city.</li>
                        <li>mitostravel.work@gmail.com</li>
                        <li>+032 3456 7890</li>
                        </ul>
                    </div>
                    {/* End Single Widget */}
                    <ul>
                        <li>
                        <a>
                            <i className="ti-facebook" />
                        </a>
                        </li>
                        <li>
                        <a>
                            <i className="ti-twitter" />
                        </a>
                        </li>
                        <li>
                        <a>
                            <i className="ti-flickr" />
                        </a>
                        </li>
                        <li>
                        <a>
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
                        Copyright © 2024{" "}
                        <a target="_blank">
                            Mito's Store
                        </a>{" "}
                        - All Rights Reserved.
                        </p>
                    </div>
                    </div>
                    <div className="col-lg-6 col-12">
                    <div className="right">
                        <img src={payments} alt="#" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </footer>
        </>
    );
}
export default Footer;