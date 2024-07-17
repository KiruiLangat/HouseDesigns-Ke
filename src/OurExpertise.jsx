import React from 'react'
import { Helmet } from 'react-helmet'
import './OurExpertise.css'
import '@fontsource/poppins'
import Header from './Header'
import Footer from './Footer'
import InteriorDesign from './images/interior-design.jpg'
import ProjectMgmt from './images/projectMgmt.webp'
import Masterplanning from './images/masterplanning.png'
import architecture from './images/CM_1.jpg'

import arrow from './images/arrow-button.svg'
import { Link } from 'react-router-dom'

const style = {
    fontFamily: 'Poppins',
}

export default function OurExpertise(){
    return(
        <div className="our-expertise" style={style}>
           <Helmet>
                <title>Our Expertise</title>
                <meta name='description'content='Explore our Services' />
                <meta property='og:title' content='Our Expertise'/>
                <meta property='og:description' content='Explore our Services' />
                <meta property='og:image' content='%PUBLIC_URL%/CM_1.jpg' />
                <meta property='og:url' content='https://housedesigns.co.ke/our-expertise' />
                <meta name='twitter:card' content='summary' />
            </Helmet> 
            <Header />
            <h1 className='title-services'>Explore our services</h1>
            <div className='services'>
               <div className='service1'>
                    <Link to="/architecture"> 
                        <div className='service1-img'>
                            <img src= {architecture} alt='architecture'  />
                        </div>
                        <h2>Architecture</h2>
                        <div className='arrow-services'>
                            <img src={arrow} alt='arrow'  />
                        </div>
                    </Link>
                </div>
                <div className='service1'>
                    <Link to="">
                        <div className='service1-img'>
                            <img src= {InteriorDesign} alt='interior design'  />
                        </div>
                        <h2>Interior Design</h2>
                        <div className='arrow-services'>
                            <img src={arrow} alt='arrow'  />
                        </div>
                    </Link>
                </div>
                <div className='service1'>
                    <Link to='/contact-us'>
                        <div className='service1-img'>
                            <img src= {ProjectMgmt} alt='project-management'  />
                        </div>
                        <h2>Project Management</h2>
                        <div className='arrow-services'>
                            <img src={arrow} alt='arrow'  />
                        </div>
                    </Link>
                </div>
                <div className='service1'>
                    <Link to='/masterplanning'>
                        <div className='service1-img'>
                            <img src= {Masterplanning} alt='masterplanning'  />
                        </div>
                        <h2>Master Planning</h2>
                        <div className='arrow-services'>
                            <img src={arrow} alt='arrow'  />
                        </div>
                    </Link>
                </div>
            </div> 
        
        

            <Footer />

        </div>

    )
}