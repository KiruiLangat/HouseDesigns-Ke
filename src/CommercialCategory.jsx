import React from 'react'
import { Helmet } from 'react-helmet'
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
            <Helmet>
                <title>Commercial Projects</title>
                <meta name='description'content='Industrialization with Style and Finese' />
                <meta property='og:title' content='Commercial Projects'/>
                <meta property='og:description' content='Industrialization with Style and Finese' />
                <meta property='og:image' content='https://housedesigns.co.ke/modernmarket1.jpg' />
                <meta property='og:image:width' content='300' />
                <meta property='og:image:height' content='300' />
                <meta property='og:url' content='https://housedesigns.co.ke/architecture/commercial' />
                <meta name='twitter:card' content='summary' />
                <meta name='twitter:title' content='Commercial Projects' />
                <meta name='twitter:description' content='Industrialization with Style and Finese' />
                <meta name='twitter:image' content='https://housedesigns.co.ke/modernmarket1.jpg' />
                <meta name='twitter:image:width' content='144' />
                <meta name='twitter:image:height' content='144' />
                <meta name='twitter:url' content='https://housedesigns.co.ke/architecture/commercial' />
            </Helmet>
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
