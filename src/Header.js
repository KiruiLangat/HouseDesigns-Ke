import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import logo from './images/Logo.png';
import './Header.css';
import '@fontsource/poppins/300.css';
import instagram from './images/instagram.svg';
import twitter from './images/twitter.svg';
import linkedIn from './images/linkedin.svg';

const style = {
    fontFamily: 'Poppins',
};

export default function Header() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const showSidebar = () => {
        setSidebarVisible(true);
    };

    return (
        <div id ="header" className='header' style={style}>
            <Link to="/"><img src={logo} alt="logo" className='logo'/></Link>
            <nav className="desktop-menu">
                {sidebarVisible && (
                    <ul className={`sidebar ${sidebarVisible ? 'show' : ''}`}>
                        <li className='closeIcon'onClick={() => setSidebarVisible(false)}><Link to="#"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></Link></li>
                        <li><Link to="/our-expertise">Our Expertise</Link></li>
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
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                        <div className='sidebar-socials'>
                            <img src={instagram} alt='instagram' className='instagram' />
                            <img src={twitter} alt='twitter' className='twitter' />
                            <img src={linkedIn} alt='LinkedIn' className='linkedin' />
                        </div>
                    </ul>
                    
                )}
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
                    <li className='hideonmobile'><NavLink to="/shop">Shop</NavLink></li>
                    <li className='hideonmobile'><NavLink to="/blog">Blog</NavLink></li>
                    <li className='hideonmobile'><NavLink to="/contact-us">Contact Us</NavLink></li>
                    <li className='menu-button' onClick={showSidebar}><Link to="#"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></Link></li>
                </ul>
            </nav>
        </div>
    );
}