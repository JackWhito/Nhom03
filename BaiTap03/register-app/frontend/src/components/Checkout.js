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
                        <a href="blog-single.html">Checkout</a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* End Breadcrumbs */}
        {/* Start Checkout */}
        <section className="shop checkout section">
            <div className="container">
            <div className="row">
                <div className="col-lg-8 col-12">
                <div className="checkout-form">
                    <h2>Make Your Checkout Here</h2>
                    <p>Please register in order to checkout more quickly</p>
                    {/* Form */}
                    <form className="form" method="post" action="#">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                            <label>
                            First Name<span>*</span>
                            </label>
                            <input
                            type="text"
                            name="name"
                            placeholder=""
                            required="required"
                            />
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                            <label>
                            Last Name<span>*</span>
                            </label>
                            <input
                            type="text"
                            name="name"
                            placeholder=""
                            required="required"
                            />
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                            <label>
                            Email Address<span>*</span>
                            </label>
                            <input
                            type="email"
                            name="email"
                            placeholder=""
                            required="required"
                            />
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                            <label>
                            Phone Number<span>*</span>
                            </label>
                            <input
                            type="number"
                            name="number"
                            placeholder=""
                            required="required"
                            />
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                            <label>
                            Country<span>*</span>
                            </label>
                            <select name="country_name" id="country">
                            <option value="AF">Afghanistan</option>
                            <option value="AX">Åland Islands</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AS">American Samoa</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AQ">Antarctica</option>
                            <option value="AG">Antigua and Barbuda</option>
                            <option value="AR">Argentina</option>
                            <option value="AM">Armenia</option>
                            <option value="AW">Aruba</option>
                            <option value="AU">Australia</option>
                            <option value="AT">Austria</option>
                            <option value="AZ">Azerbaijan</option>
                            <option value="BS">Bahamas</option>
                            <option value="BH">Bahrain</option>
                            <option value="BD">Bangladesh</option>
                            <option value="BB">Barbados</option>
                            <option value="BY">Belarus</option>
                            <option value="BE">Belgium</option>
                            <option value="BZ">Belize</option>
                            <option value="BJ">Benin</option>
                            <option value="BM">Bermuda</option>
                            <option value="BT">Bhutan</option>
                            <option value="BO">Bolivia</option>
                            <option value="BA">Bosnia and Herzegovina</option>
                            <option value="BW">Botswana</option>
                            <option value="BV">Bouvet Island</option>
                            <option value="BR">Brazil</option>
                            <option value="IO">British Indian Ocean Territory</option>
                            <option value="VG">British Virgin Islands</option>
                            <option value="BN">Brunei</option>
                            <option value="BG">Bulgaria</option>
                            <option value="BF">Burkina Faso</option>
                            <option value="BI">Burundi</option>
                            <option value="KH">Cambodia</option>
                            <option value="CM">Cameroon</option>
                            <option value="CA">Canada</option>
                            <option value="CV">Cape Verde</option>
                            <option value="KY">Cayman Islands</option>
                            <option value="CF">Central African Republic</option>
                            <option value="TD">Chad</option>
                            <option value="CL">Chile</option>
                            <option value="CN">China</option>
                            <option value="CX">Christmas Island</option>
                            <option value="CC">Cocos [Keeling] Islands</option>
                            <option value="CO">Colombia</option>
                            <option value="KM">Comoros</option>
                            <option value="CG">Congo - Brazzaville</option>
                            <option value="CD">Congo - Kinshasa</option>
                            <option value="CK">Cook Islands</option>
                            <option value="CR">Costa Rica</option>
                            <option value="CI">Côte d’Ivoire</option>
                            <option value="HR">Croatia</option>
                            <option value="CU">Cuba</option>
                            <option value="CY">Cyprus</option>
                            <option value="CZ">Czech Republic</option>
                            <option value="DK">Denmark</option>
                            <option value="DJ">Djibouti</option>
                            <option value="DM">Dominica</option>
                            <option value="DO">Dominican Republic</option>
                            <option value="EC">Ecuador</option>
                            <option value="EG">Egypt</option>
                            <option value="SV">El Salvador</option>
                            <option value="GQ">Equatorial Guinea</option>
                            <option value="ER">Eritrea</option>
                            <option value="EE">Estonia</option>
                            <option value="ET">Ethiopia</option>
                            <option value="FK">Falkland Islands</option>
                            <option value="FO">Faroe Islands</option>
                            <option value="FJ">Fiji</option>
                            <option value="FI">Finland</option>
                            <option value="FR">France</option>
                            <option value="GF">French Guiana</option>
                            <option value="PF">French Polynesia</option>
                            <option value="TF">French Southern Territories</option>
                            <option value="GA">Gabon</option>
                            <option value="GM">Gambia</option>
                            <option value="GE">Georgia</option>
                            <option value="DE">Germany</option>
                            <option value="GH">Ghana</option>
                            <option value="GI">Gibraltar</option>
                            <option value="GR">Greece</option>
                            <option value="GL">Greenland</option>
                            <option value="GD">Grenada</option>
                            <option value="GP">Guadeloupe</option>
                            <option value="GU">Guam</option>
                            <option value="GT">Guatemala</option>
                            <option value="GG">Guernsey</option>
                            <option value="GN">Guinea</option>
                            <option value="GW">Guinea-Bissau</option>
                            <option value="GY">Guyana</option>
                            <option value="HT">Haiti</option>
                            <option value="HM">
                                Heard Island and McDonald Islands
                            </option>
                            <option value="HN">Honduras</option>
                            <option value="HK">Hong Kong SAR China</option>
                            <option value="HU">Hungary</option>
                            <option value="IS">Iceland</option>
                            <option value="IN">India</option>
                            <option value="ID">Indonesia</option>
                            <option value="IR">Iran</option>
                            <option value="IQ">Iraq</option>
                            <option value="IE">Ireland</option>
                            <option value="IM">Isle of Man</option>
                            <option value="IL">Israel</option>
                            <option value="IT">Italy</option>
                            <option value="JM">Jamaica</option>
                            <option value="JP">Japan</option>
                            <option value="JE">Jersey</option>
                            <option value="JO">Jordan</option>
                            <option value="KZ">Kazakhstan</option>
                            <option value="KE">Kenya</option>
                            <option value="KI">Kiribati</option>
                            <option value="KW">Kuwait</option>
                            <option value="KG">Kyrgyzstan</option>
                            <option value="LA">Laos</option>
                            <option value="LV">Latvia</option>
                            <option value="LB">Lebanon</option>
                            <option value="LS">Lesotho</option>
                            <option value="LR">Liberia</option>
                            <option value="LY">Libya</option>
                            <option value="LI">Liechtenstein</option>
                            <option value="LT">Lithuania</option>
                            <option value="LU">Luxembourg</option>
                            <option value="MO">Macau SAR China</option>
                            <option value="MK">Macedonia</option>
                            <option value="MG">Madagascar</option>
                            <option value="MW">Malawi</option>
                            <option value="MY">Malaysia</option>
                            <option value="MV">Maldives</option>
                            <option value="ML">Mali</option>
                            <option value="MT">Malta</option>
                            <option value="MH">Marshall Islands</option>
                            <option value="MQ">Martinique</option>
                            <option value="MR">Mauritania</option>
                            <option value="MU">Mauritius</option>
                            <option value="YT">Mayotte</option>
                            <option value="MX">Mexico</option>
                            <option value="FM">Micronesia</option>
                            <option value="MD">Moldova</option>
                            <option value="MC">Monaco</option>
                            <option value="MN">Mongolia</option>
                            <option value="ME">Montenegro</option>
                            <option value="MS">Montserrat</option>
                            <option value="MA">Morocco</option>
                            <option value="MZ">Mozambique</option>
                            <option value="MM">Myanmar [Burma]</option>
                            <option value="NA">Namibia</option>
                            <option value="NR">Nauru</option>
                            <option value="NP">Nepal</option>
                            <option value="NL">Netherlands</option>
                            <option value="AN">Netherlands Antilles</option>
                            <option value="NC">New Caledonia</option>
                            <option value="NZ">New Zealand</option>
                            <option value="NI">Nicaragua</option>
                            <option value="NE">Niger</option>
                            <option value="NG">Nigeria</option>
                            <option value="NU">Niue</option>
                            <option value="NF">Norfolk Island</option>
                            <option value="MP">Northern Mariana Islands</option>
                            <option value="KP">North Korea</option>
                            <option value="NO">Norway</option>
                            <option value="OM">Oman</option>
                            <option value="PK">Pakistan</option>
                            <option value="PW">Palau</option>
                            <option value="PS">Palestinian Territories</option>
                            <option value="PA">Panama</option>
                            <option value="PG">Papua New Guinea</option>
                            <option value="PY">Paraguay</option>
                            <option value="PE">Peru</option>
                            <option value="PH">Philippines</option>
                            <option value="PN">Pitcairn Islands</option>
                            <option value="PL">Poland</option>
                            <option value="PT">Portugal</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="QA">Qatar</option>
                            <option value="RE">Réunion</option>
                            <option value="RO">Romania</option>
                            <option value="RU">Russia</option>
                            <option value="RW">Rwanda</option>
                            <option value="BL">Saint Barthélemy</option>
                            <option value="SH">Saint Helena</option>
                            <option value="KN">Saint Kitts and Nevis</option>
                            <option value="LC">Saint Lucia</option>
                            <option value="MF">Saint Martin</option>
                            <option value="PM">Saint Pierre and Miquelon</option>
                            <option value="VC">
                                Saint Vincent and the Grenadines
                            </option>
                            <option value="WS">Samoa</option>
                            <option value="SM">San Marino</option>
                            <option value="ST">São Tomé and Príncipe</option>
                            <option value="SA">Saudi Arabia</option>
                            <option value="SN">Senegal</option>
                            <option value="RS">Serbia</option>
                            <option value="SC">Seychelles</option>
                            <option value="SL">Sierra Leone</option>
                            <option value="SG">Singapore</option>
                            <option value="SK">Slovakia</option>
                            <option value="SI">Slovenia</option>
                            <option value="SB">Solomon Islands</option>
                            <option value="SO">Somalia</option>
                            <option value="ZA">South Africa</option>
                            <option value="GS">South Georgia</option>
                            <option value="KR">South Korea</option>
                            <option value="ES">Spain</option>
                            <option value="LK">Sri Lanka</option>
                            <option value="SD">Sudan</option>
                            <option value="SR">Suriname</option>
                            <option value="SJ">Svalbard and Jan Mayen</option>
                            <option value="SZ">Swaziland</option>
                            <option value="SE">Sweden</option>
                            <option value="CH">Switzerland</option>
                            <option value="SY">Syria</option>
                            <option value="TW">Taiwan</option>
                            <option value="TJ">Tajikistan</option>
                            <option value="TZ">Tanzania</option>
                            <option value="TH">Thailand</option>
                            <option value="TL">Timor-Leste</option>
                            <option value="TG">Togo</option>
                            <option value="TK">Tokelau</option>
                            <option value="TO">Tonga</option>
                            <option value="TT">Trinidad and Tobago</option>
                            <option value="TN">Tunisia</option>
                            <option value="TR">Turkey</option>
                            <option value="TM">Turkmenistan</option>
                            <option value="TC">Turks and Caicos Islands</option>
                            <option value="TV">Tuvalu</option>
                            <option value="UG">Uganda</option>
                            <option value="UA">Ukraine</option>
                            <option value="AE">United Arab Emirates</option>
                            <option value="US" selected="selected">
                                United Kingdom
                            </option>
                            <option value="UY">Uruguay</option>
                            <option value="UM">U.S. Minor Outlying Islands</option>
                            <option value="VI">U.S. Virgin Islands</option>
                            <option value="UZ">Uzbekistan</option>
                            <option value="VU">Vanuatu</option>
                            <option value="VA">Vatican City</option>
                            <option value="VE">Venezuela</option>
                            <option value="VN">Vietnam</option>
                            <option value="WF">Wallis and Futuna</option>
                            <option value="EH">Western Sahara</option>
                            <option value="YE">Yemen</option>
                            <option value="ZM">Zambia</option>
                            <option value="ZW">Zimbabwe</option>
                            </select>
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                            <label>
                            State / Divition<span>*</span>
                            </label>
                            <select name="state-province" id="state-province">
                            <option value="divition" selected="selected">
                                New Yourk
                            </option>
                            <option>Los Angeles</option>
                            <option>Chicago</option>
                            <option>Houston</option>
                            <option>San Diego</option>
                            <option>Dallas</option>
                            <option>Charlotte</option>
                            </select>
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                            <label>
                            Address Line 1<span>*</span>
                            </label>
                            <input
                            type="text"
                            name="address"
                            placeholder=""
                            required="required"
                            />
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                            <label>
                            Address Line 2<span>*</span>
                            </label>
                            <input
                            type="text"
                            name="address"
                            placeholder=""
                            required="required"
                            />
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                            <label>
                            Postal Code<span>*</span>
                            </label>
                            <input
                            type="text"
                            name="post"
                            placeholder=""
                            required="required"
                            />
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                            <label>
                            Company<span>*</span>
                            </label>
                            <select name="company_name" id="company">
                            <option value="company" selected="selected">
                                Microsoft
                            </option>
                            <option>Apple</option>
                            <option>Xaiomi</option>
                            <option>Huawer</option>
                            <option>Wpthemesgrid</option>
                            <option>Samsung</option>
                            <option>Motorola</option>
                            </select>
                        </div>
                        </div>
                        <div className="col-12">
                        <div className="form-group create-account">
                            <input id="cbox" type="checkbox" />
                            <label>Create an account?</label>
                        </div>
                        </div>
                    </div>
                    </form>
                    {/*/ End Form */}
                </div>
                </div>
                <div className="col-lg-4 col-12">
                <div className="order-details">
                    {/* Order Widget */}
                    <div className="single-widget">
                    <h2>CART TOTALS</h2>
                    <div className="content">
                        <ul>
                        <li>
                            Sub Total<span>$330.00</span>
                        </li>
                        <li>
                            (+) Shipping<span>$10.00</span>
                        </li>
                        <li className="last">
                            Total<span>$340.00</span>
                        </li>
                        </ul>
                    </div>
                    </div>
                    {/*/ End Order Widget */}
                    {/* Order Widget */}
                    <div className="single-widget">
                    <h2>Payments</h2>
                    <div className="content">
                        <div className="checkbox">
                        <label className="checkbox-inline" htmlFor={1}>
                            <input name="updates" id={1} type="checkbox" /> Check
                            Payments
                        </label>
                        <label className="checkbox-inline" htmlFor={2}>
                            <input name="news" id={2} type="checkbox" /> Cash On
                            Delivery
                        </label>
                        <label className="checkbox-inline" htmlFor={3}>
                            <input name="news" id={3} type="checkbox" /> PayPal
                        </label>
                        </div>
                    </div>
                    </div>
                    {/*/ End Order Widget */}
                    {/* Payment Method Widget */}
                    <div className="single-widget payement">
                    <div className="content">
                        <img src="images/payment-method.png" alt="#" />
                    </div>
                    </div>
                    {/*/ End Payment Method Widget */}
                    {/* Button Widget */}
                    <div className="single-widget get-button">
                    <div className="content">
                        <div className="button">
                        <a href="#" className="btn">
                            proceed to checkout
                        </a>
                        </div>
                    </div>
                    </div>
                    {/*/ End Button Widget */}
                </div>
                </div>
            </div>
            </div>
        </section>
        {/*/ End Checkout */}
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
        </>
    )
}

export default Checkout;
