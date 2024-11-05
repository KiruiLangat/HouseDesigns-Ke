import React from 'react'
import { Helmet } from 'react-helmet'
import './OurExpertise.css'
import '@fontsource/poppins'
import InteriorDesign from './images/interior-design.jpg'
import ProjectMgmt from './images/projectMgmt.webp'
import Masterplanning from './images/masterplanning.png'
import architecture from './images/CM_1.jpg'

//import arrow from './images/arrow-button.svg'
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
                <meta property='og:image' content='https://housedesigns.co.ke/CM_1.jpg' />
                <meta property='og:image:width' content='1200' />
                <meta property='og:image:height' content='600' />
                <meta property='og:url' content='https://housedesigns.co.ke/our-expertise' />
                <meta name='twitter:card' content='summary' />
                <meta name='twitter:title' content='Our Expertise' />
                <meta name='twitter:description' content='Explore our Services' />
                <meta name='twitter:image' content='https://housedesigns.co.ke/CM_1.jpg' />
                <meta name='twitter:image:width' content='1024' />
                <meta name='twitter:image:height' content='512' />
                <meta name='twitter:url' content='https://housedesigns.co.ke/our-expertise' />
            </Helmet> 
            
            <h1 className='title-services'>Explore our services</h1>
            <div className='services'>
               <div className='service1'>
                    <Link to="/architecture"> 
                        <div className='service1-img'>
                            <img src= {architecture} alt='architecture'  />
                        </div>
                        <h2>Architecture</h2>
                        <div className='arrow-services'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="Arrow 7" d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0L0 9Z" 
                                fill="#ED7D31"/>
                            </svg>
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
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="Arrow 7" d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0L0 9Z" 
                                fill="#ED7D31"/>
                            </svg>
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
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Arrow 7" d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0L0 9Z" 
                            fill="#ED7D31"/>
                        </svg>
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
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Arrow 7" d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0L0 9Z" 
                            fill="#ED7D31"/>
                        </svg>
                        </div>
                    </Link>
                </div>
            </div> 
        </div>

    )
}