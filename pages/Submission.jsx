//Submission Confirmation page
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Cancel from '../assets/images/cancel.svg'    
import Shoppingbag from '../assets/images/shopBag.svg'
import Arrow from '../assets/images/Arrow.svg'
import Check from '../assets/images/tick.svg'

import styles from '../assets/styles/Submission.module.css'
import '@fontsource/poppins'

const style = {
    fontFamily: 'Poppins'
}

export default function Submission() {
  return (
    <div style={style} className={styles.submissionPrompt}>
        <Link href='/contact-us'>
          <a>
            <Image src={Cancel} alt='cancel-icon' className={styles.cancelIcon} />
          </a>
        </Link>
        <div className={styles.message}>
            <Image src={Check} alt='check-icon' />
            <h1>Form submitted successfully!</h1>
            <p>Our team will get in touch with you as soon as possible.</p>
        </div>
        <div className={styles.shopPrompt}>
            <h2>In the meantime</h2>
            <Image src={Shoppingbag} alt='shoppingbag-icon' className={styles.shoppingbagIcon}/>
            <Link href='/shop'>
              <a>
                <h2>Check out new plans in our Shop</h2>
                <Image src={Arrow} alt='arrow-icon' className={styles.arrowIcon}/>
              </a>
            </Link>
        </div>
    </div>
  )
}
