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

    // Helper function to close both sidebar and dropdown
    const closeMenus = () => {
        setSidebarVisible(false);
        setDropdownVisible(false);
    };

    return (
        <div id="header" className={styles.header} style={style}> {/* Updated className */}
            <Link href="/" passHref legacyBehavior>
                <a onClick={closeMenus}>
                    <Image src={logo} alt="logo" className={styles.logo} /> {/* Updated className */}
                </a>
            </Link>
            <nav className={styles.desktopMenu}> {/* Updated className */}
                {sidebarVisible && (
                    <ul className={`${styles.sidebar} ${sidebarVisible ? styles.show : ''}`}> {/* Updated className */}
                        <li className={styles.closeIcon} onClick={closeMenus}> {/* Updated className */}
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
                                <a onClick={closeMenus}>Our Expertise</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about-us" passHref legacyBehavior>
                                <a onClick={closeMenus}>About Us</a>
                            </Link>
                        </li>
                        <li>
                            <div className={styles.shopNav}> {/* Updated className */}
                                <Link href="/shop" passHref legacyBehavior>
                                    <a onClick={closeMenus}>Shop</a>
                                </Link>
                                <div className={styles.shopDropdownToggle} onClick={toggleDropdown}> {/* Updated className */}
                                    {dropdownVisible ? <ExpandLessIcon className={styles.iconLess} /> : <ExpandMoreIcon className={styles.iconMore} />} {/* Updated className */}
                                </div>
                                {dropdownVisible && (
                                    <div className={styles.shopDropdown}> {/* Updated className */}
                                        <ul>
                                            <li>
                                                <Link href="/shop/house-plans" passHref legacyBehavior>
                                                    <a onClick={closeMenus}>House Plans</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/shop/submit-your-brief" passHref legacyBehavior>
                                                    <a onClick={closeMenus}>Submit your Brief</a>
                                                </Link>
                                            </li>
                                            <li className={styles.linkCart}> {/* Updated className */}
                                                <Link href="/shop/cart" passHref legacyBehavior>
                                                    <a onClick={closeMenus}>
                                                        Cart
                                                        <ShoppingBagOutlined className={styles.iconCart} /> {/* Updated className */}
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className={styles.linkCart}> {/* Updated className */}
                                                <Link href="/shop/wishlist" passHref legacyBehavior>
                                                    <a onClick={closeMenus}>
                                                        Wishlist
                                                        <FavoriteBorderIcon className={styles.iconCart} /> {/* Updated className */}
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/profile" passHref legacyBehavior>
                                                    <a onClick={closeMenus}>Profile</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </li>
                        <li>
                            <Link href="/blog" passHref legacyBehavior>
                                <a onClick={closeMenus}>Blog</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact-us" passHref legacyBehavior>
                                <a onClick={closeMenus}>Contact Us</a>
                            </Link>
                        </li>
                    </ul>
                )}
                <ul>
                    <li className={styles.hideOnMobile}> {/* Updated className */}
                        <Link href="/our-expertise" passHref legacyBehavior>
                            <a onClick={closeMenus}>Our Expertise</a>
                        </Link>
                    </li>
                    <li className={styles.hideOnMobile}> {/* Updated className */}
                        <Link href="/about-us" passHref legacyBehavior>
                            <a onClick={closeMenus}>About Us</a>
                        </Link>
                    </li>
                    <li className={styles.hideOnMobile}> {/* Updated className */}
                        <div className={styles.shopNav}> {/* Updated className */}
                            <Link href="/shop" passHref legacyBehavior>
                                <a onClick={closeMenus}>Shop</a>
                            </Link>
                            <div className={styles.shopDropdownToggle} onClick={toggleDropdown}> {/* Updated className */}
                                {dropdownVisible ? <ExpandLessIcon className={styles.iconLess} /> : <ExpandMoreIcon className={styles.iconMore} />} {/* Updated className */}
                            </div>
                            {dropdownVisible && (
                                <div className={styles.shopDropdown}> {/* Updated className */}
                                    <ul>
                                        <li>
                                            <Link href="/shop/house-plans" passHref legacyBehavior>
                                                <a onClick={closeMenus}>House Plans</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/shop/submit-your-brief" passHref legacyBehavior>
                                                <a onClick={closeMenus}>Submit your Brief</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/shop/cart" passHref legacyBehavior>
                                                <a onClick={closeMenus}>
                                                    <div className={styles.linkCart}> {/* Updated className */}
                                                        Cart
                                                        <ShoppingBagOutlined className={styles.iconCart} /> {/* Updated className */}
                                                    </div>
                                                </a>
                                            </Link>
                                        </li>
                                        <Link href="/shop/wishlist" passHref legacyBehavior>
                                            <a onClick={closeMenus}>
                                                <li className={styles.linkCart}> {/* Updated className */}
                                                    Wishlist
                                                    <FavoriteBorderIcon className={styles.iconCart} /> {/* Updated className */}
                                                </li>
                                            </a>
                                        </Link>
                                        <li>
                                            <Link href="/shop/profile" passHref legacyBehavior>
                                                <a onClick={closeMenus}>Profile</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </li>
                    <li className={styles.hideOnMobile}> {/* Updated className */}
                        <Link href="/blog" passHref legacyBehavior>
                            <a onClick={closeMenus}>Blog</a>
                        </Link>
                    </li>
                    <li className={styles.hideOnMobile}> {/* Updated className */}
                        <Link href="/contact-us" passHref legacyBehavior>
                            <a onClick={closeMenus}>Contact Us</a>
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