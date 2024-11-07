import React, {useState, useEffect} from 'react';
import {fetchAllProducts } from '../shop/woocommerce';
import { Link, useParams } from 'react-router-dom';
import TuneIcon from '@mui/icons-material/Tune'

import './filteredCategoriesPage.css'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';

import { ReactComponent as Bedrooms } from '../images/bedroom.svg';
import { ReactComponent as Floors } from '../images/floors.svg';
import { ReactComponent as PlinthArea } from '../images/plinth.svg';
import { ReactComponent as Bathrooms } from '../images/bathroom.svg';

import { useCart, useWishlist } from '../shop/cartContext';
import OptionsPopUp from '../shop/optionsPopUp';



const style = {
    fontFamily: 'Poppins'
}

export default function FilteredCategoriesPage() {
    const {category} = useParams();
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [isFilterActive, setIsFilterActive] = useState(false);

    const { cart, handleAddToCart, handleRemoveFromCart } = useCart();
    const { wishlist, handleAddToWishlist, handleRemoveFromWishlist } = useWishlist();

    const isInCart = (product) => cart.some((item) =>item && item.slug === product.slug);
    const isInWishlist = (product) => wishlist.some((item) => item.slug === product.slug);

    //Options Pop up
    const [showOptionsPopUp, setShowOptionsPopUp] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null)
     
    const handleClosePopUp = () => {
         setShowOptionsPopUp(false)
    }


    useEffect(() => {
        if(selectedCategory) {
            fetchAllProducts(selectedCategory)
            .then(data => 
                setProducts(data))
        }
    }, [selectedCategory])
    
    useEffect(() => {
        setSelectedCategory(category)
    }, [category])



    const formatCategoryName = (name) => {
        if (!name) return 'Category';
        return name
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };


    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible)
    }


    const handleSearch = () => {
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setProducts(filteredProducts);
    }

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    }
    
    const toggleFilter = () => {
        setIsFilterActive(!isFilterActive)
    }

    
    return(
        <div className='filtered-categories-page' style={style}>
            <div className='filtered-categories-products'>
                <h1>{formatCategoryName(selectedCategory)}</h1>
                
                <div className='filter-search'>
                    <div 
                    className={`filter-title ${isFilterActive ? 'active' : ''}`} 
                    onClick={toggleFilter}
                    >
                        <TuneIcon className='icon-tune'/>
                        <p>Filters</p> 
                    </div>
                    
                </div>
                <div className='filtered-products-container'>
                    <div className='filter-of-categories'>
                        <div className='filtered-category-attributes'>
                            <div className={`filter-attributes ${isFilterActive ? 'show' : ''}`}>
                                <div className='attribute-1' onClick={toggleDropdown}>
                                    <h3>Bedrooms</h3>
                                    {isDropdownVisible ? (
                                        <ArrowDropUpIcon className='icon-drop'/>
                                    ) : (
                                        <ArrowDropDownIcon className='icon-drop'/>
                                    )}
                                </div>
                                {isDropdownVisible && (
                                    <div className='attribute-1-options'>
                                        <p>1 Bedroom</p>
                                        <p>2 Bedrooms</p>
                                        <p>3 Bedrooms</p>
                                        <p>4 Bedrooms</p>
                                        <p>5 Bedrooms</p>
                                    </div>
                                )}
                                <div className='attribute-1' onClick={toggleDropdown}>
                                    <h3>Bathrooms</h3>
                                    {isDropdownVisible ? (
                                        <ArrowDropUpIcon className='icon-drop'/>
                                    ) : (
                                        <ArrowDropDownIcon className='icon-drop'/>
                                    )}
                                </div>
                                {isDropdownVisible && (
                                    <div className='attribute-1-options'>
                                        <p>1 Bathroom</p>
                                        <p>2 Bathrooms</p>
                                        <p>3 Bathrooms</p>
                                        <p>4 Bathrooms</p>
                                        <p>5 Bathrooms</p>
                                    </div>
                                )}
                                <div className='attribute-1' onClick={toggleDropdown}>
                                    <h3>Floors</h3>
                                    {isDropdownVisible ? (
                                        <ArrowDropUpIcon className='icon-drop'/>
                                    ) : (
                                        <ArrowDropDownIcon className='icon-drop'/>
                                    )}
                                </div>
                                {isDropdownVisible && (
                                    <div className='attribute-1-options'>
                                        <p>1 Floor</p>
                                        <p>2 Floors</p>
                                        <p>3 Floors</p>
                                        <p>4 Floors</p>
                                        <p>5 Floors</p>
                                    </div>
                                )}
                                <div className='attribute-1' onClick={toggleDropdown}>
                                    <h3>Plinth Area</h3>
                                    {isDropdownVisible ? (
                                        <ArrowDropUpIcon className='icon-drop'/>
                                    ) : (
                                        <ArrowDropDownIcon className='icon-drop'/>
                                    )}
                                </div>
                                {isDropdownVisible && (
                                    <div className='attribute-1-options'>
                                        <p>100m<sup>2</sup></p>
                                        <p>200m<sup>2</sup></p>
                                        <p>300m<sup>2</sup></p>
                                        <p>400m<sup>2</sup></p>
                                        <p>500m<sup>2</sup></p>
                                    </div>
                                )}
                                

                            </div>
                        </div>

                        
                    </div>
                    
                    
                    <div className='filtered-products'>
                    <div className='filter-search-bar'>
                        <SearchIcon  className='icon-search-products' onClick={() => handleSearch()}/>
                        <input 
                        type='text'
                        placeholder='Search for Products'
                        onChange={handleSearchChange}
                        value={searchTerm}
                        />
                    </div>
                    
                        <div className='category-products'>
                        {products.map(product => (
                            <div key={product.id} className='filtered-products-card'>
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
                                        <div className='add-cart' onClick={() => {
                                            setSelectedProduct(product)
                                            setShowOptionsPopUp(true)
                                        }}>
                                            {isInCart(product) ? (
                                                <ShoppingBagIcon className='icon-add-cart'/> 
                                            ): (
                                                <ShoppingBagOutlinedIcon className='icon-add-cart'/>
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
                                                    isInCart(selectedProduct) ? handleRemoveFromCart(selectedProduct) :  handleAddToCart(selectedProduct, selectedPrice)
                                                    setShowOptionsPopUp(false)
                                                }}
                                            />       
                                        )}

                                    </div>
                                <div className='filtered-products-card-title'>
                                    <h3>{product.name}</h3>
                                    <h4>From ${product.price}</h4>
                                </div>

                                <div className='filtered-products-card-detail'>
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

                
            </div>

        </div>
    )
}