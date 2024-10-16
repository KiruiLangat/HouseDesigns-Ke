import React from 'react'
import './GetStarted.css'
import '@fontsource/poppins'
import InteriorDesign from './images/interior-design.png'
import PMgt from './images/pmgt.png'
import Masterplanning from './images/masterplanningIcon.png'
import Architecture from './images/Architecture.png'
import sideBracket from './images/sideBracket.png'
import { Link } from 'react-router-dom';

const style = {
    fontFamily: 'Poppins',
    }

export default function GetStarted() {
  return (
    <div className = "getStarted" style={style}>

        <div className='getStarted-box1'>
            <div className='sidebracket'>
                <img src={sideBracket} alt='sideBracket'/>
            </div>
            <div className='getStarted-intro'>
                <h1> Our Expertise </h1>
                <h2>View our services and let's get you started</h2>
                <Link to = '/our-expertise'>
                    <div className='getStarted-CTA'>
                        <p>Get Started </p>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Arrow 7" d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0L0 9Z" fill="#ED7D31"/></svg>
                    </div>
                </Link>
            </div> 
        </div>

        <div className='getStarted-box2'>
            <div className='Arch-box'>
                <img src={Architecture} alt='Architecture-Icon' className='arch-icon' />
                <h2>Architecture</h2>
                <div className='line1'/>
                <p> Elevating spaces with innovative architectural designs </p>
            </div>
            <div className='Interior-box'>
                <img src={InteriorDesign} alt='Interior-Design-Icon' className='Interior-icon'/>
                <h2>Interior Design</h2>
                <div className='line2'/>
                <p>Creating environments that resonate with individual tastes</p>
            </div>
            <div className='PMgt-box'>
                <img src={PMgt} alt='Project-Management-Icon' className='PMgt-icon'/>
                <h2>Project Management</h2>
                <div className='line3'/>
                <p>Ensuring seamless execution from concept to completion</p>
            </div>
            <div className='Masterplan-box'>
                <img src={Masterplanning} alt='MasterplanningIcon' className='Masterplan-icon'/>
                <h2>Masterplanning</h2>
                <div className='line4'/>
                <p>Shaping the community with a forward-thinking approach</p>
            </div>
        </div>

        <div className="mobile-services">
            <h1>Our Expertise</h1>
            <div className='services-container'>
                <div className='icon-container'>
                    <img src = {Architecture} alt="Architecture-Icon" className="mobile-icon"/>
                    <h2>Architecture</h2>
                </div>
                <div className='icon-container'>
                    <img src = {InteriorDesign} alt="Interior-Design-Icon" className="mobile-icon"/>
                    <h2>Interior Design</h2>
                </div>
                <div className='icon-container'>
                    <img src = {PMgt} alt="Project-Management-Icon" className="mobile-icon"/>
                    <h2>Project Management</h2>
                </div>
                <div className='icon-container'>
                    <img src = {Masterplanning} alt="MasterplanningIcon" className="mobile-icon"/>                
                    <h2>Masterplanning</h2>
                </div>
            </div>
            
            <Link to = '/our-expertise'>
                <div className='mobileCTA'>
                    <p>Get Started</p>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Arrow 7" d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0L0 9Z" fill="#ED7D31"/></svg>
                </div>
            </Link> 
        </div>
    </div>
  );
} 

