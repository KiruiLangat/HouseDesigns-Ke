import React from 'react'
import './ServiceSubCategory.css'
import '@fontsource/poppins'
import Header from './Header'
import Footer from './Footer'

const style = {
    fontFamily: 'Poppins',
}

export default function ServiceSubCategory(){
    return(
        <div className="service-sub-category" style={style}>
            <Header />
            <h1 className='service-sub-category-title'>Architecture</h1>
            <div className='service-sub-category-container'>
                <div className='service-sub-category-box'>
                    <div className='service-sub-category-img'>
                        <img src= {architecture} alt='architecture'  />
                    </div>
                    <h2>Architecture</h2>
                </div>
            </div>
            <Footer />
        </div>
    )
}