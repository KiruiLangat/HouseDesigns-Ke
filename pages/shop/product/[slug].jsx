import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../../assets/styles/shop/productDescription.module.css';

import '@fontsource/poppins';
import { fetchAllProducts, fetchAttributesTerms, fetchProductVariations } from './woocommerce';
import { ReactComponent as Bedrooms } from '../images/bedroom.svg';
import { ReactComponent as Bathrooms } from '../images/bathroom.svg';
import { ReactComponent as Floors } from '../images/floors.svg';
import { ReactComponent as PlinthArea } from '../images/plinth.svg';

import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import GalleryCarousel from './galleryCarousel';

import { useCart, useWishlist } from './cartContext';

const style = {
    fontFamily: 'Poppins',
};

export default function ProductDescription() {
    const router = useRouter();
    const { slug } = router.query;
    const [product, setProduct] = useState(null);
    const [terms, setTerms] = useState([]);
    const [variations, setVariations] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [similarProducts, setSimilarProducts] = useState([]);

    const { cart, handleAddToCart, handleRemoveFromCart } = useCart();
    const { handleAddToWishlist, wishlist, handleRemoveFromWishlist } = useWishlist();

    const isInCart = (product) => cart.some((item) => item && item.slug === product.slug);
    const isInWishlist = (product) => wishlist.some((item) => item.slug === product.slug);

    useEffect(() => {
        // Fetch the main product
        fetchAllProducts()
            .then((products) => {
                const matchedProduct = products.find((p) => p.slug === slug);
                setProduct(matchedProduct);
                return matchedProduct;
            })
            .catch(console.error);
    }, [slug]);

    useEffect(() => {
        getServiceOptionTerms();
        if (product) {
            fetchProductVariations(product.id)
                .then(setVariations)
                .catch(console.error);
        }
    }, [product]);

    useEffect(() => {
        const fetchSimilarProducts = async () => {
            try {
                const similarCategoryProducts = await fetchAllProducts(product.categoryId);
                const filteredProducts = similarCategoryProducts.filter(
                    (prod) => prod.categoryId === product.categoryId && prod.id !== product.id
                );
                setSimilarProducts(filteredProducts.slice(0, 3));
            } catch (error) {
                console.log('Error fetching similar products', error);
            }
        };

        fetchSimilarProducts();
    }, [product]);

    const getServiceOptionTerms = async () => {
        try {
            const terms = await fetchAttributesTerms('Service Option');
            setTerms(terms);
        } catch (error) {
            console.error(error);
        }
    };

    const handleOptionClick = (option) => {
        if (selectedOption && selectedOption.name === option.name) {
            // Unselect the option if it's already selected
            setSelectedOption(null);
            setSelectedPrice(null);
        } else {
            setSelectedOption(option);
            const variation = variations.find((variation) =>
                variation.attributes.find((attr) => attr.name === 'Service Option' && attr.option === option.name)
            );
            if (variation) {
                setSelectedPrice(variation.price);
            }
        }
    };

    if (!product) {
        return <div className='loading'>Loading<span>...</span></div>;
    }

    return (
        <div className={styles.productDescContainer} style={style}>
            <div className={styles.productLanding}>
                <div className={styles.productDesc}>
                    {product.images && product.images.length > 0 ? (
                        <GalleryCarousel images={product.images.map((img) => img.src)} />
                    ) : (
                        <div>No images</div>
                    )}
                </div>
                <div className={styles.productDescInfo}>
                    <h1>{product.name}</h1>
                    <div className={styles.attributesDescription}>
                        <div className={styles.productDescFeatures}>
                            <div className={styles.productDescFeature}>
                                <Bedrooms className={styles.icon} />
                                <p>{product.attributes.find((attr) => attr.name === 'Bedrooms')?.options} Bedrooms</p>
                            </div>
                            <div className={styles.productDescFeature}>
                                <Bathrooms className={styles.icon} />
                                <p>{product.attributes.find((attr) => attr.name === 'Bathrooms')?.options} Bathrooms</p>
                            </div>
                            <div className={styles.productDescFeature}>
                                <Floors className={styles.iconFloors} />
                                <p>{product.attributes.find((attr) => attr.name === 'Floors')?.options} Floor(s)</p>
                            </div>
                            <div className={styles.productDescFeature}>
                                <PlinthArea className={styles.icon} />
                                <p>{product.attributes.find((attr) => attr.name === 'Plinth Area')?.options}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.serviceOption}>
                        <h3>Service Options</h3>
                        <ul>
                            {terms.map((option, index) => (
                                <li key={index} onClick={() => handleOptionClick(option)}>
                                    {selectedOption && selectedOption.name === option.name ? (
                                        <RadioButtonCheckedIcon className={styles.radioUnchecked} />
                                    ) : (
                                        <RadioButtonUncheckedIcon className={styles.radioChecked} />
                                    )}
                                    {option.name}
                                    <p>{option.description}</p>
                                </li>
                            ))}
                        </ul>
                        <div className={styles.productToCart}>
                            <h4>Add to Cart</h4>
                            <button
                                style={style}
                                onClick={() => {
                                    isInCart(product) ? handleRemoveFromCart(product) : handleAddToCart(product);
                                }}
                            >
                                <p>{selectedPrice ? `$${selectedPrice}` : 'Select An Option'}</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.productDescDescription}>
                <h2>Description</h2>
                <p dangerouslySetInnerHTML={{ __html: product.description }} />
            </div>
            <div className={styles.productSimilar}>
                <h2>Recommended Products</h2>
                <div className={styles.similarProductsList}>
                    {similarProducts.map((product) => (
                        <div key={product.id} className={styles.similarProducts}>
                            <Link href={`/product/${product.slug}`}>
                                <a>
                                    <Image src={product.images[0].src} alt={product.name} width={500} height={500} />
                                </a>
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
                                    onClick={() =>
                                        isInCart(product) ? handleRemoveFromCart(product) : handleAddToCart(product)
                                    }
                                >
                                    {cart.includes(product) ? (
                                        <ShoppingBagIcon className={styles.iconAddCart} />
                                    ) : (
                                        <ShoppingBagOutlinedIcon className={styles.iconAddCart} />
                                    )}
                                </div>
                            </div>
                            <div className={styles.similarProductsTitle}>
                                <h3>{product.name}</h3>
                                <h4>From ${product.price}</h4>
                            </div>
                            <div className={styles.newPlansCardDetail}>
                                <div className={styles.newPlansCardDetails}>
                                    <Bedrooms className={styles.iconGrid} />
                                    <p>{product.attributes.find((attr) => attr.name === 'Bedrooms')?.options[0]} Bedrooms</p>
                                </div>
                                <div className={styles.newPlansCardDetails}>
                                    <Floors className={styles.iconGridFloors} />
                                    <p>{product.attributes.find((attr) => attr.name === 'Floors')?.options[0]} Floor(s)</p>
                                </div>
                                <div className={styles.newPlansCardDetails}>
                                    <PlinthArea className={styles.iconGrid} />
                                    <p>{product.attributes.find((attr) => attr.name === 'Plinth Area')?.options[0]}</p>
                                </div>
                                <div className={styles.newPlansCardDetails}>
                                    <Bathrooms className={styles.iconGrid} />
                                    <p>{product.attributes.find((attr) => attr.name === 'Bathrooms')?.options[0]} Bathrooms</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
