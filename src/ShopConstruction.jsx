import React from 'react'
import ShoppingBag from './images/shopBag.svg'
import './ShopConstruction.css'

import '@fontsource/poppins'

const style = {
    fontFamily:'Poppins'
};

export default function Shop() {
  return (
    <div className='shop-container' style={style}>


        <div className='prompt'>
            <img src={ShoppingBag} alt='shopping-bag' />
            <h1>Under Construction! Coming Soon...</h1>
        </div> 

    </div>
  )
}
