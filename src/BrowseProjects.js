import React from 'react';
// import { Link } from 'react-router-dom';
import './BrowseProjects.css';
import Projectimg from './images/projects-img.svg'
import sideBracket from './images/sideBracket.png'
import rightArrow from './images/right-arrow.svg'
import leftArrow from './images/left-arrow.svg'
import Carousel from './Carousel.js'


export default function BrowseProjects() {
    return (
        <div className='projects-container'>
            <div className='projects-intro'>Browse <br/>our Projects<br/>and Find Your Taste</div>
            <div className='projects-intro-message'>Here are some of our completed projects</div>
            <div className='carousel'><Carousel/></div>
            
            <img src = {Projectimg} alt = "Project-img" className='project-img'/>
            <div className="Bracket">
                <img className="sideBracket" alt="sideBracket" src={sideBracket} />
            </div>
            <div className='sidearrows'>
                <div className='sidearrows-left-to-right'>
                    <img src ={rightArrow} alt = 'right-arrow'className='sidearrows-right' />
    
                </div>
                <div className='sidearrow-left-to-left'>
                    <img src ={leftArrow} alt ='left-arrow' className='sidearrow-left' />
                    
                </div>
            </div>
            <div className='project-name-box'>
                <div className='idk-6' />
                <div className='project-name'>Maisonette</div>
            </div>
            
            
        </div>
    )
}