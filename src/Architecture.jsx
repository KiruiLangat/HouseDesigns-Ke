import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import '@fontsource/poppins'

import CommercialImg from './images/commercial.jpg'
import ResidentialsImg from './images/residentials.jpg'
import InstitutionImg from './images/Institutions.png'


const style = {
    fontFamily: 'Poppins',
}

export default function ArchitectureServiceCategory(){

    return(
        <div className="projects" style={style}>
            <Helmet>
                <title>Architecture Projects</title>
                <meta name='description'content='Explore Our Architecture Projects' />
                <meta property='og:title' content='Architecture Projects'/>
                <meta property='og:description' content='Explore Our Architecture Projects' />
                <meta property='og:image' content='https://housedesigns.co.ke/modernmarket.jpg' />
                <meta property='og:image:width' content='300' />
                <meta property='og:image:height' content='300' />
                <meta property='og:url' content='https://housedesigns.co.ke/architecture' />
                <meta name='twitter:card' content='summary' />
                <meta name='twitter:title' content='Architecture Projects' />
                <meta name='twitter:description' content='Explore Our Architecture Projects' />
                <meta name='twitter:image' content='https://housedesigns.co.ke/modernmarket.jpg' />
                <meta name='twitter:image:width' content='144' />
                <meta name='twitter:image:height' content='144' />
                <meta name='twitter:url' content='https://housedesigns.co.ke/architecture' />
            </Helmet>
        
            <h1 className='projects-title'>Architecture Projects </h1>
                <div className='service-projects-container'>
                    <div className='project-box1'>
                        <Link to="/residentials">
                        <div className='project-img'>
                            <img src={ResidentialsImg} alt='Residential' />
                        </div>
                        <h2>Residentials</h2>
                        </Link>
                    </div>
                    <div className='project-box1'>
                        <Link to="/commercial">
                        <div className='project-img'>
                            <img src={CommercialImg} alt='Commercial' />
                        </div>
                        <h2>commercial</h2>
                        </Link>
                    </div>
                    <div className='project-box1'>
                        <Link to="/institutions">
                        <div className='project-img'>
                            <img src={InstitutionImg} alt='Institutions' />
                        </div>
                        <h2>Institutions</h2>
                        </Link>
                    </div>
                </div>
           
        </div>
    )
}
