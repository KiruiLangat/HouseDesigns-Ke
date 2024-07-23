import React from 'react';
//import { Link } from 'react-router-dom';
import './landingPage.css';
import '@fontsource/poppins'


const style= {
    fontFamily: 'Poppins',
    color:'white'
}

export default function LandingPage(){
    return(
        <div  className='shop-home' style={style}>
            <div className='landing-page'>
                <div className='landing-content'>
                    <h1 className='landing-text'>
                        Turning Your Vision into Reality <br/> through
                        <span className='highlight'> A Seamless And <br/> Collaborative </span> <br/>
                        Approach</h1>
                </div>
                <div className='landing-options'>
                    A CAROUSEL
                </div>
            </div>

        </div>
    )
}