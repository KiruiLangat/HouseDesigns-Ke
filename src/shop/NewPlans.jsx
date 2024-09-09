import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './newPlans.css'
import { ReactComponent as Star} from '../images/stars.svg'
import { fetchCategories, fetchProducts } from './woocommerce'
import { ReactComponent as Bathrooms} from '../images/bathroom.svg'
import { ReactComponent as Bedrooms} from '../images/bedroom.svg'
import { ReactComponent as Floors} from '../images/floors.svg'
import { ReactComponent as PlinthArea} from '../images/plinth.svg'
import { ReactComponent as Arrow} from '../images/Arrow.svg'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useCart, useWishlist } from './cartContext'

import OptionsPopUp from './optionsPopUp'

import '@fontsource/poppins'

const style = {
    fontFamily: 'Poppins'
}

export default function NewPlans(){
    const [products, setProducts] = useState([]);

    //handling Cart and Wishlist
    const { cart, handleAddToCart, handleRemoveFromCart } = useCart();
    const { wishlist, handleAddToWishlist, handleRemoveFromWishlist } = useWishlist();

    const isInCart = (product) => cart.some((item) =>item && item.slug === product.slug);
    const isInWishlist = (product) => wishlist.some((item) => item.slug === product.slug);

    //Options Pop up
    const [showOptionsPopUp, setShowOptionsPopUp] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null)
     
    const handleClosePopUp = () => {
         setShowOptionsPopUp(false)
    }


    useEffect (() => {

        const fetchData = async () => {
            try {
                const fetchedCategories = await fetchCategories();
        

                const category = fetchedCategories.find(cat => cat.name === 'New Plans');
                if (category){
                    const categoryProducts = await fetchProducts(category.id);
                    setProducts(categoryProducts.slice(0,3));
                } else {
                    console.log('Category not found');
                }
            } catch (error) {
                console.log('Error Fetching Products',error);
                }
        }
                fetchData();
    
    }, []);


    return(
        <div className='new-plans-container' style={style}>
            <div className='new-plans'>
                    <h1>New Plans</h1>
                    
                <div className='new-plans-heading'>
                    
                    <h2>Explore Our Latest House Plans and Designs</h2>
                   
                    <Link to={`/shop/New Plans`}>
                        <div className='plans-nav-CTA'>
                            <p>See More</p>
                            <Arrow className='icon-arrow-np' />
                        </div>
                    </Link>
                </div>
                {products.map(product => (
                    <div key={product.id} className='new-plans-card'>
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
                            <div className='new-indicator'>
                                < Star className='icon-indicator' />
                                <p>New</p>
                            </div>
                            <div className='new-plans-card-title'>
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
    )
}