import React from 'react'
import Link from 'next/link'
import styles from '../../assets/styles/shop/assurance.module.css'
import '@fontsource/poppins'

import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import DiscountIcon from '@mui/icons-material/Discount';
import PaymentsIcon from '@mui/icons-material/Payments';

const style = {
    fontFamily: 'Poppins'
}

const Assurance = () => {
    return (
        <div className={styles.assuranceContainer} style={style}>
            <h1>We Care for Our Clients...</h1>
            <div className={styles.assurance}>
                <div className={styles.assuranceBox}>
                    <SupportAgentIcon />
                    <p>Always ready to assist.<br/> Contact us through 
                    <a href='tel:+254 799 000 299'> +254 799 000 299</a>.</p>
                </div>
            
                <div className={styles.assuranceBox}>
                    <PaymentsIcon />
                    <p>Secure Payment.<br/> Shop with Confidence with Us</p>
                </div>
            
                <div className={styles.assuranceBox}>
                    <DiscountIcon />
                    <p>Discounts For You. <br/>Share your Dream House and Get Discounts.</p>
                
                </div>
            </div>
            <div className={styles.policyAssurance}>
                <Link href='/privacy-policy'>
                    <div className={styles.policies}>
                        <p>Privacy Policy</p>
                    </div>
                </Link>
                <Link href='/terms-conditions'> 
                    <div className={styles.policies}>
                        <p>Terms & Conditions</p>
                    </div>
                </Link>
                <Link href='/terms-of-service'>
                    <div className={styles.policies}>
                        <p>Terms of Service</p>
                    </div>
                </Link>
                <Link href='/refund-policy'>
                    <div className={styles.policies}>
                        <p>Refund Policy</p>
                    </div>
                </Link>
                <Link href='/faqs'>
                    <div className={styles.policies}>
                        <p>FAQs?</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Assurance;