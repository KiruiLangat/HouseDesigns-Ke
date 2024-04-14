import React from 'react'
import './ServiceCategory.css'
import '@fontsource/poppins'
import Header from './Header'
import Footer from './Footer'


const style = {
    fontFamily: 'Poppins',
}

export default function ServiceCategory(){


    return(
        <div className="service-category" style={style}>
            <Header />
            <h1 className='service-category-title'>Our Services</h1>
            <div className='service-category-container'>
                <div className='service-category-box'>
                    <div className='service-category-img'>
                        <img src= {architecture} alt='architecture'  />
                    </div>
                    <h2>Architecture</h2>
                </div>
            </div>
            <Footer />
        </div>
    )
}
