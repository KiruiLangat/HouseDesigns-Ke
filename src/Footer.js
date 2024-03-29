import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { Link as ScrollLink } from 'react-scroll'
import logo from './Logo.png'
import instagram from './images/instagram.svg'
import twitter from './images/twitter.svg'
import linkedIn from './images/linkedin.svg'
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
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/contact-us'>Contact Us</Link></li>
                </ul>
            </nav>
        </div>
        <div className='footer-right'>
            <div className='footer-socials'>
                <img src={instagram} alt='instagram' className='instagram' />
                <img src={twitter} alt='twitter' className='twitter' />
                <img src={linkedIn} alt='LinkedIn' className='linkedin' />
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
            <p className='footer-text'>© 2024, All Rights Reserved </p>
        </div>
    </div>
  )
}
