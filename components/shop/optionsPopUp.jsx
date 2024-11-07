import React, { useEffect, useState } from 'react'
import { useCart } from '../../services/shop/cartContext'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import CloseIcon from '@mui/icons-material/Close'
import { fetchAttributesTerms, fetchProductVariations } from '../../services/shop/woocommerce'
import Image from 'next/image'
import styles from '../../assets/styles/shop/optionsPopUp.module.css'

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
        return <div className={styles.loading}>Loading<span>...</span></div>;
    }

    if (!terms || terms.length === 0) {
        return (
            <div className={styles.loadingTerms}>
            Loading<span>...</span>
            </div>
        );
    }
    
    return(
        <div className={styles.optionsPopupContainer} style={style}>
            <CloseIcon className={styles.closeIcon} onClick={handleClosePopUp} />
            <div className={styles.optionsPopupTitle}>
                <ShoppingCartIcon className={styles.popupCart} />
                <h1>Add To Cart</h1>
            </div>
            <div className={styles.optionsPopupProduct}>
                {product.images && product.images.length > 0 && (
                    <Image src={product.images[0].src} alt={product.name} loading='lazy' width={500} height={500} />
                )}
                <div className={styles.optionsPopupDetails}>
                    <h2>{product.name}</h2>
                    <p>From ${product.price}</p>
                </div>
            </div>
            <div className={styles.optionsPopUp}>
                <h2>Service Options</h2>
                <ul>
                    {terms.map((option,index) => (
                        <li key={index} onClick={() => handleOptionClick(option)}>
                            {selectedOption && selectedOption.name === option.name ? (
                                <RadioButtonCheckedIcon className={styles.radioUnchecked}/>
                            ) : (
                                <RadioButtonUncheckedIcon className={styles.radioChecked} />
                            )}
                            {option.name}
                            <p>{option.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <button className={styles.addToCartPopup} style={style} onClick={() => {
                isInCart(product) ? handleRemoveFromCart(product) : handleAddToCart(product, selectedPrice, selectedOption)
                }}>
                <p>{selectedPrice ? `$${selectedPrice}`: 'Select An Option' }</p>
            </button>
        </div>
    )
}