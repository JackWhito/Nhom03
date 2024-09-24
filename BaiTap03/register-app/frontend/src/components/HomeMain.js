import React from 'react';
import './Home.css'
const HomeMain = () => {
    return (
        <>
        {/*DOCTYPE html*/}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* ===== CSS ===== */}
        <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
        {/* ===== BOX ICONS ===== */}
        <link
            href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
            rel="stylesheet"
        />
        <title>ivyPraise Sneakers</title>
        {/*===== HEADER =====*/}
        <header className="header-1" id="header">
            <nav className="nav bd-grid">
            <div className="nav__toggle" id="nav-toggle">
                <i className="bx bxs-grid" />
            </div>
            <a href="#" className="nav__logo">
                @shalom's
            </a>
            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list">
                <li className="nav__item">
                    <a href="#home" className="nav__link active">
                    Home
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#featured" className="nav__link">
                    Featured
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#women" className="nav__link">
                    Women
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#new" className="nav__link">
                    New
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#./shop.html" className="nav__link">
                    Shop
                    </a>
                </li>
                </ul>
            </div>
            <div className="nav__shop">
                <i className="bx bx-shopping-bag" />
            </div>
            </nav>
        </header>
        <main className="l-main">
            {/*===== HOME =====*/}
            <section className="home" id="home">
            <div className="home__container bd-grid">
                <div className="home__sneaker">
                <div className="home__shape" />
                <img
                    src="https://github.com/bedimcode/responsive-ecommerce-website-sneakers/blob/master/assets/img/imghome.png?raw=true"
                    alt=""
                    className="home__img"
                />
                </div>
                <div className="home__data">
                <span className="home__new">New in</span>
                <h1 className="home__title">
                    YEEZY BOOST <br /> SPLY - 350
                </h1>
                <p className="home__description">
                    Explore the new collections of sneekers
                </p>
                <a href="#" className="button">
                    Explore Now
                </a>
                </div>
            </div>
            </section>
            {/*===== FEATURED =====*/}
            <section className="featured section" id="featured">
            <h2 className="section-title">FEATURED</h2>
            <div className="featured__container bd-grid">
                <article className="sneaker">
                <div className="sneaker__sale">Sale</div>
                <img
                    src="https://github.com/bedimcode/responsive-ecommerce-website-sneakers/blob/master/assets/img/featured1.png?raw=true"
                    alt=""
                    className="sneaker__img"
                />
                <span className="sneaker__name">Nike Jordan</span>
                <span className="sneaker__preci">$149.99</span>
                <a href="" className="button-light">
                    Add to Cart <i className="bx bx-right-arrow-alt button-icon" />
                </a>
                </article>
                <article className="sneaker">
                <div className="sneaker__sale">Sale</div>
                <img
                    src="https://github.com/bedimcode/responsive-ecommerce-website-sneakers/blob/master/assets/img/featured2.png?raw=true"
                    alt=""
                    className="sneaker__img"
                />
                <span className="sneaker__name">Nike Free RN</span>
                <span className="sneaker__preci">$149.99</span>
                <a href="" className="button-light">
                    Add to Cart <i className="bx bx-right-arrow-alt button-icon" />
                </a>
                </article>
                <article className="sneaker">
                <div className="sneaker__sale">Sale</div>
                <img
                    src="https://github.com/bedimcode/responsive-ecommerce-website-sneakers/blob/master/assets/img/featured3.png?raw=true"
                    alt=""
                    className="sneaker__img"
                />
                <span className="sneaker__name">Nike Free RNq</span>
                <span className="sneaker__preci">$149.99</span>
                <a href="" className="button-light">
                    Add to Cart <i className="bx bx-right-arrow-alt button-icon" />
                </a>
                </article>
            </div>
            </section>
            {/*===== COLLECTION =====*/}
            <section className="collection section">
            <div className="collection__container bd-grid">
                <div className="collection__card">
                <div className="collection__data">
                    <h3 className="collection__name">Nike</h3>
                    <p className="collection__description">New collection 2021</p>
                    <a href="#" className="button-light">
                    Buy now <i className="bx bx-right-arrow-alt button-icon" />
                    </a>
                </div>
                <img
                    src="https://github.com/bedimcode/responsive-ecommerce-website-sneakers/blob/master/assets/img/collection1.png?raw=true"
                    alt=""
                    className="collection__img"
                />
                </div>
                <div className="collection__card">
                <div className="collection__data">
                    <h3 className="collection__name">Adidas</h3>
                    <p className="collection__description">New collection 2021</p>
                    <a href="#" className="button-light">
                    Buy now
                    <i className="bx bx-right-arrow-alt button-icon" />
                    </a>
                </div>
                <img
                    src="https://github.com/bedimcode/responsive-ecommerce-website-sneakers/blob/master/assets/img/collection2.png?raw=true"
                    alt=""
                    className="collection__img"
                />
                </div>
            </div>
            </section>
            {/*===== WOMEN SNEAKERS =====*/}
            <section className="women section" id="women">
            <h2 className="section-title">WOMEN SNEAKERS</h2>
            <div className="women__container bd-grid">
                <article className="sneaker">
                <img
                    src="https://github.com/bedimcode/responsive-ecommerce-website-sneakers/blob/master/assets/img/women1.png?raw=true"
                    alt=""
                    className="sneaker__img"
                />
                <span className="sneaker__name">Nike Free TR</span>
                <span className="sneaker__preci">$129.99</span>
                <a href="" className="button-light">
                    Add to Cart <i className="bx bx-right-arrow-alt button-icon" />
                </a>
                </article>
                <article className="sneaker">
                <img
                    src="https://github.com/bedimcode/responsive-ecommerce-website-sneakers/blob/master/assets/img/women2.png?raw=true"
                    alt=""
                    className="sneaker__img"
                />
                <span className="sneaker__name">Nike Free TRq</span>
                <span className="sneaker__preci">$129.99</span>
                <a href="" className="button-light">
                    Add to Cart <i className="bx bx-right-arrow-alt button-icon" />
                </a>
                </article>
                <article className="sneaker">
                <img
                    src="https://github.com/bedimcode/responsive-ecommerce-website-sneakers/blob/master/assets/img/women3.png?raw=true"
                    alt=""
                    className="sneaker__img"
                />
                <span className="sneaker__name">Nike GS Pink</span>
                <span className="sneaker__preci">$129.99</span>
                <a href="" className="button-light">
                    Add to Cart <i className="bx bx-right-arrow-alt button-icon" />
                </a>
                </article>
                <article className="sneaker">
                <img
                    src="https://github.com/bedimcode/responsive-ecommerce-website-sneakers/blob/master/assets/img/women3.png?raw=true"
                    alt=""
                    className="sneaker__img"
                />
                <span className="sneaker__name">Nike Get 5</span>
                <span className="sneaker__preci">$129.99</span>
                <a href="" className="button-light">
                    Add to Cart <i className="bx bx-right-arrow-alt button-icon" />
                </a>
                </article>
            </div>
            </section>
            {/*===== OFFER =====*/}
            <section className="offer section">
            <div className="offer__container bd-grid">
                <div className="offer__data">
                <h3 className="offer__title">50% OFF</h3>
                <p className="offer__description">In Adidas Superstar Sneakers</p>
                <a href="#" className="button">
                    Shop Now
                </a>
                </div>
                <img
                src="https://github.com/bedimcode/responsive-ecommerce-website-sneakers/blob/master/assets/img/offert.png?raw=true"
                alt=""
                className="offer__img"
                />
            </div>
            </section>
            {/*===== NEW COLLECTION =====*/}
            <section className="new section" id="new">
            <h2 className="section-title">NEW COLLECTION</h2>
            <div className="new__container bd-grid">
                <div className="new__mens">
                <img
                    src="https://github.com/bedimcode/responsive-ecommerce-website-sneakers/blob/master/assets/img/new1.png?raw=true"
                    alt=""
                    className="new__mens-img"
                />
                <h3 className="new__title">Mens Shoes</h3>
                <span className="new__preci">From $79.99</span>
                <a href="#" className="button-light">
                    View Collection
                    <i className="bx bx-right-arrow-alt button-icon" />
                </a>
                </div>
                <div className="new__sneaker">
                <div className="new__sneaker-card">
                    <img
                    src="https://github.com/bedimcode/responsive-ecommerce-website-sneakers/blob/master/assets/img/new2.png?raw=true"
                    alt=""
                    className="new__sneaker-img"
                    />
                    <div className="new__sneaker-overlay">
                    <a href="#" className="button">
                        Add to Cart
                    </a>
                    </div>
                </div>
                <div className="new__sneaker-card">
                    <img
                    src="https://github.com/bedimcode/responsive-ecommerce-website-sneakers/blob/master/assets/img/new3.png?raw=true"
                    alt=""
                    className="new__sneaker-img"
                    />
                    <div className="new__sneaker-overlay">
                    <a href="#" className="button">
                        Add to Cart
                    </a>
                    </div>
                </div>
                <div className="new__sneaker-card">
                    <img
                    src="https://github.com/bedimcode/responsive-ecommerce-website-sneakers/blob/master/assets/img/new4.png?raw=true"
                    alt=""
                    className="new__sneaker-img"
                    />
                    <div className="new__sneaker-overlay">
                    <a href="#" className="button">
                        Add to Cart
                    </a>
                    </div>
                </div>
                <div className="new__sneaker-card">
                    <img
                    src="https://github.com/bedimcode/responsive-ecommerce-website-sneakers/blob/master/assets/img/new5.png?raw=true"
                    alt=""
                    className="new__sneaker-img"
                    />
                    <div className="new__sneaker-overlay">
                    <a href="#" className="button">
                        Add to Cart
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </section>
            {/*===== NEWSLETTER =====*/}
            <section className="newsletter section">
            <div className="newsletter__container bd-grid">
                <div>
                <h3 className="newsletter__title">
                    Subscribe and Get <br /> 10% OFF
                </h3>
                <p className="newsletter__description">
                    Get 10% discount for all products
                </p>
                </div>
                <form action="" className="newsletter__subscribe">
                <input
                    type="text"
                    placeholder="@email.com"
                    className="newsletter__input"
                />
                <a href="#" className="button">
                    Subscribe
                </a>
                </form>
            </div>
            </section>
        </main>
        {/*===== FOOTER =====*/}
        <footer className="footer section">
            <div className="footer__container bd-grid">
            <div className="footer__box">
                <h3 className="footer__title">Ivy</h3>
                <p className="footer__description">New collection of shoes 2021.</p>
            </div>
            <div className="footer__box">
                <h3 className="footer__title">EXPLORE</h3>
                <ul>
                <li>
                    <a href="#home" className="footer__link">
                    Home
                    </a>
                </li>
                <li>
                    <a href="#featured" className="footer__link">
                    Featured
                    </a>
                </li>
                <li>
                    <a href="#women" className="footer__link">
                    Women
                    </a>
                </li>
                <li>
                    <a href="#new" className="footer__link">
                    New
                    </a>
                </li>
                </ul>
            </div>
            <div className="footer__box">
                <h3 className="footer__title">SUPPORT</h3>
                <ul>
                <li>
                    <a href="#" className="footer__link">
                    Product Help
                    </a>
                </li>
                <li>
                    <a href="#" className="footer__link">
                    Customer Care
                    </a>
                </li>
                <li>
                    <a href="#" className="footer__link">
                    Authorized Service
                    </a>
                </li>
                </ul>
            </div>
            <div className="footer__box">
                <a href="#" className="footer__social">
                <i className="bx bxl-facebook" />
                </a>
                <a href="#" className="footer__social">
                <i className="bx bxl-instagram" />
                </a>
                <a href="#" className="footer__social">
                <i className="bx bxl-twitter" />
                </a>
                <a href="#" className="footer__social">
                <i className="bx bxl-youtube" />
                </a>
            </div>
            </div>
            <p className="footer__copy"> ©2021 praiseShalom. All rights reserved </p>
        </footer>
        {/*===== MAIN JS =====*/}
        </>

    );
};

export default HomeMain;
