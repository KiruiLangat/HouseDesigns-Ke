import React from 'react'
import { Link } from 'react-router-dom'
import './AboutUs.css'
import colorScheme from './images/colorScheme.svg'
import titleMarker from './images/Title-marker.svg'
import Workflow from './images/workflow.svg'
import ViewServices from './images/viewServices.svg'



export default function AboutUs() {
  return (
    <div id = "about-us" className='aboutus-container'>
        <div className='about-us'>Get to Know us!</div>
        <img src = {colorScheme} alt='colorScheme' className='color-scheme' />
        <div className='our-workflow'>OUR WORKFLOW</div>
        <img src = {titleMarker} alt='titleMarker' className='title-marker' />
        <div>
          <img src= {Workflow} alt='Workflow' className='workflow' />
        </div>
        <div className= 'view-services'>
          <Link to = './our-expertise'><img src= {ViewServices} alt='View-Our-Services' /></Link>
        </div>
        


          
        
        
    </div>
  )
}

