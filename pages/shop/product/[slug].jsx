import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../../assets/styles/shop/productDescription.module.css';

import '@fontsource/poppins';
import { fetchAllProducts, fetchAttributesTerms, fetchProductVariations } from '../../../services/shop/woocommerce';
import Bedrooms from '../../../assets/images/Bedroom.svg';
import Bathrooms from '../../../assets/images/Bathroom.svg';
import Floors from '../../../assets/images/Floors.svg';
import PlinthArea from '../../../assets/images/Plinth.svg';

import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import GalleryCarousel from '../../../components/shop/GalleryCarousel';
import OptionsPopUp from '../../../components/shop/OptionsPopUp';

import { useCart, useWishlist } from '../../../services/shop/cartContext';

const style = {
    fontFamily: 'Poppins',
};

// Simplified placeholder components
const ProductImagePlaceholder = () => (
    <div className={styles.galleryPlaceholder}>
        <div className={styles.thumbnailsContainer}>
            <div className={styles.imagePlaceholder}></div>
            <div className={styles.imagePlaceholder}></div>
            <div className={styles.imagePlaceholder}></div>
            <div className={styles.imagePlaceholder}></div>
        </div>
        <div className={styles.mainImagePlaceholder}></div>
    </div>
);

const ProductDetailsPlaceholder = () => (
    <div className={styles.productDescInfo}>
        <div className={styles.titlePlaceholder}></div>
        <div className={styles.featuresPlaceholder}></div>
        <div className={styles.optionsPlaceholder}></div>
    </div>
);

const SimilarProductPlaceholder = () => (
    <div className={styles.similarProducts}>
        <div className={styles.similarProductPlaceholder}>
            <div className={styles.similarImagePlaceholder}></div>
            <div className={styles.similarInfoPlaceholder}></div>
        </div>
    </div>
);

export default function ProductDescription() {
    const router = useRouter();
    const { slug } = router.query;
    const [product, setProduct] = useState(null);
    const [terms, setTerms] = useState([]);
    const [variations, setVariations] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [similarProducts, setSimilarProducts] = useState([]);
    const [showOptionsPopUp, setShowOptionsPopUp] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSimilarLoading, setIsSimilarLoading] = useState(true);

    const { cart, handleAddToCart, handleRemoveFromCart } = useCart();
    const { handleAddToWishlist, wishlist, handleRemoveFromWishlist } = useWishlist();

    const isInCart = (product) => cart.some((item) => item && item.slug === product.slug);
    const isInWishlist = (product) => wishlist.some((item) => item.slug === product.slug);

    useEffect(() => {
        if (!slug) return;
        
        setIsLoading(true);
        // Fetch the main product
        fetchAllProducts()
            .then((products) => {
                const matchedProduct = products.find((p) => p.slug === slug);
                setProduct(matchedProduct);
                return matchedProduct;
            })
            .catch(console.error)
            .finally(() => {
                setIsLoading(false);
            });
    }, [slug]);

    useEffect(() => {
        if (!product) return;
        
        getServiceOptionTerms();
        fetchProductVariations(product.id)
            .then(setVariations)
            .catch(console.error);
    }, [product]);

    useEffect(() => {
        const fetchSimilarProducts = async () => {
            if (!product) return;
            
            setIsSimilarLoading(true);
            try {
                if(product && product.categories && product.categories.length > 0) {
                    const allProducts = await fetchAllProducts();
                    
                    // Filter products that share the same category as the current product
                    // and exclude the current product
                    const filteredProducts = allProducts.filter(prod => 
                        prod.id !== product.id && // Exclude current product
                        prod.categories && 
                        prod.categories.some(prodCat => 
                            product.categories.some(currentCat => 
                                currentCat.id === prodCat.id
                            )
                        )
                    );

                    setSimilarProducts(filteredProducts.slice(0, 3));
                }
            } catch (error) {
                console.log('Error fetching similar products', error);
                setSimilarProducts([]); // set empty array on errors
            } finally {
                setIsSimilarLoading(false);
            }
        };

        fetchSimilarProducts();
    }, [product]);

    const handleClosePopUp = () => {
        setShowOptionsPopUp(false);
    };
    
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

    // Add title for the page even when loading
    return (
        <div className={styles.productDescContainer} style={style}>
            <Head>
                <title>{product ? product.name : 'Product Details'}</title>
                {product && (
                    <>
                        <meta name='title' content={product.name} />
                        <meta name='description' content={product.description} />
                        <meta property='og:title' content={product.name} />
                        <meta property='og:description' content={product.description} />
                        <meta property='og:image' content={product.images[0].src} />
                        <meta property='og:image:width' content='1200' />
                        <meta property='og:image:height' content='600' />
                        <meta property='og:url' content={`https://housedesigns.co.ke/shop/product/${product.slug}`} />
                        <meta name='twitter:card' content='summary' />
                        <meta name='twitter:title' content={product.name} />
                        <meta name='twitter:description' content={product.description} />
                        <meta name='twitter:image' content={product.images[0].src} />
                        <meta name='twitter:image:width' content='1024' />
                        <meta name='twitter:image:height' content='512' />
                        <meta name='twitter:url' content={`https://housedesigns.co.ke/shop/product/${product.slug}`} />
                    </>
                )}
            </Head>

            <div className={styles.productLanding}>
                {isLoading ? (
                    <>
                        <ProductImagePlaceholder />
                        <ProductDetailsPlaceholder />
                    </>
                ) : (
                    <>
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
                                        <Image src={Bedrooms} alt={'Bedrooms'} className={styles.icon} />
                                        <p>{product.attributes.find((attr) => attr.name === 'Bedrooms')?.options} Bedrooms</p>
                                    </div>
                                    <div className={styles.productDescFeature}>
                                        <Image src={Bathrooms} alt={'Bathrooms'} className={styles.icon} />
                                        <p>{product.attributes.find((attr) => attr.name === 'Bathrooms')?.options} Bathrooms</p>
                                    </div>
                                    <div className={styles.productDescFeature}>
                                        <Image src={Floors} alt={'Floors'} className={styles.iconFloors} />
                                        <p>{product.attributes.find((attr) => attr.name === 'Floors')?.options} Floor(s)</p>
                                    </div>
                                    <div className={styles.productDescFeature}>
                                        <Image src={PlinthArea} alt={'Plinth Area'} className={styles.icon} />
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
                                    <div className={styles.cartHeader}>
                                        <h4>Add to Cart</h4>
                                        {isInCart(product) && (
                                            <Link href="/shop/cart" legacyBehavior>
                                                <a className={styles.viewCartLink}>
                                                    <ShoppingCartIcon className={styles.cartIcon} />
                                                    <span>View Cart</span>
                                                </a>
                                            </Link>
                                        )}
                                    </div>
                                    <button
                                        style={style}
                                        onClick={() => {
                                            isInCart(product) 
                                                ? handleRemoveFromCart(product) 
                                                : handleAddToCart(product, selectedPrice, selectedOption);
                                        }}
                                    >
                                        <p>{selectedPrice ? `$${selectedPrice}` : 'Select An Option'}</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>

            {!isLoading && (
                <div className={styles.productDescDescription}>
                    <h2>Description</h2>
                    <p dangerouslySetInnerHTML={{ __html: product.description }} />
                </div>
            )}

            <div className={styles.productSimilar}>
                <h2>Recommended Products</h2>
                <div className={styles.similarProductsList}>
                    {isSimilarLoading ? (
                        // Display placeholders for similar products
                        <>
                            <SimilarProductPlaceholder />
                            <SimilarProductPlaceholder />
                            <SimilarProductPlaceholder />
                        </>
                    ) : similarProducts && similarProducts.length > 0 ? (
                        similarProducts.map((product) => (
                            <div key={product.id} className={styles.similarProducts}>
                                <Link href={`/shop/product/${product.slug}`} legacyBehavior>
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
                                        {isInWishlist(product) ? (
                                            <FavoriteIcon className={styles.iconWishlist} />
                                        ) : (
                                            <FavoriteBorderIcon className={styles.iconWishlist} />
                                        )}
                                    </div>
                                    <div
                                        className={styles.addCart}
                                        onClick={() => {
                                            setSelectedProduct(product);
                                            setShowOptionsPopUp(true);
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
                                <div className={styles.similarProductsTitle}>
                                    <h3>{product.name}</h3>
                                    <h4>From ${product.price}</h4>
                                </div>
                                <div className={styles.newPlansCardDetail}>
                                    <div className={styles.newPlansCardDetails}>
                                        <Image src={Bedrooms} alt={'Bedrooms'} className={styles.iconGrid} />
                                        <p>{product.attributes.find((attr) => attr.name === 'Bedrooms')?.options[0]} Bedrooms</p>
                                    </div>
                                    <div className={styles.newPlansCardDetails}>
                                        <Image src={Floors} alt={'Floors'} className={styles.iconGridFloors} />
                                        <p>{product.attributes.find((attr) => attr.name === 'Floors')?.options[0]} Floor(s)</p>
                                    </div>
                                    <div className={styles.newPlansCardDetails}>
                                        <Image src={PlinthArea} alt={'Plinth Area'} className={styles.iconGrid} />
                                        <p>{product.attributes.find((attr) => attr.name === 'Plinth Area')?.options[0]}</p>
                                    </div>
                                    <div className={styles.newPlansCardDetails}>
                                        <Image src={Bathrooms} alt={'Bathrooms'} className={styles.iconGrid} />
                                        <p>{product.attributes.find((attr) => attr.name === 'Bathrooms')?.options[0]} Bathrooms</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p style={{textAlign:'center'}}>No Similar Products found</p>
                    )}
                </div>
            </div>
        </div>
    );
}
