import React, {useState, useEffect} from 'react'
import {fetchCategories , fetchProducts} from './woocommerce'
import './browsePlans.css'
import { Link } from 'react-router-dom'
import { ReactComponent as Stars } from '../images/stars.svg'
import { ReactComponent as Bedroom } from '../images/bedroom.svg'
import { ReactComponent as Bathroom } from '../images/bathroom.svg'
import { ReactComponent as Floors } from '../images/floors.svg'
import { ReactComponent as PlinthArea } from '../images/plinth.svg'
import { ReactComponent as Arrow } from '../images/Arrow.svg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useCart, useWishlist } from './cartContext'
import OptionsPopUp from './optionsPopUp'

const style ={
    fontFamily: 'Poppins'
}

export default function Plans(){

    //Fetching categories from woocommerce
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Popular Plans');

    //handling Cart and Wishlist
    const {cart, handleAddToCart, handleRemoveFromCart} = useCart();
    const {wishlist, handleAddToWishlist, handleRemoveFromWishlist} = useWishlist();

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

    const desiredCategories = ['Maisonettes','Bungalows','Condos'];

   
    

    return(
        <div className='plans-container' style={style}>
            <div className='browse-plans'>
                <div className='plans-title'>
                    <h1>Browse Our Plans</h1>
                    <h2>Explore Our Designs and Find the Perfect Plans For Your Taste</h2>
                </div>
                <div className='plans-categories'>
                    <div className='categories-nav'>
                        <ul className='categories'>
                            {[

                                ...categories.filter(category => category.name === 'Popular Plans'),
                                ...categories.filter(category => desiredCategories.includes(category.name))

                            ].map(category => (
                                    <li

                                        key={category.slug}
                                        className={`${category.name === 'Popular Plans' ? 'default-category' : ''}
                                        ${category.name === selectedCategory ? 'selected-category' : ''}
                                        ${category.name === 'Popular Plans' && category.name !== selectedCategory ? 'default-category-unselected' : ''}`}
                                        onClick={() => {
                                            setSelectedCategory(category.name)
                                            console.log('selected category', category.name)
                                        }}
                                        >
                                            {category.name}
                                    </li>
                                ))}
                        </ul>
                        <Link to={`/shop/${selectedCategory}`}>
                            <div className='plans-nav'>
                                <p>See More</p>
                                <Arrow className='icon-arrow' />
                            </div>
                        </Link>

                    </div>


                    {products.length > 0 && (
                        <div className='landing-plans'>
                           
                            <div className='big-plan-sample'>
                            <Link to={`/product/${products[0]?.slug}`}>
                                <img src={products[0]?.images[0]?.src} alt={products[0]?.name} loading='lazy' />
                            </Link>
                                <div className='cart-wishlist'>
                                    <div className='wishlist' onClick={() =>{
                                        isInWishlist(products[0]) ? handleRemoveFromWishlist(products[0]) : handleAddToWishlist(products[0])
                                    }}>                                
                                        {isInWishlist(products[0]) ? (
                                            <FavoriteIcon className='icon-wishlist'
                                            /> 
                                        ): ( 
                                            <FavoriteBorderIcon className='icon-wishlist'
                                            />
                                        )}
                                    </div>
                                    <div className='add-cart' onClick={() =>{
                                        setSelectedProduct(products[0])
                                        setShowOptionsPopUp(true)
                                    }}>
                                        {isInCart(products[0]) ? (
                                            <ShoppingBagIcon className='icon-add-cart'
                                            
                                            /> 
                                        ): (
                                            <ShoppingBagOutlinedIcon className='icon-add-cart'
                                            
                                            />
                                        )}
                                    </div>
                                    {showOptionsPopUp && (   
                                    
                                        <OptionsPopUp
                                        
                                            product={selectedProduct}
                                            onClose={() => setShowOptionsPopUp(false)}
                                            handleClosePopUp={handleClosePopUp}
                                            onSelectOption={(_option) => {
                                                isInCart(selectedProduct) ? handleRemoveFromCart(selectedProduct) :  handleAddToCart(selectedProduct)
                                                setShowOptionsPopUp(false)
                                            }}
                                         />       
                                    )}
                                </div>
                                <div className='preview-details-container'>
                                    <div className='preview-details-title'>
                                            <div className='star-plan' >
                                                <Stars className='icon-popular'/>
                                                <p>Most Popular Plan</p>
                                            </div>
                                            <div className='preview-details-title-pricing'>
                                                <h3>{products[0].name}</h3>
                                                <h4 className='popular-pricing'> From ${products[0].price}</h4>
                                            </div>
                                    </div>
                                    <div className='preview-details'>

                                        <div className='preview-details-info'>
                                            <div className='Bedrooms'>
                                                <Bedroom  className='icon'/>
                                                <p>{products[0].attributes.find( attr => attr.name === 'Bedrooms')?.options[0]} Bedrooms</p>
                                            </div>
                                            <div className='Bathrooms'>
                                                <Bathroom className='icon'/>
                                                <p>{products[0].attributes.find (attr => attr.name === 'Bathrooms')?.options[0]} Bathrooms</p>
                                            </div>
                                            <div className='Floors'>
                                                <Floors className='icon-floors'/>
                                                <p>{products[0].attributes.find(attr => attr.name === 'Floors')?.options[0]} Floor(s)</p>
                                            </div>
                                            <div className='Plinth'>
                                                <PlinthArea className='icon'/>
                                                <p>{products[0].attributes.find(attr => attr.name === 'Plinth Area')?.options[0]}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='big-plan-sample-images'>
                                {products[0].images.length >= 2 ? (
                                    products[0].images.slice(1, 3).map ((image, index) => (
                                        <div key={index} className='bpsi-1'>
                                            <Link to={`/products/${products[0].slug}`}>
                                            <img src={image.src} alt={products[0].name} loading='lazy' />
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
    )
}