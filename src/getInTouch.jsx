import React from 'react';
import { Link } from 'react-router-dom';
import './GetInTouch.css';
import GetInTouchCarousel from './getintouchCarousel'
import PhoneIcon from './images/mobileSVG.svg';
import WhatsApp  from './images/whataspp-black-svg.svg';
import EmailIcon from './images/emailSVG.svg';
import sideBracket from './images/sideBracket.png';

const style ={
    fontfamily : 'Poppins',
}

export default function GetInTouch() {
    return (
        <div className='getintouch-container' style={style}>       
            
            <GetInTouchCarousel />

            <div className='getintouch-details'>

                <div className='thedetails'>

                    <h1>Get your Dream House Today!</h1>

                    <div className='getintouch-linesandicons'>
                        <div className='topline'></div>

                        <div className='getintouch-contacticons'>
                            <div className='getintouch-whatsapp-icon'>
                                <img src={WhatsApp} alt='WhatsApp-Icon' />
                            </div>
                            <div className='getintouch-phone-icon'>
                                <img src={PhoneIcon} alt='Phone-Icon' />
                            </div>
                            <div className='getintouch-email-icon'>
                                <img src={EmailIcon} alt='email-icon' />
                            </div>
                        </div>
                            
                        <div className='bottomline'></div>
                    </div>
                    <Link to={'/contact-us'}>
                        <div className='getintouchCTA'>
                            <p>Get in touch</p>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path id="Arrow 7" d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0L0 9Z" fill="#ED7D31"/></svg> 
                        </div>
                    </Link>
                </div>

                <div className='getintouch-sidebracket'>
                    <img src={sideBracket} alt='sideBracket'/>
                </div>

            </div>





        </div>        
    
    )   
    
}

/* <div className='contactIcons'>
                    <div className='phone-icon'><img src={PhoneIcon} alt='Phone-Icon' /></div>
                    <Link to={'/contact-us'}><div className='WhatsAppicon'><img src={WhatsApp} alt='WhatsApp-Icon' /></div></Link>
                    <div className='Email-icon'><img src={EmailIcon} alt='email-icon' /></div>
                    <div className='topline'></div>
                    <div className='bottomline'></div>
                </div>

            </div>
            <div className='getintouch-CTA'>
                <Link to='/contact-us'>
                <p>Get in touch</p>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Arrow 7" d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0L0 9Z" fill="#ED7D31"/></svg>
                </Link>
            </div>
            <div className="getintouchBracket">
                <img className="sideBracket" alt="sideBracket" src={sideBracket} />
            </div>
            
        </div>

    ) */
