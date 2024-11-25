import React from 'react';
import logoimg from "../images/M-logo.jpg";
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
const NavBar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); 
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // new state to manage dropdown visibility
    const history = useHistory();
    useEffect(() => {      
        const storedToken = sessionStorage.getItem('token'); 
        if (storedToken) { 
          const decoded = jwtDecode(storedToken); 
          if (decoded.exp * 1000 > Date.now()) { 
              setIsAuthenticated(true);
          } 
        }
    }, []);
    const handleLogout = () => { 
        sessionStorage.removeItem('token'); 
        setIsAuthenticated(false); 
        history.push('/logout');
    };
    const toggleDropdown = () => { setIsDropdownOpen(!isDropdownOpen); };
    const closeDropdown = () => { setIsDropdownOpen(false); 

    }; // Close the dropdown if the user clicks outside of it 
    useEffect(() => { 
        const handleClickOutside = (event) => { 
            if (!event.target.closest('.userdropdown')) { 
                closeDropdown(); 
            } 
        }; 
        document.addEventListener('click', handleClickOutside); 
        return () => { 
            document.removeEventListener('click', handleClickOutside); 
        }; 
    }, []);
    return (
        <>
        <header className="header shop">
            <div className="middle-inner">
            <div className="container">
                <div className="row">
                <div className="col-lg-2 col-md-2 col-12">
                    {/* Logo */}
                    <div className="logo">
                    <a href="/">
                        <img className="logoimage"src={logoimg} alt="logo" />
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
                        <div className="userdropdown">
                        <a href="#" className="single-icon" id="userDropdown" onClick={toggleDropdown}>
                        <i className="fa fa-user-circle-o" /> {/* user icon */}
                        </a>
                        {isDropdownOpen &&(
                        <div className="dropmenu show" aria-labelledby="userDropdown">
                            <a className="dropdown-item" href="#">Profile</a> 
                            <a className="dropdown-item" href="#" onClick={handleLogout}>Logout</a>
                        </div>
                        )}
                        </div>
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
                            <a href="/cart">View Cart</a>
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
                            <a href="/checkout" className="btn animate">
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
            <div className="Nav-header-inner">
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
                                <a href="/">Home</a>
                                </li>
                                <li>
                                <a href="/">Product</a>
                                </li>
                                <li>
                                </li>
                                <li>
                                <a href="/contact">Contact Us</a>
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
        </>
    );
}
export default NavBar;