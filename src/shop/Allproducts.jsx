import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


import { fetchAllProducts, fetchCategories, fetchAttributes } from './woocommerce';

import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import { useCart, useWishlist } from './cartContext';

import { ReactComponent as Bathrooms} from '../images/bathroom.svg';
import { ReactComponent as Bedrooms} from '../images/bedroom.svg';
import { ReactComponent as Floors} from '../images/floors.svg';
import { ReactComponent as PlinthArea} from '../images/plinth.svg';


import './Allproducts.css';
import '@fontsource/poppins';

const style = {
    fontFamily: 'Poppins',
};


export default function Allproducts({category}) {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [attributes, setAttributes] = useState([])
    const [selectedAttribute, setSelectedAttribute] = useState(null)
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredProducts, setFilteredProducts] = useState([])
    const [isDropdownVisible, setIsDropdownVisible] = useState(false)
    const [isFilterActive, setIsFilterActive] = useState(false)

    const { cart, handleAddToCart, handleRemoveFromCart } = useCart()
    const { wishlist, handleAddToWishlist, handleRemoveFromWishlist } = useWishlist()

    const isInCart = (product) => cart.some((item) => item && item.slug === product.slug)
    const isInWishlist = (product) => wishlist.some((item) => item.slug === product.slug)


    useEffect(() => {
        fetchAllProducts()
        .then((fetchedProducts) => {
            setProducts(fetchedProducts)
        })   
    }, [])

    useEffect(() => {
        fetchCategories()
        .then((fetchedCategories) => {
            setCategories(fetchedCategories)
        })
    }, [])

    useEffect (() => {
        if (selectedCategory === 'all') {
            fetchAllProducts()
            .then((fetchedProducts) => {
                setProducts(fetchedProducts)
            })
        } else {
            fetchAllProducts(selectedCategory)
            .then((fetchedProducts) => {
                setProducts(fetchedProducts)
            })
        }
    }, [selectedCategory])



    useEffect(() => {
        const fetchCategoryProducts = async () => {
            try{
                const fetchedProducts = await fetchAllProducts(selectedCategory)
                setProducts(fetchedProducts)

            } catch (error) {
                console.error(error)
            }
        }
        
        fetchCategoryProducts()
    }, [selectedCategory])

   


    useEffect(() => {
        const fetchInitialAttributes = async () => {
            try{
                const fetchedAttributes = await fetchAttributes()
                setAttributes(fetchedAttributes)
            }
            catch (error) {
                console.error(error)
            }
           
        }
        fetchInitialAttributes()

    }, [])
    
    
    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible)
    };

    const handleCategoryChange = async (category) => {
        setSelectedCategory( category === selectedCategory ? 'null' : category)
        
    }

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }
    
    const handleSearch = (event) => {
        event.preventDefault()
        console.log('Search')
    }

    
    //Filtered products Search
    useEffect(() => {
        setFilteredProducts(
            products.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.categories.includes(categories)
            )
        );
    
    },[searchTerm, products, categories]);

    //attribute selection
    const handleAttributeChange = selectedAttribute => {
        setSelectedAttribute(selectedAttribute)
    }

    //Attribute(Bedrooms) dropdown
    const[isBedroomVisible, setIsBedroomVisible] = useState(false)
    
    const toggleBedroom = () => {
        setIsBedroomVisible(!isBedroomVisible)
        console.log(isBedroomVisible)
    }


    //Attribute(Bathrooms) dropdown
    const[isBathroomVisible, setIsBathroomVisible] = useState(false)

    const toggleBathroom = () => {
        setIsBathroomVisible(!isBathroomVisible)
        console.log(isBathroomVisible)
    }

    //Attribute(Floors) dropdown
    const[isFloorVisible, setIsFloorVisible] = useState(false)

    const toggleFloor = () => {
        setIsFloorVisible(!isFloorVisible)
        console.log(isFloorVisible)
    }

    //Attribute(Plinth Area) dropdown
    const[isPlinthAreaVisible, setIsPlinthAreaVisible] = useState(false)

    const togglePlinthArea = () => {
        setIsPlinthAreaVisible(!isPlinthAreaVisible)
        console.log(isPlinthAreaVisible)
    }

   


    const toggleFilter = () => {
        setIsFilterActive(!isFilterActive)
    }
    
    

    return(
        <div className='products-home-container' style={style} >
            <div className='products-home'>
                <h1>House Plans</h1>
                <div className='filter-products'>
                    <div className='filters'>
                        <div 
                        className={`filter-header ${isFilterActive ? 'active' : ''}`}
                        onClick={toggleFilter}
                         >
                            <TuneIcon className='icon-tune'/>
                            <p>Filters</p>    
                        </div>
                        
                        <div className='filter-options'>
                            <div className='by-category' >
                                <div className='category-dropdown' onClick={toggleDropdown}>
                                    <h3>Category</h3> 
                                    {isDropdownVisible ? (
                                        <ArrowDropUpIcon className='icon-drop'/>
                                    ) : (
                                        <ArrowDropDownIcon className='icon-drop'/>
                                    )}
                                       
                                </div>
                                {isDropdownVisible && (
                                <ul>
                                    {[
                                        ...categories.filter(category => category.name !== 'Uncategorized')

                                    ].map((category) => (
                                    <li key={category} onClick={() => handleCategoryChange(category)} >                                            
                                        {selectedCategory !== category ? (
                                        <RadioButtonUncheckedIcon className='icon-category'/>
                                        ) : (
                                        <RadioButtonCheckedIcon className='icon-category'  />
                                        )}
                                        {category.name}                               
                                    </li>
                                    ))}
                                </ul>
                                )}
                            </div>
                            <div className='by-bedrooms'>  
                                <div className='bedrooms-dropdown' onClick={toggleBedroom}>
                                    <h3>Bedrooms</h3>
                                    {isBedroomVisible ? (
                                        <ArrowDropUpIcon className='icon-drop'/>
                                    ) : (
                                        <ArrowDropDownIcon className='icon-drop'/>
                                    )}
                                </div>

                                    {isBedroomVisible && (
                                        <ul>
                                           {attributes.find(attr => attr.name === 'Bedrooms')?.options?.map((option, index) => (
                                                <li key={index} onClick={() => handleAttributeChange(option)}>
                                                    {selectedAttribute === option ? (
                                                    <RadioButtonCheckedIcon className='icon-category'/>
                                                    ) : (
                                                    <RadioButtonUncheckedIcon className='icon-category'  />
                                                    )}
                                                    {option}                                                                        
                                                </li>

                                            ))}
                                        </ul>    
                                    
                                    )}
                            </div>
                            <div className='by-bedrooms'>  
                                <div className='bedrooms-dropdown' onClick={toggleBathroom}>
                                    <h3>Bathrooms</h3>
                                    {isBathroomVisible ? (
                                        <ArrowDropUpIcon className='icon-drop'/>
                                    ) : (
                                        <ArrowDropDownIcon className='icon-drop'/>
                                    )}
                                </div>

                                {isBathroomVisible && (
                                    <ul>
                                        {attributes.find(attr => attr.name === 'Bathrooms')?.options?.map((option, index) => (
                                            <li key={index} onClick={() => handleAttributeChange(option)}>
                                                {selectedAttribute === option ? (
                                                    <RadioButtonCheckedIcon className='icon-category'/>
                                                ) : (
                                                    <RadioButtonUncheckedIcon className='icon-category'  />
                                                )}
                                                {option}                                                                        
                                            </li>
                                        ))}
                                    </ul>    
                                )}
                            </div>

                            <div className='by-bedrooms'>  
                                <div className='bedrooms-dropdown' onClick={toggleFloor}>
                                    <h3>Floors</h3>
                                    {isFloorVisible ? (
                                        <ArrowDropUpIcon className='icon-drop'/>
                                    ) : (
                                        <ArrowDropDownIcon className='icon-drop'/>
                                    )}
                                </div>

                                {isFloorVisible && (
                                    <ul>
                                        {attributes.find(attr => attr.name === 'Floors')?.options?.map((option, index) => (
                                            <li key={index} onClick={() => handleAttributeChange(option)}>
                                                {selectedAttribute === option ? (
                                                    <RadioButtonCheckedIcon className='icon-category'/>
                                                ) : (
                                                    <RadioButtonUncheckedIcon className='icon-category'  />
                                                )}
                                                {option}                                                                        
                                            </li>
                                        ))}
                                    </ul>    
                                )}
                            </div>

                            <div className='by-bedrooms'>  
                                <div className='bedrooms-dropdown' onClick={togglePlinthArea}>
                                    <h3>Plinth Area</h3>
                                    {isPlinthAreaVisible ? (
                                        <ArrowDropUpIcon className='icon-drop'/>
                                    ) : (
                                        <ArrowDropDownIcon className='icon-drop'/>
                                    )}
                                </div>

                                {isPlinthAreaVisible && (
                                    <ul>
                                        {attributes.find(attr => attr.name === 'Plinth Area')?.options?.map((option, index) => (
                                            <li key={index} onClick={() => handleAttributeChange(option)}>
                                                {selectedAttribute === option ? (
                                                    <RadioButtonCheckedIcon className='icon-category'/>
                                                ) : (
                                                    <RadioButtonUncheckedIcon className='icon-category'  />
                                                )}
                                                {option}                                                                        
                                            </li>
                                        ))}
                                    </ul>    
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='products-search'>
                        <div className='products-search-bar'>
                            <SearchIcon  className='icon-search-products' onClick={() => handleSearch()}/>
                            <input 
                            type='text'
                            placeholder='Search for Products'
                            onChange={handleSearchChange}
                            value={searchTerm}
                            />
                        </div>

                        <div className='products'>
                            {filteredProducts && filteredProducts.map((product) => (
                                <div key={product.id} className='products-card'>
                                    <Link to={`/product/${product.slug}`}>
                                        <img src={product.images[0].src} alt={product.name} />
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
                                    <div className='products-card-title'>
                                        <h3>{product.name}</h3>
                                        <h4>From ${product.price}</h4>
                                    </div>
                                    <div className='products-card-detail'>
                                        <div className='products-card-details'>
                                            <Bedrooms className='icon-grid'/>
                                            <p>{product.attributes.find(attr => attr.name === 'Bedrooms')?.options[0]} Bedrooms</p>
                                        </div>
                                        <div className='products-card-details'>
                                            <Floors className='icon-grid-floors'/>
                                            <p>{product.attributes.find(attr => attr.name === 'Floors')?.options[0]} Floor(s)</p>
                                        </div>
                                        <div className='products-card-details'>
                                            <PlinthArea className='icon-grid'/>
                                            <p>{product.attributes.find(attr => attr.name === 'Plinth Area')?.options[0]}</p>
                                        </div>
                                        <div className='products-card-details'>
                                            <Bathrooms className='icon-grid'/>
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