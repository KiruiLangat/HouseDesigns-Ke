import React from 'react'
import { Link } from 'react-router-dom'
import Cancel from './images/cancel.svg'    
import Shoppingbag from './images/shopBag.svg'
import Arrow from './images/Arrow.svg'
import Check from './images/tick.svg'


import './Submission.css'
import '@fontsource/poppins'

const style = {
    fontFamily: 'Poppins'
}

export default function Submission() {
  return (
    <div style={style} className='submission-prompt'>
        <img src={Cancel} alt='cancel-icon' className='cancel-icon' />
        <div className='message'>
            <img src={Check} alt='check-icon' />
            <h1>Thank you for reaching out!</h1>
            <p>Our team will get in touch with you as soon as possible.</p>
        </div>
        <div className='shop-prompt'>
            <h2>In the meantime</h2>
            <img src={Shoppingbag} alt='shoppingbag-icon' className='shoppingbag-icon'/>
            <Link to ='/shop'><h2>See what's new in our Shop</h2>
            <img src={Arrow} alt='arrow-icon' className='arrow-icon'/></Link>
        </div>

    </div>
  )
}
