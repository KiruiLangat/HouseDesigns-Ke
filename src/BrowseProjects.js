import React from 'react';
// import { Link } from 'react-router-dom';
import './BrowseProjects.css';
import sideBracket from './images/sideBracket.png'
// import rightArrow from './images/right-arrow.svg'
// import leftArrow from './images/left-arrow.svg'
import BrowseCarousel from './BrowseCarousel'


export default function BrowseProjects() {
    return (
        <div className='projects-container'>
            <div className='projects-intro'>Browse <br/>our Projects<br/>and Find Your Taste</div>
            <div className='projects-intro-message'>Here are some of our completed projects</div>
            <div className='projects-intro-message-mobile'>Browse Our Projects</div>
            <div className='browse-carousel'><BrowseCarousel/></div>
            
            {/* <img src = {Projectimg} alt = "Project-img" className='project-img'/> */}
            <div className="Bracket">
                <img className="sideBracket" alt="sideBracket" src={sideBracket} />
            </div>
            {/* <div className='sidearrows'>
                <div className='sidearrows-left-to-right'>
                    <img src ={rightArrow} alt = 'right-arrow'className='sidearrows-right' />
    
                </div>
                <div className='sidearrow-left-to-left'>
                    <img src ={leftArrow} alt ='left-arrow' className='sidearrow-left' />
                    
                </div>
            </div> */}
            
            
            
        </div>
    )
}