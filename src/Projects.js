import React from 'react'
import Header from './Header';
import Footer from './Footer';
import ProjectImg from './images/carousel3.jpg'
import ProjectImg1 from './images/CM_1.jpg'

import './Projects.css';
import '@fontsource/poppins'
import { Link } from 'react-router-dom';

const style = {
    fontFamily: 'Poppins',
};


export default function Projects() {
    return (
        <div style={style} className='projects'>
            <Header />
            <h1 className='projects-title'>Architecture Projects</h1>
            <div className='service-projects-container'>
                
                <div className='project-box1'>
                    <Link to='/projects/project-description'>
                        <img src={ProjectImg1} alt='project-img' className='projects-img'/>
                        <h2>Project Title</h2>
                    </Link>
                </div>
                <div className='project-box1'>
                    <img src={ProjectImg} alt='project-img' className='projects-img'/>
                    <h2>Project Title</h2>
                </div>
                <div className='project-box1'>
                    <img src={ProjectImg} alt='project-img' className='projects-img'/>
                    <h2>Project Title</h2>
                </div>
                <div className='project-box1'>
                    <img src={ProjectImg} alt='project-img' className='projects-img'/>
                    <h2>Project Title</h2>
                </div>
                <div className='project-box1'>
                    <img src={ProjectImg} alt='project-img' className='projects-img'/>
                    <h2>Project Title</h2>
                </div>
                <div className='project-box1'>
                    <img src={ProjectImg} alt='project-img' className='projects-img'/>
                    <h2>Project Title</h2>
                </div>
                <div className='project-box1'>
                    <img src={ProjectImg} alt='project-img' className='projects-img'/>
                    <h2>Project Title</h2>
                </div>
                <div className='project-box1'>
                    <img src={ProjectImg} alt='project-img' className='projects-img'/>
                    <h2>Project Title</h2>
                </div>
            </div>

            <Footer />
        </div>
    )
}
