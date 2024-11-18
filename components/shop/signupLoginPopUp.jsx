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
        <div className={styles.checkoutPopup} style={style}>
            <div className={styles.checkoutPopupContent}>
                <div className={styles.checkoutPopupHeading}>
                  <h2>Login or Signup</h2>  
                  <CloseIcon className={styles.checkoutPopupClose} onClick={handleClosePopUp}/>
                </div>
                <Link href='/' passHref>
                    <div className={styles.signupGoogle}>
                        <GoogleIcon className={styles.googleIcon}/>
                        <p><span style={{color:'#DB4437'}}>Continue</span><span style={{color:'#F4B400'}}> with </span><span style={{color:'#0F9D58'}}>Google</span></p>
                    </div>
                </Link>
                <div className={styles.or}>
                    <p>or</p>
                </div>
                <div className={styles.checkoutPopupInput}>
                    <input type="text" placeholder='example@email.com' />
                    <button>Continue with Email</button>
                </div>
                <div className={styles.checkoutPopupLogin}>
                    <p>Skip and Continue as <span style={{color:'#ED7D31', fontWeight:'400', textDecoration:'underline', cursor:'pointer'}} onClick={handleClosePopUp}>Guest? </span></p>    
                </div>
            </div>
        </div>
    )
}