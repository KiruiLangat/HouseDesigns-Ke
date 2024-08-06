import React from 'react'
import { Link } from 'react-router-dom'
import './assurance.css'
import '@fontsource/poppins'

import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import DiscountIcon from '@mui/icons-material/Discount';
import PaymentsIcon from '@mui/icons-material/Payments';



const style = {
    fontFamily: 'Poppins'
}


export default function Assurance() {
    return (
        <div className='assurance-container' style={style}>
            <h1>We Care for Our Clients...</h1>
            <div className='assurance'>
                <div className='assurance-box'>
                    <SupportAgentIcon />
                    <p>Always ready to assist.<br/> Contact us through 
                    <a href='tel:+254 799 000 299'> +254 799 000 299</a>.</p>
                </div>
            
                <div className='assurance-box'>
                    <PaymentsIcon />
                    <p>Secure Payment.<br/> Shop with Confidence with Us</p>
                </div>
            
                <div className='assurance-box'>
                    <DiscountIcon />
                    <p>Discounts For You. <br/>Share your Dream House and Get Discounts.</p>
                
                </div>
            </div>
            <div className='policy-assurance'>
                <Link to='/privacy-policy'>
                    <div className='policies'>
                        <p>Privacy Policy</p>
                    </div>
                </Link>
                <Link to='/terms-conditions'> 
                    <div className='policies'>
                        <p>Terms & Conditions</p>
                    </div>
                </Link>
                <Link to='/terms-of-service'>
                    <div className='policies'>
                        <p>Terms of Service</p>
                    </div>
                </Link>
                <Link to='/refund-policy'>
                    <div className='policies'>
                        <p>Refund Policy</p>
                    </div>
                </Link>
                <Link to='/faqs'>
                    <div className='policies'>
                        <p>FAQs?</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}