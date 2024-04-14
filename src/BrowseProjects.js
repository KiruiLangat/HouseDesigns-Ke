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
        
            <div className="Bracket">
                <img className="sideBracket" alt="sideBracket" src={sideBracket} />
            </div>
            
            
            
            
        </div>
    )
}