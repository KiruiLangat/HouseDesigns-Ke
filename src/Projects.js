import React from 'react'
// import {useState} from 'react'
// import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ProjectImg from './images/carousel3.jpg'
import ProjectImg1 from './images/CM_1.jpg'

import './Projects.css';
import '@fontsource/poppins'
import { Link } from 'react-router-dom';
// import { response } from 'express';

const style = {
    fontFamily: 'Poppins',
};


export default function Projects() {
    // const [projects, setProjects] = useState([])
    // const {serviceType} = useParams()

    // useEffect(() => {
    //     fetch(`/projects/${serviceType}`)
    //     .then(response => {
    //         console.log(response)
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! status: ${response.status}`);
    //         }
    //         return response.json()
    //     })
    //     .then(data => {
    //         setProjects(response.data);
    //         
    //     })
    //     .catch(error => {
    //         console.error('Error:', error)
    //     })
    // }, [serviceType])


    return (
        <div style={style} className='projects'>
            <Header />
            <h1 className='projects-title'>Architecture Projects</h1>
            <div className='service-projects-container'>
                {/* {projects.map(project => ( */}
                <div className='project-box1'> 
                {/* Link to={`/project/${project.id}`} key={project.id} */}
                    <Link to='/projects/project-description'>
                        
                        <div className='projects-img'>
                            {/* src={Project.image_url} */}
                            <img src={ProjectImg1} alt='project-img' />
                        </div>
                        {/* {project.title} */}
                        <h2>Project Title</h2>
                    </Link>
                </div>
            {/*))} */}
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
