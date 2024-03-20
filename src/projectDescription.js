import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Largeimg from './carousel2.jpg'
import ProjectDesc1 from './images/projectDescription1.svg'
import ProjectDesc2 from './images/projectDescription2.svg'

import './projectDescription.css'
import '@fontsource/poppins'

const style ={
    fontFamily:'Poppins'
}


export default function projectDescription() {
    return (
        <div className='project-description' style={style}>
            <Header />
            <div className='large-img'>
                <img src={Largeimg} alt='large-img' />
            </div>
            <div className='masonry'>
                <img src={ProjectDesc2} alt='project-img' className='project-img2'/>
                <img src={ProjectDesc1} alt='project-img' className='project-img1'/>
                <img src={ProjectDesc2} alt='project-img' className='project-img2'/>
                <img src={ProjectDesc1} alt='project-img' className='project-img1'/>
            </div>
            <h1>Project Title</h1>
            <div className='project-info'>
                
                <div className='descriptions'>
                    <div className='description1'>
                        <h2>Location</h2>
                        <p>Syokimau</p>
                    </div>
                    <div className='description2'>
                        <h2>Project Area</h2>
                        <p>1054 sqft</p>
                    </div>
                    <div className='description3'>
                        <h2>Status</h2>
                        <p>Completed</p>
                    </div>
                </div>
                <div className='details'>
                    <h2>Project Details</h2>
                    <p>◦ 4 Bedrooms | 3 Full Baths</p>
                    <p>◦ 6 Car Garage</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
