import React from 'react'
import { Link } from 'react-router-dom'
import './AboutUs.css'
import colorScheme from './images/colorScheme.svg'
import titleMarker from './images/Title-marker.svg'
import Workflow from './images/workflow.svg'
// import ViewServices from './images/ViewServices.svg'
import mobileWorkflow from './images/mobileWorkflow.svg'
import simplicityIcon from './images/simplicityicon.svg'
import infiniteCaps from './images/posibilitiesicon.svg'
import resilienceicon from './images/resilianceicon.svg'
import Kelvin from './images/Kelvin.jpg'
import Jonathan from './images/Jonathan2.png'


export default function AboutUs() {
  return (
    <div className='aboutus-container'>
      <div id = 'about-us'  className='about-us'>Get to Know us!</div>
      <img src = {colorScheme} alt='colorScheme' className='color-scheme' />
      <div>
        <div className='our-workflow'>OUR WORKFLOW</div>
        <h2 className='our-workflow-mobile'>OUR WORKFLOW</h2>
        <img src = {titleMarker} alt='titleMarker' className='title-marker' />
      </div>
      <div>
        <img src= {Workflow} alt='Workflow' className='workflow' />
      </div>
      <img src= {mobileWorkflow} alt='worflow'className='mobile-workflow' />
      <div className= 'view-services'>
        <Link to = './our-expertise'>
          <div>View our services</div>
          <svg className='CTA-arrow-mobile' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Arrow 7" d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0L0 9Z" fill="#ED7D31"/></svg>
        </Link>
      </div>
      <div className='philosophy'>
        <div className='our-philosophy'>OUR PHILOSOPHY</div>
        <h2 className='our-philosophy-mobile'>OUR PHILOSOPHY</h2>
        <img src = {titleMarker} alt='titleMarker' className='title-marker2' />
      </div>
      <div className='philosophy-tables'>
        <div className='simplicity-box' >
          <div className='simplicity'>Simplicity</div>
          <img src={simplicityIcon} alt='simplicity-icon' className='simplicity-icon'  />
          <div className='simplicity-desc'>Our aim is to design buildings with an effortlessly simple aesthetic, achieved through a systematic work plan and methodology that simplifies the construction process into clear phases, ensuring a comprehensible and transparent experience for our clients</div>
          
        </div>
        <div className='infinite-box'>
          <div className='infinite-title'>Infinite Capacities</div>
          <img src= {infiniteCaps} alt='infinite-icon' className='infinite-icon' />
          <div className='infinite-desc'>Unbound by the constraints of traditional and envisioning a perpetual loop of design possibilities, our commitment is to forge a practice that resonates with resilience and timelessness, delivering an elevated and captivating architectural experience</div>
        </div>
        <div className='resilience-box'>
          <div className='resilience'>Resilience and Flexibility</div>
          <img src ={resilienceicon} alt = 'resilience-icon' className='resilience-icon' />
          <div className='resilience-desc'>We specialize in crafting timeless aesthetics, seamlessly integrating contemporary and site-specific technologies and materials. Our flexible design scope spans from mass production in master planning to the intricate detailing of furniture</div>
          
        </div>
      </div>
      <div className='mobile-philosophy'>
        <div className='mobile-simplicity'>
          <img src={simplicityIcon} alt='simplicity-icon' className='mobile-simplicity-icon'  />
          <div className='mobile-simplicity-title'>Simplicity</div>
        </div>
        <div className='mobile-infinite'>
          <img src= {infiniteCaps} alt='infinite-icon' className='mobile-infinite-icon' />
          <div className='mobile-infinite-title'>Infinite Capacities</div>
        </div>
        <div className='mobile-resilience'>
          <img src ={resilienceicon} alt = 'resilience-icon' className='mobile-resilience-icon' />
          <div className='mobile-resilience-title'>Resilience & Flexibility</div>
        </div>    
      </div>
      <h2 className='our-team-mobile'>OUR LEAD TEAM</h2>
      <div className='ourTeam-box'>
        <div className='team-title-box'>
          <img src = {titleMarker} alt='titleMarker4' className='title-marker4'/>
          <div className='our-team'>OUR LEAD TEAM</div> 
          
        </div>
        <div className='team-members'>
          <div className='member1-box'>
            <div className='member-img'>
              <img src={Kelvin} alt='Kelvin'  />
            </div>
            <h2 className='member1-name'>Kelvin Maundu</h2>
            <h3 className='member1-title'>Senior Architect</h3>
          </div>
          <div className='member2-box'>
            <div className='member-img'>
              <img src={Jonathan} alt='Jonathan'  />
            </div>
            <h2 className='member2-name'>Jonathan Munyao</h2>
            <h3 className='member2-title'>Senior Architect</h3>
          </div>
        </div>
      </div>
      
    </div>
  )
}

