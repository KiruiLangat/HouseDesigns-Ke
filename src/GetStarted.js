import React from 'react';
import './GetStarted.css';
import '@fontsource/poppins'
import InteriorDesign from './images/interior-design.png'
import pmgt from './images/pmgt.png'
import Masterplanning from './images/masterplanning.png'
import Architecture from './images/Architecture.png'
import sideBracket from './images/sideBracket.png'
import { Link } from 'react-router-dom';


export default function GetStarted() {
  return (
  <div className = "getStarted">
    <div className="intro">Our Expertise</div>
    <div className='intro-message'>View our services and let's get you started</div>
    <div className='separate-blocks'>
        
        <div className='PM-box' />
        <div className='MP-box' />
        <div className='boxArrangement'>
            <div className='ID-box'/>
            <img src={InteriorDesign} alt='Interior-Design-Icon' className='InteriorDesignIcon'/>
            <img src={pmgt} alt='Project-Management-Icon' className='pmgt-icon'/>
            <img src={Masterplanning} alt='MasterplanningIcon' className='masterplanning-icon'/>
            <div className='InteriorDesignIconText'>Interior Design</div>
            <div className='pmgt-icon-text'>Project Management</div>
            <div className='masterplanning-icon-text'>Masterplanning</div>
            <div className='pmgt-message'>Ensuring seamless execution from concept to completion<br/><br/></div>
            <div className='masterplanning-message'>Shaping the community with a forward-thinking approach<br/><br/></div>
            <div className='InteriorDesign-message'>Creating environments that resonate with individual tastes<br/><br/><br/><br/></div>
            
            <div className='Arch-box'/>
            <img src={Architecture} alt='Architecture-Icon' className='arch-icon' />
            <div className='arch-icon-text'>Architecture </div>
            <div className='arch-message'>Elevating spaces with innovative architectural designs<br/><br/></div>
            <div className='line1'></div>
            
            <div className='line2'></div>
            <div className='line3'></div>
            <div className='line4'></div>
        </div>
    </div>
    <Link to = '/our-expertise'>
        <div className='CTA'>
            <div className='CTA-getstarted'>Get Started</div>
            <div className='CTA-arrow'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Arrow 7" d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0L0 9Z" fill="#ED7D31"/></svg></div>
            <div className='CTA-line'></div>
        </div>
    </Link>
    <div className="box">
        <img className="sideBracket" alt="sideBracket" src={sideBracket} />
    </div>
    <div className="mobile">
        <div className='icon-container'>
            <img src = {Architecture} alt="Architecture-Icon" className="mobile-icon"/>
            <h2>Architecture</h2>
        </div>
        <div className='icon-container'>
            <img src = {InteriorDesign} alt="Interior-Design-Icon" className="mobile-icon"/>
            <h2>Interior Design</h2>
        </div>
        <div className='icon-container'>
            <img src = {pmgt} alt="Project-Management-Icon" className="mobile-icon"/>
            <h2>Project Management</h2>
        </div>
        <div className='icon-container'>
            <img src = {Masterplanning} alt="MasterplanningIcon" className="mobile-icon"/>                
            <h2>Masterplanning</h2>
        </div>          
    </div>
</div>
  );
} 