import React from 'react';
import './BrowseProjects.css';
import sideBracket from './images/sideBracket.png'
import BrowseCarousel from './BrowseCarousel'


export default function BrowseProjects() {
    return (
        <div className='projects-container'>
            
            <div className="sidebracket">
                <img src={sideBracket} alt="sideBracket"  />
            </div>
            
            <div className='projects-intro'>
                <h1>Browse <br/>our Projects<br/>and Find Your <br/> Taste</h1>
                <p>Here are some of our completed <br/> projects</p>
            </div>

            <div className='projects-intro-message-mobile'>
                <h1>Browse Our Projects</h1>
            </div>

            <BrowseCarousel/>
        
            
            
            
        </div>
    )
}