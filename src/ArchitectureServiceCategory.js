import React from 'react'
import { Link } from 'react-router-dom'
import '@fontsource/poppins'
import Header from './Header'
import Footer from './Footer'
import CommercialImg from './images/commercial.jpg'
import ResidentialsImg from './images/residentials.jpg'
import InstitutionImg from './images/Institutions.png'

const style = {
    fontFamily: 'Poppins',
}

export default function ArchitectureServiceCategory(){

    return(
        <div className="projects" style={style}>
            <Header />
            <h1 className='projects-title'>Architecture Projects </h1>
                <div className='service-projects-container'>
                    <div className='project-box1'>
                        <Link to="/architecture/residentials">
                        <div className='project-img'>
                            <img src={ResidentialsImg} alt='Residential' />
                        </div>
                        <h2>Residentials</h2>
                        </Link>
                    </div>
                    <div className='project-box1'>
                        <Link to="/architecture/commercial">
                        <div className='project-img'>
                            <img src={CommercialImg} alt='Commercial' />
                        </div>
                        <h2>commercial</h2>
                        </Link>
                    </div>
                    <div className='project-box1'>
                        <Link to="/architecture/institutions">
                        <div className='project-img'>
                            <img src={InstitutionImg} alt='Institutions' />
                        </div>
                        <h2>Institutions</h2>
                        </Link>
                    </div>
                </div>
            <Footer />
        </div>
    )
}
