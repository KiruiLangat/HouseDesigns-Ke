import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import ShoppingBagOutlined from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import logo from '../assets/images/Logo.png';
import styles from '../assets/styles/Header.module.css'; // Updated import
import '@fontsource/poppins/300.css';

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
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <div id="header" className={styles.header} style={style}> {/* Updated className */}
            <Link href="/" passHref legacyBehavior>
                <a onClick={() => setSidebarVisible(false)}>
                    <Image src={logo} alt="logo" className={styles.logo} /> {/* Updated className */}
                </a>
            </Link>
            <nav className={styles.desktopMenu}> {/* Updated className */}
                {sidebarVisible && (
                    <ul className={`${styles.sidebar} ${sidebarVisible ? styles.show : ''}`}> {/* Updated className */}
                        <li className={styles.closeIcon} onClick={() => setSidebarVisible(false)}> {/* Updated className */}
                            <Link href="#" passHref legacyBehavior>
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                                    </svg>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/our-expertise" passHref legacyBehavior>
                                <a onClick={() => setSidebarVisible(false)}>Our Expertise</a>
                            </Link>
                        </li>
                        <li>
                            <ScrollLink
                                to="about-us"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                onClick={() => setSidebarVisible(false)}
                            >
                                About Us
                            </ScrollLink>
                        </li>
                        <li>
                            <div className={styles.shopNav}> {/* Updated className */}
                                <Link href="/shop" passHref legacyBehavior>
                                    <a onClick={() => setSidebarVisible(false)}>Shop</a>
                                </Link>
                                <div className={styles.shopDropdownToggle} onClick={toggleDropdown}> {/* Updated className */}
                                    {dropdownVisible ? <ExpandLessIcon className={styles.iconLess} /> : <ExpandMoreIcon className={styles.iconMore} />} {/* Updated className */}
                                </div>
                                {dropdownVisible && (
                                    <div className={styles.shopDropdown}> {/* Updated className */}
                                        <ul onClick={() => setDropdownVisible(false)}>
                                            <li>
                                                <Link href="/house-plans" passHref legacyBehavior>
                                                    <a onClick={() => setSidebarVisible(false)}>House Plans</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/submit-your-brief" passHref legacyBehavior>
                                                    <a onClick={() => setSidebarVisible(false)}>Submit your Brief</a>
                                                </Link>
                                            </li>
                                            <li className={styles.linkCart}> {/* Updated className */}
                                                <Link href="/cart" passHref legacyBehavior>
                                                    <a onClick={() => setSidebarVisible(false)}>
                                                        Cart
                                                        <ShoppingBagOutlined className={styles.iconCart} /> {/* Updated className */}
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className={styles.linkCart}> {/* Updated className */}
                                                <Link href="/wishlist" passHref legacyBehavior>
                                                    <a onClick={() => setSidebarVisible(false)}>
                                                        Wishlist
                                                        <FavoriteBorderIcon className={styles.iconCart} /> {/* Updated className */}
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/profile" passHref legacyBehavior>
                                                    <a>Profile</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </li>
                        <li>
                            <Link href="/blog" passHref legacyBehavior>
                                <a onClick={() => setSidebarVisible(false)}>Blog</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact-us" passHref legacyBehavior>
                                <a onClick={() => setSidebarVisible(false)}>Contact Us</a>
                            </Link>
                        </li>
                    </ul>
                )}
                <ul>
                    <li className={styles.hideOnMobile}> {/* Updated className */}
                        <Link href="/our-expertise" passHref legacyBehavior>
                            <a>Our Expertise</a>
                        </Link>
                    </li>
                    <li className={styles.hideOnMobile}> {/* Updated className */}
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
                    <li className={styles.hideOnMobile}> {/* Updated className */}
                        <div className={styles.shopNav}> {/* Updated className */}
                            <Link href="/shop" passHref legacyBehavior>
                                <a onClick={() => setSidebarVisible(false)}>Shop</a>
                            </Link>
                            <div className={styles.shopDropdownToggle} onClick={toggleDropdown}> {/* Updated className */}
                                {dropdownVisible ? <ExpandLessIcon className={styles.iconLess} /> : <ExpandMoreIcon className={styles.iconMore} />} {/* Updated className */}
                            </div>
                            {dropdownVisible && (
                                <div className={styles.shopDropdown}> {/* Updated className */}
                                    <ul onClick={() => setDropdownVisible(false)}>
                                        <li>
                                            <Link href="/house-plans" passHref legacyBehavior>
                                                <a onClick={() => setSidebarVisible(false)}>House Plans</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/submit-your-brief" passHref legacyBehavior>
                                                <a onClick={() => setSidebarVisible(false)}>Submit your Brief</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/cart" passHref legacyBehavior>
                                                <a onClick={() => setSidebarVisible(false)}>
                                                    <div className={styles.linkCart}> {/* Updated className */}
                                                        Cart
                                                        <ShoppingBagOutlined className={styles.iconCart} /> {/* Updated className */}
                                                    </div>
                                                </a>
                                            </Link>
                                        </li>
                                        <Link href="/wishlist" passHref legacyBehavior>
                                            <a onClick={() => setSidebarVisible(false)}>
                                                <li className={styles.linkCart}> {/* Updated className */}
                                                    Wishlist
                                                    <FavoriteBorderIcon className={styles.iconCart} /> {/* Updated className */}
                                                </li>
                                            </a>
                                        </Link>
                                        <li>
                                            <Link href="/profile" passHref legacyBehavior>
                                                <a onClick={() => setSidebarVisible(false)}>Profile</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </li>
                    <li className={styles.hideOnMobile}> {/* Updated className */}
                        <Link href="/blog" passHref legacyBehavior>
                            <a>Blog</a>
                        </Link>
                    </li>
                    <li className={styles.hideOnMobile}> {/* Updated className */}
                        <Link href="/contact-us" passHref legacyBehavior>
                            <a>Contact Us</a>
                        </Link>
                    </li>
                    <li className={styles.menuButton} onClick={showSidebar}> {/* Updated className */}
                        <Link href="#" passHref legacyBehavior>
                            <a>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                                </svg>
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}