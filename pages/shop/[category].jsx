import React, { useState, useEffect } from 'react';
import { useCart, useWishlist } from '../../services/shop/cartContext';
import { fetchAllProducts } from '../../services/shop/woocommerce';
import { useRouter } from 'next/router';
import TuneIcon from '@mui/icons-material/Tune';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../assets/styles/shop/filteredCategoriesPage.module.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBag';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
import Bedrooms from '../../assets/images/bedroom.svg';
import Floors from '../../assets/images/floors.svg';
import PlinthArea from '../../assets/images/plinth.svg';
import Bathrooms from '../../assets/images/bathroom.svg';


import OptionsPopUp from '../../components/shop/OptionsPopUp';

const style = {
    fontFamily: 'Poppins'
};

const SvgImage = ({ src, alt, className }) => {
    return <Image src={src} alt={alt} className={className} />;
};

export default function FilteredCategoriesPage() {
    const router = useRouter();
    const { category } = router.query;
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [isFilterActive, setIsFilterActive] = useState(false);

    const { cart, handleAddToCart, handleRemoveFromCart } = useCart();
    const { wishlist, handleAddToWishlist, handleRemoveFromWishlist } = useWishlist();

    const isInCart = (product) => {
        const result = cart.some((item) => item && item.slug === product.slug);
        console.log(`Product: ${product.name}, isInCart: ${result}`);
        return result;
    };

    const isInWishlist = (product) => wishlist.some((item) => item.slug === product.slug);

    // Options Pop up
    const [showOptionsPopUp, setShowOptionsPopUp] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);

    const handleClosePopUp = () => {
        setShowOptionsPopUp(false);
    };

    useEffect(() => {
        if (selectedCategory) {
            fetchAllProducts(selectedCategory).then((data) => setProducts(data));
        }
    }, [selectedCategory]);

    useEffect(() => {
        setSelectedCategory(category);
    }, [category]);

    const formatCategoryName = (name) => {
        if (!name) return 'Category';
        return name
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleSearch = () => {
        const filteredProducts = products.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(filteredProducts);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const toggleFilter = () => {
        setIsFilterActive(!isFilterActive);
    };

    return (
        <div className={styles.filteredCategoriesPage} style={style}>
            <div className={styles.filteredCategoriesProducts}>
                <h1>{formatCategoryName(selectedCategory)}</h1>

                <div className={styles.filterSearch}>
                    <div
                        className={`${styles.filterTitle} ${isFilterActive ? styles.active : ''}`}
                        onClick={toggleFilter}
                    >
                        <TuneIcon className={styles.filterIcon} />
                        <p>Filters</p>
                    </div>
                </div>
                <div className={styles.filteredProductsContainer}>
                    <div className={styles.filterOfCategories}>
                        <div className={styles.filteredCategoryAttributes}>
                            <div className={`${styles.filterAttributes} ${isFilterActive ? styles.show : ''}`}>
                                <div className={styles.attribute1} onClick={toggleDropdown}>
                                    <h3>Bedrooms</h3>
                                    {isDropdownVisible ? (
                                        <ArrowDropUpIcon className={styles.iconDrop} />
                                    ) : (
                                        <ArrowDropDownIcon className={styles.iconDrop} />
                                    )}
                                </div>
                                {isDropdownVisible && (
                                    <div className={styles.attribute1Options}>
                                        <p>Bedrooms</p>
                                    </div>
                                )}
                                <div className={styles.attribute1} onClick={toggleDropdown}>
                                    <h3>Bathrooms</h3>
                                    {isDropdownVisible ? (
                                        <ArrowDropUpIcon className={styles.iconDrop} />
                                    ) : (
                                        <ArrowDropDownIcon className={styles.iconDrop} />
                                    )}
                                </div>
                                {isDropdownVisible && (
                                    <div className={styles.attribute1Options}>
                                        <p>Bathroom</p>
                                    </div>
                                )}
                                <div className={styles.attribute1} onClick={toggleDropdown}>
                                    <h3>Floors</h3>
                                    {isDropdownVisible ? (
                                        <ArrowDropUpIcon className={styles.iconDrop} />
                                    ) : (
                                        <ArrowDropDownIcon className={styles.iconDrop} />
                                    )}
                                </div>
                                {isDropdownVisible && (
                                    <div className={styles.attribute1Options}>
                                        <p>Floors</p>
                                    </div>
                                )}
                                <div className={styles.attribute1} onClick={toggleDropdown}>
                                    <h3>Plinth Area</h3>
                                    {isDropdownVisible ? (
                                        <ArrowDropUpIcon className={styles.iconDrop} />
                                    ) : (
                                        <ArrowDropDownIcon className={styles.iconDrop} />
                                    )}
                                </div>
                                {isDropdownVisible && (
                                    <div className={styles.attribute1Options}>
                                        <p>100m<sup>2</sup></p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className={styles.filteredProducts}>
                        <div className={styles.filterSearchBar}>
                            <SearchIcon className={styles.iconSearchProducts} onClick={() => handleSearch()} />
                            <input
                                type='text'
                                placeholder='Search for Products'
                                onChange={handleSearchChange}
                                value={searchTerm}
                            />
                        </div>

                        <div className={styles.categoryProducts}>
                            {products.map((product) => (
                                <div key={product.id} className={styles.filteredProductsCard}>
                                    <Link href={`/shop/product/${product.slug}`}>
                                        <Image
                                            src={product.images[0].src}
                                            alt={product.name}
                                            loading='lazy'
                                            width={500}
                                            height={500}
                                        />
                                    </Link>
                                    <div className={styles.cartWishlist}>
                                        <div
                                            className={styles.wishlist}
                                            onClick={() =>
                                                isInWishlist(product)
                                                    ? handleRemoveFromWishlist(product)
                                                    : handleAddToWishlist(product)
                                            }
                                        >
                                            {wishlist.includes(product) ? (
                                                <FavoriteIcon className={styles.iconWishlist} />
                                            ) : (
                                                <FavoriteBorderIcon className={styles.iconWishlist} />
                                            )}
                                        </div>
                                        <div
                                            className={styles.addCart}
                                            onClick={() => {
                                                console.log(`Clicked on product: ${product.name}`);
                                                isInCart(product)
                                                    ? handleRemoveFromCart(product)
                                                    : handleAddToCart(product);
                                            }}
                                        >
                                            {isInCart(product) ? (
                                                <ShoppingBagIcon className={styles.iconAddCart} />
                                            ) : (
                                                <ShoppingBagOutlinedIcon className={styles.iconAddCart} />
                                            )}
                                        </div>

                                        {showOptionsPopUp && selectedProduct === product && (
                                            <OptionsPopUp
                                                product={selectedProduct}
                                                onClose={() => setShowOptionsPopUp(false)}
                                                setSelectedPrice={setSelectedPrice}
                                                selectedPrice={selectedPrice}
                                                handleClosePopUp={handleClosePopUp}
                                                onSelectOption={(_option) => {
                                                    isInCart(selectedProduct)
                                                        ? handleRemoveFromCart(selectedProduct)
                                                        : handleAddToCart(selectedProduct, selectedPrice);
                                                    setShowOptionsPopUp(false);
                                                }}
                                            />
                                        )}
                                    </div>
                                    <div className={styles.filteredProductsCardTitle}>
                                        <h3>{product.name}</h3>
                                        <h4>From ${product.price}</h4>
                                    </div>

                                    <div className={styles.filteredProductsCardDetail}>
                                        <div className={styles.newPlansCardDetails}>
                                            <SvgImage src={Bedrooms} alt='Bedrooms' className={styles.iconGrid} />
                                            <p>
                                                {product.attributes.find((attr) => attr.name === 'Bedrooms')?.options[0]}{' '}
                                                Bedrooms
                                            </p>
                                        </div>

                                        <div className={styles.newPlansCardDetails}>
                                            <SvgImage src={Floors} alt='Floors' className={styles.iconGridFloors} />
                                            <p>
                                                {product.attributes.find((attr) => attr.name === 'Floors')?.options[0]}{' '}
                                                Floor(s)
                                            </p>
                                        </div>
                                        <div className={styles.newPlansCardDetails}>
                                            <SvgImage src={PlinthArea} alt='Plinth Area' className={styles.iconGrid} />
                                            <p>{product.attributes.find((attr) => attr.name === 'Plinth Area')?.options[0]}</p>
                                        </div>
                                        <div className={styles.newPlansCardDetails}>
                                            <SvgImage src={Bathrooms} alt='Bathrooms' className={styles.iconGrid} />
                                            <p>
                                                {product.attributes.find((attr) => attr.name === 'Bathrooms')?.options[0]}{' '}
                                                Bathrooms
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}