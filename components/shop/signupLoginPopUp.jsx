import React from 'react'
import Link from 'next/link'
import GoogleIcon from '@mui/icons-material/Google';
import CloseIcon from '@mui/icons-material/Close';

import styles from '../../assets/styles/shop/signupLoginPopUp.module.css'

const style = {
    fontFamily: 'Poppins'
}

export default function SignupLoginPopUp({handleClosePopUp}) {  
    return(
        <div className={styles['checkout-popup']} style={style}>
            <div className={styles['checkout-popup-content']}>
                <div className={styles['checkout-popup-heading']}>
                  <h2>Login or Signup</h2>  
                  <CloseIcon className={styles['checkout-popup-close']} onClick={handleClosePopUp}/>
                </div>
                <Link href='/' passHref>
                    <div className={styles['signup-google']}>
                        <GoogleIcon className={styles['google-icon']}/>
                        <p><span style={{color:'#DB4437'}}>Continue</span><span style={{color:'#F4B400'}}> with </span><span style={{color:'#0F9D58'}}>Google</span></p>
                    </div>
                </Link>
                <div className={styles['or']}>
                    <p>or</p>
                </div>
                <div className={styles['checkout-popup-input']}>
                    <input type="text" placeholder='example@email.com' />
                    <button>Continue with Email</button>
                </div>
                <div className={styles['checkout-popup-login']}>
                    <p>Skip and Continue as <span style={{color:'#ED7D31', fontWeight:'400', textDecoration:'underline', cursor:'pointer'}} onClick={handleClosePopUp}>Guest? </span></p>    
                </div>
            </div>
        </div>
    )
}