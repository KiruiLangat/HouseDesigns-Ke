import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { Link as ScrollLink } from 'react-scroll'
import logo from './images/Logo.png'
import instagram from './images/instagramsvg.svg'
import twitter from './images/Xsvg.svg'
import linkedIn from './images/linkedinSVG.svg'
import whatsapp from './images/whataspp-black-svg.svg'
import mobile from './images/mobileSVG.svg'
import arrowUp from './images/left-arrow.svg'
import '@fontsource/poppins'


const style = {
    fontFamily: 'Poppins'
}


export default function Footer() {
return (
    <div className='footer-container' style={style}>
            <div className='footer-left'>
                    <Link to= '/'><img src={logo} alt='logo' className='footer-logo' /></Link>
                    <nav className='footer-nav'>
                            <ul>
                                    <li><Link to='/our-expertise'>Our Expertise</Link></li>
                                    <li>
                                            <ScrollLink 
                                                    to="about-us"
                                                    spy = {true}
                                                    smooth = {true}
                                                    duration={500}
                                                    offset={-70}

                                                    >About Us
                                            </ScrollLink>
                                    </li>
                                    <li><Link to='/shop'>Shop</Link></li>
                                    <li><Link to='/articles'>Blog</Link></li>
                                    <li><Link to='/contact-us'>Contact Us</Link></li>
                            </ul>
                    </nav>
            </div>
            <div className='footer-right'>
                    <div className='footer-socials'>
                        <a href="www.instagram.com/">
                            <img src={instagram} alt='instagram' className='instagram' />
                        </a>
                        <a href="www.x.com/">
                            <img src={twitter} alt='twitter' className='twitter' />
                        </a>
                        <a href="www.linkedin.com/">
                            <img src={linkedIn} alt='LinkedIn' className='linkedin' />
                        </a>
                            <ScrollLink 
                                    to="header"
                                    spy = {true}
                                    smooth = {true}
                                    duration={1800}
                                    offset={-80}
                                    >
                                    <img src={arrowUp} alt='arrow up' className='arrow-up' />
                            </ScrollLink> 
                    </div>
                    <div className='mobile-footer-socials'>
                            
                            <div className='mobile-socials'>
                                    <a href="https://wa.me/+254710478088" target="_blank" rel="noopener noreferrer" className='whatsapp-link' >
                                            <img src={whatsapp} alt='whatsapp' className='mobileIcon' />
                                    </a>
                                    <a href="tel:+254701478088" className='mobile-ref-link' >
                                            <img src={mobile} alt='mobile' className='mobileIcon' />
                                    </a>
                                    <a href="www.twitter.com/" className='twitter-link'>
                                        <img src={twitter} alt='twitter' className='mobileIcon' />
                                    </a>
                                    <a href="www.linkedin.com/" className='linkedin-link'>
                                        <img src={linkedIn} alt='LinkedIn' className='mobileIcon' />
                                    </a>
                                    <a href="www.instagram.com/" className='instagram-link'>
                                        <img src={instagram} alt='instagram' className='mobileIcon' />
                                    </a>
                            </div>
                            <p>© 2024, All Rights Reserved</p>
                    </div>
                    <p className='footer-text'>© 2024, All Rights Reserved </p>
                    
            </div>
    </div>
)
}
