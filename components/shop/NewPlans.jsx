import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../assets/styles/shop/newPlans.module.css'
import { fetchCategories, fetchProducts } from '../../services/shop/woocommerce'
import Star from '../../assets/images/Stars.svg';
import Bedrooms from '../../assets/images/Bedroom.svg';
import Bathrooms from '../../assets/images/Bathroom.svg';
import Floors from '../../assets/images/Floors.svg';
import PlinthArea from '../../assets/images/Plinth.svg';
import Arrow from '../../assets/images/Arrow.svg';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useCart, useWishlist } from '../../services/shop/cartContext'

import OptionsPopUp from './OptionsPopUp'

import '@fontsource/poppins'

const style = {
    fontFamily: 'Poppins'
}

// Placeholder component for NewPlans
const NewPlanPlaceholder = () => (
    <div className={styles.newPlansCard}>
        <div className={styles.imagePlaceholder}></div>
        <div className={styles.newPlansCardTitle}>
            <div className={styles.titlePlaceholder}></div>
            <div className={styles.pricePlaceholder}></div>
        </div>
        <div className={styles.newPlansCardDetail}>
            {[1, 2, 3, 4].map(i => (
                <div key={i} className={styles.detailPlaceholder}></div>
            ))}
        </div>
    </div>
);

const NewPlans = () => {
    // Product data
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    // Cart and Wishlist handling
    const { cart, handleAddToCart, handleRemoveFromCart } = useCart();
    const { wishlist, handleAddToWishlist, handleRemoveFromWishlist } = useWishlist();

    // Options Pop up state
    const [showOptionsPopUp, setShowOptionsPopUp] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);

    const isInCart = (product) => cart.some((item) => item && item.slug === product.slug);
    const isInWishlist = (product) => wishlist.some((item) => item && item.slug === product.slug);

    const handleClosePopUp = () => {
        setShowOptionsPopUp(false);
    }

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const fetchedCategories = await fetchCategories();

                const category = fetchedCategories.find(cat => cat.name === 'New Plans');
                if (category) {
                    const categoryProducts = await fetchProducts(category.id);
                    setProducts(categoryProducts.slice(0, 3));
                } else {
                    console.log('Category not found');
                }
            } catch (error) {
                console.log('Error Fetching Products', error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <div className={styles.newPlansContainer} style={style}>
            <div className={styles.newPlans}>
                <h1>New Plans</h1>

                <div className={styles.newPlansHeading}>
                    <h2>Explore Our Latest House Plans and Designs</h2>

                    <Link href={`/shop/New Plans`}>
                        <div className={styles.plansNavCTA}>
                            <p>See More</p>
                            <Image src={Arrow} alt="Arrow" className={styles.iconArrowNp} />
                        </div>
                    </Link>
                </div>
                {isLoading ? (
                    // Display placeholders while loading
                    <>
                        <NewPlanPlaceholder />
                        <NewPlanPlaceholder />
                        <NewPlanPlaceholder />
                    </>
                ) : (
                    // Display actual products once loaded
                    products.map(product => (
                        <div key={product.id} className={styles.newPlansCard}>
                            <Link href={`/shop/product/${product.slug}`}>
                                <Image src={product.images[0].src} alt={product.name} loading='lazy' width={500} height={500} />
                            </Link>
                            <div className={styles.cartWishlist}>
                                <div className={styles.wishlist} onClick={() =>
                                    isInWishlist(product) ? handleRemoveFromWishlist(product) : handleAddToWishlist(product)}>
                                    {isInWishlist(product) ? (
                                        <FavoriteIcon className={styles.iconWishlist} />
                                    ) : (
                                        <FavoriteBorderIcon className={styles.iconWishlist} />
                                    )}
                                </div>
                                <div className={styles.addCart} onClick={() => {
                                    setSelectedProduct(product)
                                    setShowOptionsPopUp(true)
                                }}>
                                    {isInCart(product) ? (
                                        <ShoppingBagIcon className={styles.iconAddCart} />
                                    ) : (
                                        <ShoppingBagOutlinedIcon className={styles.iconAddCart} />
                                    )}
                                </div>

                                {showOptionsPopUp && selectedProduct === product && (
                                    <OptionsPopUp
                                        product={selectedProduct}
                                        setSelectedPrice={setSelectedPrice}
                                        selectedPrice={selectedPrice}
                                        setSelectedOption={setSelectedOption}
                                        selectedOption={selectedOption}
                                        onClose={() => setShowOptionsPopUp(false)}
                                        handleClosePopUp={handleClosePopUp}
                                        onSelectOption={(_option) => {
                                            isInCart(selectedProduct) ? 
                                                handleRemoveFromCart(selectedProduct) :
                                                handleAddToCart(selectedProduct, selectedPrice, selectedOption)
                                            setShowOptionsPopUp(false)
                                        }}
                                    />
                                )}
                            </div>

                            <div className={styles.newIndicator}>
                                <Image src={Star} alt="New" className={styles.iconIndicator} />
                                <p>New</p>
                            </div>
                            <div className={styles.newPlansCardTitle}>
                                <h3>{product.name}</h3>
                                <h4>From ${product.price}</h4>
                            </div>

                            <div className={styles.newPlansCardDetail}>
                                <div className={styles.newPlansCardDetails}>
                                    <Image src={Bedrooms} alt="Bedrooms" className={styles.iconGrid} />
                                    <p>{product.attributes.find(attr => attr.name === 'Bedrooms')?.options[0]} Bedrooms</p>
                                </div>

                                <div className={styles.newPlansCardDetails}>
                                    <Image src={Floors} alt="Floors" className={styles.iconGridFloors} />
                                    <p>{product.attributes.find(attr => attr.name === 'Floors')?.options[0]} Floor(s)</p>
                                </div>
                                <div className={styles.newPlansCardDetails}>
                                    <Image src={PlinthArea} alt="Plinth Area" className={styles.iconGrid} />
                                    <p>{product.attributes.find(attr => attr.name === 'Plinth Area')?.options[0]}</p>
                                </div>
                                <div className={styles.newPlansCardDetails}>
                                    <Image src={Bathrooms} alt="Bathrooms" className={styles.iconGrid} />
                                    <p>{product.attributes.find(attr => attr.name === 'Bathrooms')?.options[0]} Bathrooms</p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default NewPlans;