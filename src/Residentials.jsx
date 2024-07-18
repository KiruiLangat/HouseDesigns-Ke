import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import '@fontsource/poppins'
import Header from './Header'
import Footer from './Footer'
import BungalowsImg from './images/bungalows.jpg'
import MaisonetteImg from './images/maisonettes.jpg'
import ApartmentsImg from './images/apartments.jpg'
import TinyHomesImg from './images/tinyhomes.jpg'


const style = {
    fontFamily: 'Poppins',
}

export default function ServiceSubCategory(){
    return(
        <div className="projects" style={style}>
            <Helmet>
                <title>Residential Projects</title>
                <meta name='description'content='Explore Our Residential Projects' />
                <meta property='og:title' content='Residential Projects'/>
                <meta property='og:description' content='Explore Our Residential Projects' />
                <meta property='og:image' content='https://housedesigns.co.ke/apartment.jpg' />
                <meta property='og:image:width' content='300' />
                <meta property='og:image:height' content='300' />
                <meta property='og:url' content='https://housedesigns.co.ke/architecture/residentials' />
                <meta name='twitter:card' content='summary' />
                <meta name='twitter:title' content='Residential Projects' />
                <meta name='twitter:description' content='Explore Our Residential Projects' />
                <meta name='twitter:image' content='https://housedesigns.co.ke/apartment.jpg' />
                <meta name='twitter:image:width' content='144' />
                <meta name='twitter:image:height' content='144' />
                <meta name='twitter:url' content='https://housedesigns.co.ke/architecture/residentials' />
            </Helmet>
            <Header />
            <h1 className='projects-title'>Residential Projects</h1>
                <div className='service-projects-container'>
                    <div className='project-box1'>
                        <Link to={`/architecture/residentials/bungalows`}>
                        <div className='project-img'>
                            <img src={BungalowsImg} alt='Bungalows' />
                        </div>
                        <h2>Bungalows</h2>
                        </Link>
                    </div>
                    <div className='project-box1'>
                        <Link to={`/architecture/residentials/maisonettes`}>
                        <div className='project-img'>
                            <img src={MaisonetteImg} alt='Maisonette' />
                        </div>
                        <h2>Maisonettes</h2>
                        </Link>
                    </div>
                    <div className='project-box1'>
                        <Link to={`/architecture/residentials/apartments`}>
                        <div className='project-img'>
                            <img src={ApartmentsImg} alt='Apartments' />
                        </div>
                        <h2>Apartments</h2>
                        </Link>
                    </div>
                    <div className='project-box1'>
                        <Link to={`/architecture/residentials/tiny homes`}>
                        <div className='project-img'>
                            <img src={TinyHomesImg} alt='Tiny Homes' />
                        </div>
                        <h2>Tiny Homes</h2>
                        </Link>
                    </div>
                </div>
            <Footer />
        </div>
    )
}