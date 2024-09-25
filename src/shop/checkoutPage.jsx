import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './checkoutPage.css'
import { useCart } from './cartContext'
import { checkoutOrder } from './woocommerce'

import SignupLoginPopUp from './signupLoginPopUp'


import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

import mPesa from '../images/mpesa.svg'
import payPal from '../images/paypal.svg'
import Card from '../images/card.svg'

const style = {
    fontFamily: 'Poppins'
}


export default function CheckOutPage(){
    const { cart, handleRemoveFromCart } = useCart()
    const [isMpesa, setIsMpesa] = useState(false)
    const [isCard, setIsCard] = useState(false)
    const [isPaypal, setIsPaypal] = useState(false)


    //Signup popup
    const [showSignupPopUp, setShowSignupPopUp] = useState(false)

    const handleClosePopUp = () => {
        setShowSignupPopUp(false)
    }
    
    useEffect(() => {
        checkoutOrder()
    }, [])

    const handleCheckout = async () => {
        try {
            const response = await checkoutOrder()
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }
    

    // Calculate total price of all items in cart
    const totalPrice = cart.reduce((total, product) => {
        const price = parseFloat(product.selectedPrice) || 0;
        return total + price
    }, 0)

    const handleMpesaDropDown = () => {
        setIsMpesa(!isMpesa)
        setIsCard(false)
        setIsPaypal(false)
    }

    const handleCardDropDown = () => {
        setIsCard(!isCard)
        setIsMpesa(false)
        setIsPaypal(false)
    }

    const handlePaypalDropDown = () => {
        setIsPaypal(!isPaypal)
        setIsMpesa(false)
        setIsCard(false)
    }

    return (
        <div className='checkout-container' style={style}>
            <h1>Complete Your Order!</h1>
            {cart.length === 0 ? (
                <div className='empty-cart'>
                    <p>Add Items to Cart</p>
                    <Link to = "/cart">
                        Go to Cart
                    </Link> 
                </div>
            ) : (
                <div className='checkout-order'>
                    <div className='order-container'>
                        {cart.map((product) => (
                            <div className='checkout-product' key={product.id}>
                                <Link to={`/product/${product.slug}`}>
                                    {product.images && product.images.length > 0 && (
                                        <img src={product.images[0].src} alt={product.name} loading='lazy' />
                                    )}
                                </Link>
                                <div className='checkout-product-details'>
                                    <h2>{product.name}</h2>
                                    <p>{product.selectedOptionDescription}</p>
                                    <div className='only-for-mobile'>
                                    {product.selectedPrice !== null ? (
                                        <h3>${product.selectedPrice}</h3>
                                    ) : (
                                        <h3>No price selected</h3>
                                    )}
                                    <p style={{color:'red'}} onClick={() => handleRemoveFromCart(product)}>Remove</p>
                                    </div>
                                </div>
                            </div>
                        ))}  
                        <div className='total-price'>
                            <h2>Order Total:</h2>
                            <p>${totalPrice.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className='checkout-details'>
                       <h2>Personal Information<span style={{color: 'red'}}>*</span></h2>
                       <div className='personal-info'>
                            <input type='text' placeholder='First Name' />
                            <input type='text' placeholder='Last Name' />
                            <input type='email' placeholder='Email' />
                            <input type='tel' placeholder='Phone Number' />
                        </div>
                        <div className='payment-type'>
                            <h2>Payment Methods<span style={{color: 'red'}}>*</span></h2>
                                <div className='mpesa-payment' onClick={handleMpesaDropDown}>
                                    <div className='mpesa-button'>
                                        {isMpesa ? 
                                        <RadioButtonCheckedIcon className='radio-checked' /> 
                                        : 
                                        <RadioButtonUncheckedIcon  className='radio-unchecked'/>}
                                        <p>Mpesa</p>                                           
                                    </div>
                                                               
                                    {isMpesa && (
                                        <div className='mpesa-details'>
                                            <img src={mPesa} alt='Mpesa' /> 
                                            <p>Enter your phone number to receive SSD prompt<br/>
                                                Enter your pin<br/>
                                            Complete Payment</p>
                                            <div className='mpesa-input'>
                                                <input type='text' placeholder='Phone Number' onClick={(e) => e.stopPropagation()} />
                                                <button onClick={(e) => e.stopPropagation()}>Send Prompt</button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className='paypal-payment' onClick={handlePaypalDropDown}>
                                    <div className='paypal-button'>
                                        {isPaypal ? 
                                        <RadioButtonCheckedIcon className='radio-checked' /> 
                                        : 
                                        <RadioButtonUncheckedIcon  className='radio-unchecked'/>}          
                                        <p>Paypal</p>
                                        <img src={payPal} alt='paypal' />
                                    </div>
                                    {isPaypal && (
                                        <div className='paypal-details'>
                                            <p>Checkout with PayPal</p>
                                            <button onClick={(e) => e.stopPropagation()}><span style={{color:'#00457C'}}>Pay</span><span style={{color:'#0079C1'}}>Pal</span> </button>
                                        </div>
                                    )}
                                </div>
                                <div className='card-payment' onClick={handleCardDropDown}>
                                    <div className='card-button'>
                                        {isCard ? 
                                        <RadioButtonCheckedIcon className='radio-checked' /> 
                                        : 
                                        <RadioButtonUncheckedIcon  className='radio-unchecked'/>}
                                        <p>Card</p>
                                        <img src={Card} alt='card' />
                                    </div>
                                    {isCard && (
                                        <div className='card-details'>
                                            <input type='text' placeholder='Name on Card' onClick={(e) => e.stopPropagation()} />
                                            <input type='text' placeholder='Card Number' onClick={(e) => e.stopPropagation()} />
                                            <input type='text' placeholder='Expiry Date' onClick={(e) => e.stopPropagation()} />
                                            <input type='text' placeholder='CVV*' onClick={(e) => e.stopPropagation()} />
                                        </div>
                                    )}
                                </div>
                        </div>
                        <div className='order-button'>
                        
                            <button onClick={() => {
                                handleCheckout()
                                setShowSignupPopUp(true)
                            }}>
                                Checkout <span>${totalPrice.toFixed(2)}</span>
                            </button>
                            <p style={{fontSize:'14px', fontWeight:'300', marginTop:'20px', marginBottom:'0'}}>
                                Not yet done? <span>
                                <Link to='/house-plans' style={{color:'#ED7D31', textDecoration:'none'}}>
                                     Browse All Products
                                </Link>
                                </span>
                            </p>
                        </div>
                       


                    </div>
                </div>
            )} 
            
            {showSignupPopUp && (
                            <SignupLoginPopUp
                                handleClosePopUp={handleClosePopUp}
                                
                            />
                        )}
        </div>
    )
}