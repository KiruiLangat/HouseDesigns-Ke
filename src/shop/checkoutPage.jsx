import React from 'react'
import './checkoutPage.css'


const style = {
    fontFamily: 'Poppins'
}


export default function CheckOutPage(){
    return (
        <div className='checkout-container' style={style}>
            <h1>Complete Your Order!</h1>
            <div className='order-container'>
                <div className='checkout-product'>

                </div>
                <div className='checkout-details'>

                </div>
            </div>
        </div>
    )
}