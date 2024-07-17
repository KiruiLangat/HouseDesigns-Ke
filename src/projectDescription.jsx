import React, {useEffect, useState} from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import './projectDescription.css'
import '@fontsource/poppins'


const style ={
    fontFamily:'Poppins'
}

export default function ProjectDescription() {
    const { title } = useParams()
    const [images, setImages] = useState([])

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(`/api/residentials/project-description/${title}`)
                console.log(title)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json()
                setImages(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchImages();
    }, [title]);

    const [project, setProject] = useState(null)

    useEffect (() => {
        const fetchProject = async () => {
            try{
                const response = await fetch(`/api/residentials/project-details/${title}`)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json()
                setProject(data)
                
            } catch (error){
                console.error(error)

            }
        }
        fetchProject();
    }, [title]);

    // useEffect(() => {
    //     console.log(project)
    // }, [project])

    return (
        <div className='project-description' style={style}>
            <Helmet>
                <title>{project.title}</title>
                <meta name='description'content={project.excerpt} />
                <meta property='og:title' content={project.title}/>
                <meta property='og:description' content= {project.excerpt} />
                <meta property='og:image' content={project.project_img_url} />
                <meta property='og:image:width' content='1200' />
                <meta property='og:image:height' content='630' />
                <meta property='og:url' content={`https://housedesigns.co.ke/architecture/residentials/${project.title}`} />
                <meta name='twitter:card' content='summary' />
            </Helmet>
            <Header />
            <>
                <div className='large-img'>
                    <img src={images[0]} alt='project Img'/>
                </div>
                <div className='masonry'>
                    {images.slice(1).map((image, index) => (
                        <div key={index} className='image-container'>
                            <img  src={image} alt={`img${index + 1}`} onLoad={(e) => e.target.style.opacity = 1} loading='lazy'/>
                        </div>
                        
                    ))}
                </div>
            </>
            {project && (
                <>
                    <h1>{project.title}</h1>
                    <div className='project-info'>                
                        <div className='descriptions'>
                            <div className='description1'>
                                <h2>Location</h2>
                                <p>{project.location}</p>
                            </div>
                            <div className='description2'>
                                <h2>Plinth Area</h2>
                                <p>{project.plinth_area}</p>
                            </div>
                            <div className='description3'>
                                <h2>Status</h2>
                                <p>{project.project_status}</p>
                            </div>
                        </div>
                        <div className='details'>
                            <h2>Project Details</h2>
                            <p>{project.details}</p>
                        </div>   
                    </div>  
                </>  
            )}

            <Footer />

        </div>
    )
}
