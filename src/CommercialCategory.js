import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '@fontsource/poppins'
import './CommercialCategory.css'
import ModernMarket from './images/modernmarket.jpg'
import ModernMarket1 from './images/modernmarket1.jpg'
import ModernMarket2 from './images/modernmarket2.jpg'
import ModernMarket3 from './images/modernmarket3.jpg'
import ModernMarket4 from './images/modernmarket4.jpg'
import ModernMarket5 from './images/modernmarket5.jpg'
import ModernMarket6 from './images/modernmarket6.jpg'


const style = {
    fontFamily: 'Poppins'
}


export default function CommercialCategory(){
    return(
        <div className='project-description' style={style}>
            <Header />
            <div className='large-img'>
                <img src={ModernMarket5} alt = 'Modern Market' />
            </div>
            <div className='Masonry'>
                <img src ={ModernMarket1} alt='Modern Market' />
                <img src ={ModernMarket2} alt='Modern Market' />
                <img src ={ModernMarket3} alt='Modern Market' />
                <img src ={ModernMarket4} alt='Modern Market' />
                <img src ={ModernMarket} alt='Modern Market' />
                <img src ={ModernMarket6} alt='Modern Market' />
            </div>
            <h1>Modern Market</h1>
            <div className='project-info'>                
                <div className='details'>
                    <h2>Project Details</h2>
                    <p>State of the art market area.</p>
                </div>
            </div>
        <Footer />

        </div>
    )
}
