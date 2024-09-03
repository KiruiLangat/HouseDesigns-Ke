import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './productDescription.css';

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
    const { slug } = useParams();
    const [product, setProduct] = useState(null);
    const [terms, setTerms] = useState([]); 
    const [variations, setVariations] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [similarProducts, setSimilarProducts] = useState([])

    const { cart, handleAddToCart, handleRemoveFromCart } = useCart();
    const {handleAddToWishlist, wishlist, handleRemoveFromWishlist } = useWishlist();

    const isInCart = (product) => cart.some((item) => item.slug === product.slug);
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
        if(product) {
            fetchProductVariations(product.id)
            .then(setVariations)
            .catch(console.error);
        }

    }, [product]);


    useEffect(() => {
        const fetchSimilarProducts = async () => {
            try{
                

                const similarCategoryProducts = await fetchAllProducts(product.categoryId)
                
                const filteredProducts = similarCategoryProducts.filter(prod => prod.categoryId === product.categoryId && prod.id !== product.id)
                
                setSimilarProducts(filteredProducts.slice(0,3))

            } catch (error) {
                console.log('Error fetching similar products', error)
            }
        }

        fetchSimilarProducts();

    }, [product]);

    //Get Service Option Terms to get description
    const getServiceOptionTerms = async () => {
        try{
            const terms = await fetchAttributesTerms('Service Option');
            setTerms(terms);
        } catch (error) {
            console.error(error);
        }
        
    }

   

    const handleOptionClick = (option) => {
        if (selectedOption && selectedOption.name === option.name) {

            //unselect the option if its already selected
            setSelectedOption(null);
            setSelectedPrice(null);
        } else {
            setSelectedOption(option);
            const variation = variations.find(variation =>
                variation.attributes.find(attr => attr.name === 'Service Option' && attr.option === option.name)
            );
            if(variation){
                setSelectedPrice(variation.price);
            }
        }
    }
       
    



    if (!product) {
        return <div className='loading'>Loading<span>...</span></div>;
    }

    return (
        <div className='product-desc-container' style={style}>
            <div className='product-landing'>
                <div className='product-desc'>
                    {product.images && product.images.length > 0 ? (
                        <GalleryCarousel images={product.images.map((img) => img.src)} />
                    ) : (
                        <div>No images</div>
                    )}
                </div>
                <div className='product-desc-info'>
                    <h1>{product.name}</h1>
                    <div className='attributesDescription'>
                        <div className='product-desc-features'>
                            <div className='product-desc-feature'>
                                <Bedrooms className='icon' />
                                <p>{product.attributes.find((attr) => attr.name === 'Bedrooms')?.options} Bedrooms</p>
                            </div>
                            <div className='product-desc-feature'>
                                <Bathrooms className='icon' />
                                <p>{product.attributes.find((attr) => attr.name === 'Bathrooms')?.options} Bathrooms</p>
                            </div>
                            <div className='product-desc-feature'>
                                <Floors className='icon-floors' />
                                <p>{product.attributes.find((attr) => attr.name === 'Floors')?.options} Floor(s)</p>
                            </div>
                            <div className='product-desc-feature'>
                                <PlinthArea className='icon' />
                                <p>{product.attributes.find((attr) => attr.name === 'Plinth Area')?.options}</p>
                            </div>
                        </div>
                    </div>
                    <div className='service-option'>
                        <h3>Service Options</h3>
                        <ul>
                            {terms.map((option,index) => (
                                <li key={index} onClick={() => handleOptionClick(option)}>
                                    {selectedOption && selectedOption.name === option.name ? (
                                        <RadioButtonCheckedIcon className='radio-unchecked'/>
                                    ) : (
                                        <RadioButtonUncheckedIcon className='radio-checked' />
                                    )}
                                    {option.name}
                                    <p>{option.description}</p>

                                </li>

                            ))}
                        </ul>
                        
                        <div className='product-to-cart'>
                            <h4>Add to Cart</h4>
                            <button style={style} onClick={() => {
                                isInCart(product) ? handleRemoveFromCart(product) : handleAddToCart(product);
                            }}>
                                <p>{selectedPrice ? `$${selectedPrice}`: 'Select An Option' }</p>
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className='product-desc-description'>
                <h2>Description</h2>
                <p dangerouslySetInnerHTML={{__html: product.description}} />
            </div>
            <div className='product-similar'>
                <h2>Recommended Products</h2>
                <div className='similar-products-list'>
                    {similarProducts.map((product) => (
                        <div key={product.id} className='similar-products'>
                            <Link to={`/product/${product.slug}`}>
                                <img src={product.images[0].src} alt={product.name} loading='lazy' />
                            </Link>
                            <div className='cart-wishlist'>
                                    <div className='wishlist' onClick={() =>
                                        isInWishlist(product) ? handleRemoveFromWishlist(product) : handleAddToWishlist(product)}>
                                        {wishlist.includes(product) ? (
                                            <FavoriteIcon className='icon-wishlist'/> 
                                        ): ( 
                                            <FavoriteBorderIcon className='icon-wishlist'/>
                                        )}
                                    </div>
                                    <div className='add-cart' onClick={() =>
                                        isInCart(product) ? handleRemoveFromCart(product) : handleAddToCart(product)}>
                                        {cart.includes(product) ? (
                                            <ShoppingBagIcon className='icon-add-cart'/> 
                                        ): (
                                            <ShoppingBagOutlinedIcon className='icon-add-cart'/>
                                        )}
                                    </div>
                                </div>
                            
                            <div className='similar-products-title'>
                                <h3>{product.name}</h3>
                                <h4>From ${product.price}</h4>
                            </div>

                            <div className='new-plans-card-detail'>
                                <div className='new-plans-card-details'>
                                    <Bedrooms className='icon-grid'/>
                                    <p>{product.attributes.find(attr => attr.name === 'Bedrooms')?.options[0]} Bedrooms</p>
                                </div>
                                
                                <div className='new-plans-card-details'>
                                    <Floors className='icon-grid-floors'/>
                                    <p>{product.attributes.find(attr => attr.name === 'Floors')?.options[0]} Floor(s)</p>
                                </div>
                                <div className='new-plans-card-details'>
                                    <PlinthArea className='icon-grid' />
                                    <p>{product.attributes.find(attr => attr.name === 'Plinth Area')?.options[0]}</p>
                                </div>
                                <div className='new-plans-card-details'>
                                    <Bathrooms className='icon-grid' />
                                    <p>{product.attributes.find(attr => attr.name === 'Bathrooms')?.options[0]} Bathrooms</p>
                                </div>
                            </div>
                        
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
