import React from 'react'
import './OurExpertise.css'
import '@fontsource/poppins'
import Header from './Header'
import Footer from './Footer'
import landingImg from './images/OurExpertise.svg'
import architecture from './images/CM_1.jpg'
import arrow from './images/arrow-button.svg'
import { Link } from 'react-router-dom'

const style = {
    fontFamily: 'Poppins',
}

export default function OurExpertise(){
    return(
        <div className="our-expertise" style={style}>
            <Header />
            <img src={landingImg} alt="landing" className="landing-img" />
            <h1 className='title-services'>Explore our services</h1>
            <div className='services'>
               <div className='service1'>
                <Link to='/architecture/projects'>
                    <img src= {architecture} alt='architecture' className='service1-img' />
                    <h2>Architecture</h2>
                    <div className='arrow-services'>
                        <img src={arrow} alt='arrow'  />
                    </div>
                </Link>
                </div>
                <div className='service1'>
                    <img src= {architecture} alt='architecture' className='service1-img' />
                    <h2>Interior Design</h2>
                    <div className='arrow-services'>
                        <img src={arrow} alt='arrow'  />
                    </div>
                </div>
                <div className='service1'>
                    <img src= {architecture} alt='architecture' className='service1-img' />
                    <h2>Project Management</h2>
                    <div className='arrow-services'>
                        <img src={arrow} alt='arrow'  />
                    </div>
                </div>
                <div className='service1'>
                    <img src= {architecture} alt='architecture' className='service1-img' />
                    <h2>Master Planning</h2>
                    <div className='arrow-services'>
                        <img src={arrow} alt='arrow'  />
                    </div>
                </div>
            </div>
        
        

            <Footer />

        </div>

    )
}