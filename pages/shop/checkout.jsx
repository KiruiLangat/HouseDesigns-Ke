import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../assets/styles/shop/checkout.module.css'
import { useCart } from '../../services/shop/cartContext'
import { checkoutOrder, createNewUser, newOrder } from '../../services/shop/woocommerce'

import SignupLoginPopUp from '../../components/shop/signupLoginPopUp'

import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import CloseIcon from '@mui/icons-material/Close'

import mPesa from '../../assets/images/mpesa.svg'
import payPal from '../../assets/images/paypal.svg'
import Card from '../../assets/images/card.svg'

const style = {
    fontFamily: 'Poppins'
}

export default function CheckOutPage() {
    const { cart, handleRemoveFromCart } = useCart()
    const [isMpesa, setIsMpesa] = useState(false)
    const [isCard, setIsCard] = useState(false)
    const [isPaypal, setIsPaypal] = useState(false)

    //Signup popup
    const [showSignupPopUp, setShowSignupPopUp] = useState(false)
    const [hasClosedPopup, setHasClosedPopup] = useState(false)

    //continue checkout
    const [continueCheckout, setContinueCheckout] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        checkoutOrder()
        newOrder()
        createNewUser()
    }, [])

    const handleCheckout = async () => {
        try {
            await checkoutOrder()

            const userData = {
                firstName: 'John',
                lastName: 'Doe',
                email: 'user@example.com',
                phone: '0712345678',
            }
            await createNewUser(userData)

        } catch (error) {
            console.error(error)
        }
    }

    // Calculate total price of all items in cart
    const totalPrice = cart.reduce((total, product) => {
        const price = parseFloat(product.selectedPrice) || 0
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

    const handleClosePopUp = () => {
        setShowSignupPopUp(false)
        setContinueCheckout(true)
        setIsLoading(true)
        setHasClosedPopup(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }

    return (
        <div className={styles.checkoutContainer} style={{ fontFamily: 'Poppins' }}>
            <h1>Complete Your Order!</h1>
            {cart.length === 0 ? (
                <div className={styles.emptyCart}>
                    <p>Add Items to Cart</p>
                    <Link href="/shop/cart" legacyBehavior>
                        <a>Go to Cart</a>
                    </Link>
                </div>
            ) : (
                <div className={styles.checkoutOrder}>
                    <div className={styles.orderContainer}>
                        {cart.map((product) => (
                            <div className={styles.checkoutProduct} key={product.id}>
                                <Link href={`/shop/product/${product.slug}`} legacyBehavior>
                                    <a>
                                        {product.images && product.images.length > 0 && (
                                            <Image src={product.images[0].src} alt={product.name} loading='lazy' width={100} height={100} />
                                        )}
                                    </a>
                                </Link>
                                <div className={styles.checkoutProductDetails}>
                                    <h2>{product.name}</h2>
                                    <p>{product.selectedOptionDescription}</p>
                                    <div className={styles.onlyForMobile}>
                                        {product.selectedPrice !== null ? (
                                            <h3>${product.selectedPrice}</h3>
                                        ) : (
                                            <h3>No price selected</h3>
                                        )}
                                        <p style={{ color: 'red', cursor:'pointer' }} onClick={() => handleRemoveFromCart(product)}>Remove</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className={styles.totalPrice}>
                            <h2>Order Total:</h2>
                            <p>${totalPrice.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className={styles.checkoutDetails}>
                        <h2>Personal Information<span style={{ color: 'red' }}>*</span></h2>
                        <div className={styles.personalInfo}>
                            <input type='text' placeholder='First Name' />
                            <input type='text' placeholder='Last Name' />
                            <input type='email' placeholder='Email' />
                            <input type='tel' placeholder='Phone Number' />
                        </div>
                        <div className={styles.paymentType}>
                            <h2>Payment Methods<span style={{ color: 'red' }}>*</span></h2>
                            <div className={styles.mpesaPayment} onClick={handleMpesaDropDown}>
                                <div className={styles.mpesaButton}>
                                    {isMpesa ?
                                        <RadioButtonCheckedIcon className={styles.radioChecked} />
                                        :
                                        <RadioButtonUncheckedIcon className={styles.radioUnchecked} />}
                                    <p>Mpesa</p>
                                </div>
                                {isMpesa && (
                                    <div className={styles.mpesaDetails}>
                                        <Image src={mPesa} alt='Mpesa' />
                                        <p>Enter your phone number to receive SSD prompt<br />
                                            Enter your pin<br />
                                            Complete Payment</p>
                                        <div className={styles.mpesaInput}>
                                            <input type='text' placeholder='Phone Number' onClick={(e) => e.stopPropagation()} />
                                            <button onClick={(e) => e.stopPropagation()}>Send Prompt</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className={styles.paypalPayment} onClick={handlePaypalDropDown}>
                                <div className={styles.paypalButton}>
                                    {isPaypal ?
                                        <RadioButtonCheckedIcon className={styles.radioChecked} />
                                        :
                                        <RadioButtonUncheckedIcon className={styles.radioUnchecked} />}
                                    <p>Paypal</p>
                                    <Image src={payPal} alt='paypal' />
                                </div>
                                {isPaypal && (
                                    <div className={styles.paypalDetails}>
                                        <p>Checkout with PayPal</p>
                                        <button onClick={(e) => e.stopPropagation()}><span style={{ color: '#00457C' }}>Pay</span><span style={{ color: '#0079C1' }}>Pal</span> </button>
                                    </div>
                                )}
                            </div>
                            <div className={styles.cardPayment} onClick={handleCardDropDown}>
                                <div className={styles.cardButton}>
                                    {isCard ?
                                        <RadioButtonCheckedIcon className={styles.radioChecked} />
                                        :
                                        <RadioButtonUncheckedIcon className={styles.radioUnchecked} />}
                                    <p>Card</p>
                                    <Image src={Card} alt='card' />
                                </div>
                                {isCard && (
                                    <div className={styles.cardDetails}>
                                        <input type='text' placeholder='Name on Card' onClick={(e) => e.stopPropagation()} />
                                        <input type='text' placeholder='Card Number' onClick={(e) => e.stopPropagation()} />
                                        <input type='text' placeholder='Expiry Date' onClick={(e) => e.stopPropagation()} />
                                        <input type='text' placeholder='CVV*' onClick={(e) => e.stopPropagation()} />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={styles.orderButton}>
                            <button onClick={() => {
                                if (!hasClosedPopup) {
                                    setShowSignupPopUp(true)
                                } else {
                                    setContinueCheckout(true)
                                }
                            }} onClose={handleCheckout}>
                                Checkout <span>${totalPrice.toFixed(2)}</span>
                            </button>
                            <p style={{ fontSize: '14px', fontWeight: '300', marginTop: '20px', marginBottom: '0' }}>
                                Not yet done? <span>
                                    <Link href='/shop/house-plans' legacyBehavior>
                                        <a style={{ color: '#ED7D31', textDecoration: 'none' }}>
                                            Browse All Products
                                        </a>
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
            {continueCheckout && (
                <div className={styles.loadingScreen}>
                    {isLoading ? (
                        <div className={styles.loading}>Loading<span>...</span> Please wait while we process your payment.</div>
                    ) : (
                        <div className={styles.errorToWhatsapp}>
                            <CloseIcon onClick={handleClosePopUp} cursor={'pointer'} />
                            <h2>Error, Kindly Contact Us via WhatsApp:</h2>
                            <a href='https://wa.me/254710478088' target='_blank' rel='noreferrer'>
                                <button>WhatsApp</button>
                            </a>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}