import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../assets/styles/Footer.module.css'
import { Link as ScrollLink } from 'react-scroll'
import logo from '../assets/images/Logo.png'
import instagram from '../assets/images/instagramsvg.svg'
import twitter from '../assets/images/Xsvg.svg'
import linkedIn from '../assets/images/linkedinSVG.svg'
import whatsapp from '../assets/images/whataspp-black-svg.svg'
import mobile from '../assets/images/mobileSVG.svg'
import arrowUp from '../assets/images/left-arrow.svg'

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

import '@fontsource/poppins'

const style = {
    fontFamily: 'Poppins'
}

export default function Footer() {

    //function to scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className={styles.footerContainer} style={style}>
            <div className={styles.footerLeft}>
                <Link href="/" passHref legacyBehavior >
                    <a >
                        <Image src={logo} alt='HouseDesigns Logo' className={styles.footerLogo} />
                    </a>
                </Link>
                                
                <nav className={styles.footerNav}>
                    <ul>
                        <li><Link href='/our-expertise'>Our Expertise</Link></li>
                        <li><Link href='about-us'>About Us</Link></li>
                        <li><Link href='/shop'>Shop</Link></li>
                        <li><Link href='/blog'>Blog</Link></li>
                        <li><Link href='/contact-us'>Contact Us</Link></li>
                    </ul>
                </nav>
            </div>
            <div className={styles.footerRight}>
                <div className={styles.footerSocials}>
                    <a href="https://instagram.com/housedesignskenya?igsh=c3hpcHJnaWZwNDVp">
                        <InstagramIcon className={styles.instagram} />
                    </a>
                    <a href="https://x.com/housedesignske?s=11">
                        <XIcon className={styles.twitter} />
                    </a>
                    <a href="https://linkedin.com/company/house-designs-ke/">
                        <LinkedInIcon className={styles.linkedin} />
                    </a>
                    <ScrollLink 
                        to="header"
                        spy={true}
                        smooth={true}
                        duration={1800}
                        offset={-80}
                    >
                        <Image src={arrowUp} alt='arrow up' className={styles.arrowUp} />
                    </ScrollLink> 
                </div>
                <div className={styles.mobileFooterSocials}>
                    <div className={styles.mobileSocials}>
                        <a href="https://wa.me/+254710478088" target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}>
                            <WhatsAppIcon className={styles.mobileIcon} />
                        </a>
                        <a href="tel:+254710478088" className={styles.mobileRefLink}>
                            <LocalPhoneIcon alt='mobile' className={styles.mobileIcon} />
                        </a>
                        <a href="https://x.com/housedesignske?s=11" className={styles.twitterLink}>
                            <XIcon className={styles.mobileIcon} />
                        </a>
                        <a href="https://linkedin.com/company/house-designs-ke/" className={styles.linkedinLink}>
                            <LinkedInIcon className={styles.mobileIcon} />
                        </a>
                        <a href="https://instagram.com/housedesignskenya?igsh=c3hpcHJnaWZwNDVp" className={styles.instagramLink}>
                            <InstagramIcon className={styles.mobileIcon} />
                        </a>
                    </div>
                    <p>© 2024, All Rights Reserved</p>
                </div>
                <p className={styles.footerText}>© 2024, All Rights Reserved </p>
            </div>
        </div>
    )
}
