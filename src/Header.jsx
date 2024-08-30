import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

import ShoppingBagOutlined from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import logo from './images/Logo.png';
import './Header.css';
import '@fontsource/poppins/300.css';
// import instagram from './images/instagram.svg';
// import twitter from './images/twitter.svg';
// import linkedIn from './images/linkedin.svg';

const style = {
    fontFamily: 'Poppins',
};

export default function Header() {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const showSidebar = () => {
        setSidebarVisible(true);
    };
    
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible)
    }

    return (
        <div id ="header" className='header' style={style}>
            <Link to="/"
            onClick={() => setSidebarVisible(false)}
            >
                <img src={logo} alt="logo" className='logo'/></Link>
            <nav className="desktop-menu">

                {/* Mobile Header */}
                {sidebarVisible && (
                    <ul className={`sidebar ${sidebarVisible ? 'show' : ''}`}>
                        <li className='closeIcon'onClick={() => 
                            setSidebarVisible(false)}><Link to="#"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></Link></li>
                        <li>
                            <Link to="/our-expertise"
                            onClick={() => setSidebarVisible(false)}
                            >
                                Our Expertise</Link>
                        </li>
                        <li>
                            <ScrollLink
                                to="about-us"
                                spy = {true}
                                smooth = {true}
                                duration={500}
                                offset={-70}
                                onClick={() => setSidebarVisible(false)}

                                >About Us
                            </ScrollLink>
                        </li>
                        <li >     
                            <div className='shop-nav'>
                                <Link to="/shop"
                                    onClick={() => setSidebarVisible(false)}
                                    >
                                        Shop

                                </Link>
                                <div className='shop-dropdown-toggle' onClick={toggleDropdown}>
                                    {dropdownVisible ? <ExpandLessIcon className='icon-less' /> : <ExpandMoreIcon className='icon-more'/> }
                                </div>
                                {dropdownVisible && (
                                    <div  className='shop-dropdown' >
                                        <ul onClick={() => setDropdownVisible(false)} >
                                            <li><Link to="/house-plans"
                                            onClick={() => setSidebarVisible(false)}>House Plans</Link></li>
                                            <li><Link to="/submit your brief"
                                            onClick={() => setSidebarVisible(false)}>Submit your Brief</Link></li>
                                            <li className='link-cart'>
                                                <Link to="/cart"
                                                onClick={() => setSidebarVisible(false)}>
                                                    Cart 
                                                   < ShoppingBagOutlined className='icon-cart' /> 
                                                </Link>
                                            </li>
                                            <li className='link-cart'>
                                                <Link to='/wishlist'
                                                onClick={() => setSidebarVisible(false)}>
                                                Wishlist
                                                <FavoriteBorderIcon className='icon-cart' />
                                                </Link></li>
                                            <li><Link to="/profile">Profile</Link></li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </li>
                        <li><Link to="/blog" 
                        onClick={() => setSidebarVisible(false)}
                        >Blog</Link></li>
                        <li><Link to="/contact-us"
                        onClick={() => setSidebarVisible(false)}
                        >Contact Us</Link></li>
                        {/* <div className='sidebar-socials'>
                            <img src={instagram} alt='instagram' className='instagram' />
                            <img src={twitter} alt='twitter' className='twitter' />
                            <img src={linkedIn} alt='LinkedIn' className='linkedin' />
                        </div> */}
                    </ul>
                    
                )}

                {/* Desktop Header */}

                <ul>
                    <li className='hideonmobile'><NavLink to="/our-expertise">Our Expertise</NavLink></li>
                    <li className='hideonmobile'>
                        <ScrollLink
                            to="about-us"
                            spy = {true}
                            smooth = {true}
                            duration={500}
                            offset={-70}

                            >About Us
                        </ScrollLink></li>
                    <li className='hideonmobile'>
                        <div className='shop-nav'>
                            <Link to="/shop"
                            onClick={() => setSidebarVisible(false)} >
                            Shop                            
                            </Link>
                            <div className='shop-dropdown-toggle' onClick={toggleDropdown}>
                                {dropdownVisible ? <ExpandLessIcon className='icon-less' /> : <ExpandMoreIcon className='icon-more'/> }
                            </div>
                            {dropdownVisible && (
                                <div className='shop-dropdown' >
                                    <ul onClick={() => setDropdownVisible(false)}>
                                        <li><Link to="/house-plans"
                                        onClick={() => setSidebarVisible(false)}
                                        >House Plans</Link></li>
                                        <li><Link to="/submit your brief"
                                        onClick={() => setSidebarVisible(false)}
                                        >Submit your Brief</Link></li>
                                        <li >
                                            <Link to="/cart"
                                            onClick={() => setSidebarVisible(false)}>
                                                <div className='link-cart'>
                                                   Cart 
                                                   <ShoppingBagOutlined className='icon-cart' /> 
                                                </div>
                                            </Link>
                                        </li>
                                       <Link to='/wishlist'
                                       onClick={() => setSidebarVisible(false)}
                                       > 
                                            <li className='link-cart'>
                                            Wishlist
                                            <FavoriteBorderIcon className='icon-cart' />                                           
                                            </li>
                                        </Link>
                                        <li><Link to="/profile"
                                        onClick={() => setSidebarVisible(false)}
                                        >
                                            Profile</Link></li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </li>
                    <li className='hideonmobile'><NavLink to="/blog">Blog</NavLink></li>
                    <li className='hideonmobile'><NavLink to="/contact-us">Contact Us</NavLink></li>
                    <li className='menu-button' onClick={showSidebar}><Link to="#"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></Link></li>
                </ul>
            </nav>
        </div>
    );
}