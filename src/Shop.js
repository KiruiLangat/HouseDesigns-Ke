import React from 'react'
import ShoppingBag from './images/shopBag.svg'
import Header from './Header'
import './Shop.css'

import '@fontsource/poppins'

const style = {
    fontFamily:'Poppins'
};

export default function Shop() {
  return (
    <div className='shop-container' style={style}>

        <div><Header /></div>

        <div className='prompt'>
            <img src={ShoppingBag} alt='shopping-bag' />
            <h1>Under Construction! Coming Soon...</h1>
        </div> 

    </div>
  )
}
