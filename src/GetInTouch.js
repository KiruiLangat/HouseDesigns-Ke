import React from 'react';
import { Link } from 'react-router-dom';
import './GetInTouch.css';
import GetInTouchImg from './images/getintouch.png';
import Arrow from './images/Arrow 7.svg';
import PhoneIcon from './images/phoneicon.svg';
import WhatsApp  from './images/WhatsAppIcon.png';
import EmailIcon from './images/emailicon.png';
import sideBracket from './images/sideBracket.png';


export default function GetInTouch() {
    return (
    <div className='getintouch-container'>
        <div className ='getintouch-text'>Let’s create something extraordinary together</div>
        <img src={GetInTouchImg} alt='Get-in-touch-img' className='getintouch-img' />
        <Link to = '/contact-us'>
            <div className='getintouch-CTA' >
                <div className='getintouch-CTA-text'>Get in touch</div>
                <div className='getintouch-CTA-underline'></div>
                <div className='arrow'><img src = {Arrow} alt='arrow'/></div>
            </div>
        </Link>
        <div className="getintouchBracket">
            <img className="sideBracket" alt="sideBracket" src={sideBracket} />
        </div>
        <div className='contactIcons'>
            <div className='phone-icon' ><img src={PhoneIcon} alt='Phone-Icon'/></div>
            <div className='WhatsAppicon' ><img  src={WhatsApp} alt='WhatsApp-Icon' /></div>
            <div className='Email-icon'><img src={EmailIcon} alt='email-icon' /></div>
            <div className='topline'></div>
            <div className='bottomline'></div> 
        </div>
    </div>
    )
    

    
}
