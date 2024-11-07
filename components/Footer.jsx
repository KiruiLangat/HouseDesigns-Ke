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
                <Image src={logo} alt='logo' className={styles.footerLogo} onClick={scrollToTop} />
                <nav className={styles.footerNav}>
                    <ul>
                        <li><Link href='/our-expertise'>Our Expertise</Link></li>
                        <li>
                            <ScrollLink 
                                to="about-us"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-70}
                            >
                                About Us
                            </ScrollLink>
                        </li>
                        <li><Link href='/shop'>Shop</Link></li>
                        <li><Link href='/blog'>Blog</Link></li>
                        <li><Link href='/contact-us'>Contact Us</Link></li>
                    </ul>
                </nav>
            </div>
            <div className={styles.footerRight}>
                <div className={styles.footerSocials}>
                    <a href="https://instagram.com/housedesignskenya?igsh=c3hpcHJnaWZwNDVp">
                        <Image src={instagram} alt='instagram' className={styles.instagram} />
                    </a>
                    <a href="https://x.com/housedesignske?s=11">
                        <Image src={twitter} alt='twitter' className={styles.twitter} />
                    </a>
                    <a href="https://linkedin.com/company/house-designs-ke/">
                        <Image src={linkedIn} alt='LinkedIn' className={styles.linkedin} />
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
                            <Image src={whatsapp} alt='whatsapp' className={styles.mobileIcon} />
                        </a>
                        <a href="tel:+254710478088" className={styles.mobileRefLink}>
                            <Image src={mobile} alt='mobile' className={styles.mobileIcon} />
                        </a>
                        <a href="https://x.com/housedesignske?s=11" className={styles.twitterLink}>
                            <Image src={twitter} alt='twitter' className={styles.mobileIcon} />
                        </a>
                        <a href="https://linkedin.com/company/house-designs-ke/" className={styles.linkedinLink}>
                            <Image src={linkedIn} alt='LinkedIn' className={styles.mobileIcon} />
                        </a>
                        <a href="https://instagram.com/housedesignskenya?igsh=c3hpcHJnaWZwNDVp" className={styles.instagramLink}>
                            <Image src={instagram} alt='instagram' className={styles.mobileIcon} />
                        </a>
                    </div>
                    <p>© 2024, All Rights Reserved</p>
                </div>
                <p className={styles.footerText}>© 2024, All Rights Reserved </p>
            </div>
        </div>
    )
}
