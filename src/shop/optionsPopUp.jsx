import React, { useEffect, useState } from 'react'
import { useCart } from './cartContext'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import CloseIcon from '@mui/icons-material/Close'
import { fetchAttributesTerms, fetchProductVariations } from './woocommerce'


import './optionsPopUp.css'

const style = {
    fontFamily: 'Poppins'
}

export default function OptionsPopUp({ product, handleClosePopUp }) { 
    const [terms, setTerms] = useState([]); 
    const [variations, setVariations] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);

    const { cart, handleAddToCart, handleRemoveFromCart } = useCart();

    const isInCart = (product) => cart.some((item) => item && item.slug === product.slug);
    

    useEffect(() => {
        getServiceOptionTerms();
        if(product) {
            fetchProductVariations(product.id)
            .then(setVariations)
            .catch(console.error);
        }

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

    if (!terms || terms.length === 0) {
        return (
            <div className='loading-terms'>
            Loading<span>...</span>
            </div>
        );
    }
    
    return(
        <div className='options-popup-container' style={style}>
            <CloseIcon className='close-icon' onClick={handleClosePopUp} />
            <div className='options-popup-title'>
                <ShoppingCartIcon className='popup-cart' />
                <h1>Add To Cart</h1>
            </div>
            <div className='options-popup-product'>
                {product.images && product.images.length > 0 && (
                    <img src={product?.images[0]?.src} alt={product.name} loading='lazy' />
                )}
                <div className='options-popup-details'>
                    <h2>{product.name}</h2>
                    <p>From ${product.price}</p>
                </div>
            </div>
            <div className='options-pop-up'>
                <h2>Service Options</h2>
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
            </div>
                <button className='add-to-cart-popup' style={style} onClick={() => {
                    isInCart(product) ? handleRemoveFromCart(product) : handleAddToCart(product, selectedPrice, selectedOption)
                    }}>
                    <p>{selectedPrice ? `$${selectedPrice}`: 'Select An Option' }</p>
                </button>
            
        </div>
    )
}