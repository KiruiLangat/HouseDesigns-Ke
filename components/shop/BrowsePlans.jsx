import React, { useState, useEffect } from 'react';
import { fetchCategories, fetchProducts } from '../../services/shop/woocommerce';
import styles from '../../assets/styles/shop/browsePlans.module.css';
import Link from 'next/link';
import Image from 'next/image';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useCart, useWishlist } from '../../services/shop/cartContext';
import OptionsPopUp from './OptionsPopUp';
import Stars from '../../assets/images/stars.svg';
import Bedroom from '../../assets/images/Bedroom.svg';
import Bathroom from '../../assets/images/Bathroom.svg';
import Floors from '../../assets/images/Floors.svg';
import PlinthArea from '../../assets/images/Plinth.svg';
import Arrow from '../../assets/images/Arrow.svg';

const style = {
    fontFamily: 'Poppins'
};



const BrowsePlans = () => {
    // Fetching categories from woocommerce
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Popular Plans');

    // Handling Cart and Wishlist
    const { cart, handleAddToCart, handleRemoveFromCart } = useCart();
    const { wishlist, handleAddToWishlist, handleRemoveFromWishlist } = useWishlist();

    const isInCart = (product) => cart.some((item) => item && item.slug === product.slug);
    const isInWishlist = (product) => wishlist.some((item) => item.slug === product.slug);

    // Options Pop up
    const [showOptionsPopUp, setShowOptionsPopUp] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);

    const handleClosePopUp = () => {
        setShowOptionsPopUp(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch categories
                const categoriesData = await fetchCategories();
                setCategories(categoriesData);
                console.log('Fetched Categories:', categoriesData);

                // Set default selected category if not already set
                if (!selectedCategory && categoriesData.length > 0) {
                    setSelectedCategory(categoriesData[0]?.name);
                }
            } catch (error) {
                console.error('Error fetching categories', error);
            }
        };

        fetchData();
    }, [selectedCategory]);

    useEffect(() => {
        const fetchProductsForCategory = async () => {
            try {
                const category = categories.find(cat => cat.name === selectedCategory);
                if (category) {
                    const categoryProducts = await fetchProducts(category.id);
                    setProducts(categoryProducts);
                    console.log('Fetched Products:', categoryProducts);
                }
            } catch (error) {
                console.error('Error fetching products', error);
            }
        };

        if (selectedCategory) {
            fetchProductsForCategory();
        }
    }, [selectedCategory, categories]);

    const desiredCategories = ['Maisonettes', 'Bungalows', 'Condos'];

    return (
        <div className={styles.plansContainer} style={style}>
            <div className={styles.browsePlans}>
                <div className={styles.plansTitle}>
                    <h1>Browse Our Plans</h1>
                    <h2>Explore Our Designs and Find the Perfect Plans For Your Taste</h2>
                </div>
                <div className={styles.plansCategories}>
                    <div className={styles.categoriesNav}>
                        <ul className={styles.categories}>
                            {[
                                ...categories.filter(category => category.name === 'Popular Plans'),
                                ...categories.filter(category => desiredCategories.includes(category.name))
                            ].map(category => (
                                <li
                                    key={category.slug}
                                    className={`${category.name === 'Popular Plans' ? styles.defaultCategory : ''}
                                        ${category.name === selectedCategory ? styles.selectedCategory : ''}
                                        ${category.name === 'Popular Plans' && category.name !== selectedCategory ? styles.defaultCategoryUnselected : ''}`}
                                    onClick={() => {
                                        setSelectedCategory(category.name);
                                        console.log('selected category', category.name);
                                    }}
                                >
                                    {category.name}
                                </li>
                            ))}
                        </ul>
                        <Link href={`/shop/${selectedCategory}`}>
                            <div className={styles.plansNav}>
                                <p>See More</p>
                                <Image src={Arrow} alt="Arrow" className={styles.iconArrow} />
                            </div>
                        </Link>
                    </div>

                    {products.length > 0 && (
                        <div className={styles.landingPlans}>
                            <div className={styles.bigPlanSample}>
                                <Link href={`/shop/product/${products[0]?.slug}`}>
                                    <Image src={products[0]?.images[0]?.src} alt={products[0]?.name} loading='lazy' width={500} height={500} />
                                </Link>
                                <div className={styles.cartWishlist}>
                                    <div className={styles.wishlist} onClick={() => {
                                        isInWishlist(products[0]) ? handleRemoveFromWishlist(products[0]) : handleAddToWishlist(products[0]);
                                    }}>
                                        {isInWishlist(products[0]) ? (
                                            <FavoriteIcon className={styles.iconWishlist} />
                                        ) : (
                                            <FavoriteBorderIcon className={styles.iconWishlist} />
                                        )}
                                    </div>
                                    <div className={styles.addCart} onClick={() => {
                                        setSelectedProduct(products[0]);
                                        setShowOptionsPopUp(true);
                                    }}>
                                        {isInCart(products[0]) ? (
                                            <ShoppingBagIcon className={styles.iconAddCart} />
                                        ) : (
                                            <ShoppingBagOutlinedIcon className={styles.iconAddCart} />
                                        )}
                                    </div>
                                    {showOptionsPopUp && (
                                        <OptionsPopUp
                                            product={selectedProduct}
                                            onClose={() => setShowOptionsPopUp(false)}
                                            setSelectedPrice={setSelectedPrice}
                                            selectedprice={selectedPrice}
                                            handleClosePopUp={handleClosePopUp}
                                            onSelectOption={(_option) => {
                                                isInCart(selectedProduct) ? handleRemoveFromCart(selectedProduct) : handleAddToCart(selectedProduct, selectedPrice);
                                                setShowOptionsPopUp(false);
                                            }}
                                        />
                                    )}
                                </div>
                                <div className={styles.previewDetailsContainer}>
                                    <div className={styles.previewDetailsTitle}>
                                        <div className={styles.starPlan}>
                                            <Image src={Stars} alt="Stars" className={styles.iconPopular} />
                                            <p>Most Popular Plan</p>
                                        </div>
                                        <div className={styles.previewDetailsTitlePricing}>
                                            <h3>{products[0].name}</h3>
                                            <h4 className={styles.popularPricing}> From ${products[0].price}</h4>
                                        </div>
                                    </div>
                                    <div className={styles.previewDetails}>
                                        <div className={styles.previewDetailsInfo}>
                                            <div className={styles.Bedrooms}>
                                                <Image src={Bedroom} alt="Bedroom" className={styles.icon} />
                                                <p>{products[0].attributes.find(attr => attr.name === 'Bedrooms')?.options[0]} Bedrooms</p>
                                            </div>
                                            <div className={styles.Bathrooms}>
                                                <Image src={Bathroom} alt="Bathroom" className={styles.icon} />
                                                <p>{products[0].attributes.find(attr => attr.name === 'Bathrooms')?.options[0]} Bathrooms</p>
                                            </div>
                                            <div className={styles.Floors}>
                                                <Image src={Floors} alt="Floors" className={styles.iconFloors} />
                                                <p>{products[0].attributes.find(attr => attr.name === 'Floors')?.options[0]} Floor(s)</p>
                                            </div>
                                            <div className={styles.Plinth}>
                                                <Image src={PlinthArea} alt="Plinth Area" className={styles.icon} />
                                                <p>{products[0].attributes.find(attr => attr.name === 'Plinth Area')?.options[0]}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.bigPlanSampleImages}>
                                {products[0].images.length >= 2 ? (
                                    products[0].images.slice(1, 3).map((image, index) => (
                                        <div key={index} className={styles.bpsi1}>
                                            <Link href={`/shop/product/${products[0].slug}`}>
                                                <Image src={image.src} alt={products[0].name} loading='lazy' width={500} height={500} />
                                            </Link>
                                        </div>
                                    ))
                                ) : (
                                    <p>Not Enough Images</p>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BrowsePlans;