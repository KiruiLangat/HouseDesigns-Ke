import React from 'react'
import { Link } from 'react-router-dom'
import GoogleIcon from '@mui/icons-material/Google';
import CloseIcon from '@mui/icons-material/Close';

import './signupLoginPopUp.css'

const style = {
    fontFamily: 'Poppins'
}


export default function SignupLoginPopUp({handleClosePopUp}) {  
    return(
        <div className="checkout-popup" style={style}>
            <div className="checkout-popup-content">
                <div className='checkout-popup-heading'>
                  <h2>Login or Signup</h2>  
                  <CloseIcon  className='checkout-popup-close' onClick={handleClosePopUp}/>
                </div>
                <Link to='/' style={{textDecoration:'none', margin:'auto', width:'100%'}}>
                    <div className='signup-google' >
                        <GoogleIcon className='google-icon'/>
                        <p><span style={{color:'#DB4437'}}>Continue</span><span style={{color:'#F4B400'}}> with </span><span style={{color:'#0F9D58'}}>Google</span></p>
                    </div>
                </Link>
                <div className='or'>
                    
                    <p>or</p>
                    
                </div>
                <div className='checkout-popup-input'>
                    <input type="text" placeholder='example@email.com' />
                    <button>Continue with Email</button>
                </div>
                <div className='checkout-popup-login'>
                    <p>Skip and Continue as <span style={{color:'#ED7D31', fontWeight:'400', textDecoration:'underline', cursor:'pointer'}} onClick={handleClosePopUp}>Guest? </span></p>    
                </div>
                
            </div>
        </div>
    )
}