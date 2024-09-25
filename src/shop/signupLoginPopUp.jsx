import React from 'react'
import { Link } from 'react-router-dom'
import GoogleIcon from '@mui/icons-material/Google';
import CloseIcon from '@mui/icons-material/Close';

import './signupLoginPopUp.css'
import { Rotate90DegreesCcw } from '@mui/icons-material';

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
                <div className='signup-google'>
                    <GoogleIcon className='google-icon'/>
                    <p><span style={{color:'#DB4437'}}>Continue</span><span style={{color:'#F4B400'}}> with </span><span style={{color:'#0F9D58'}}>Google</span></p>
                </div>
                <div className='or'>
                    <hr style={{width:'1px', height:'50px', transform:'Rotate(90deg)'}}/>
                    <p>or</p>
                    <hr/>
                </div>
                <div className='checkout-popup-input'>
                    <input type="text" placeholder='example@email.com' />
                    <button>Continue with Email</button>
                </div>
                <div className='checkout-popup-login'>
                    <p>Already have an account? <Link to='/login'>Login</Link></p>
                </div>
                <p>Checkout as Guest?</p>
            </div>
        </div>
    )
}