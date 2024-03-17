import React from 'react'
import Header from './Header';
import Footer from './Footer';
import ProjectImg from './images/projectDescription2.svg'
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
            <h1>Architecture Projects</h1>
            <div className='projects-container'>
                <Link to='/projects/project-description'>
                <div className='project-box1'>
                    <img src={ProjectImg} alt='project-img' className='projects-img'/>
                    <h2>Project Title</h2>
                </div></Link>
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
