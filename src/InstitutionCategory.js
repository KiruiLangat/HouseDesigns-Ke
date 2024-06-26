import React from 'react'
import { Link } from 'react-router-dom' 
import Header from './Header'
import Footer from './Footer'
import '@fontsource/poppins'
import './InstitutionCategory.css'
import InstitutionImg from './images/Institutions.png'
import Institution1 from './images/institution1.png'
import Institution2 from './images/institution2.png'
import Institution3 from './images/institution3.png'
import Institution4 from './images/institution4.png'



const style = {
    fontFamily: 'Poppins'
}


export default function InstitutionCategory(){
    return(
        <div className='project-description' style={style}>
            <Header />
            <div className='large-img'>
                <img src={InstitutionImg} alt = 'Institution' />
            </div>
            <div className='Masonry'>
                <img src ={Institution1} alt='Modern Market' />
                <img src ={Institution2} alt='Modern Market' />
                <img src ={Institution3} alt='Modern Market' />
                <img src ={Institution4} alt='Modern Market' />
            </div>
            <h1>Institution</h1>
            <div className='project-info'>                
                <div className='details'>
                    <h2>Project Details</h2>
                    <p>View the institution planning on<br/> Our Masterplanning Services.</p>
                    <Link to='/service/masterplanning'>
                        <button>Check out the Masterplan</button>
                    </Link>
                </div>
            </div>
        <Footer />

        </div>
    )
}
