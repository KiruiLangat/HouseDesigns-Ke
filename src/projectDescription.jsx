import React, {useEffect, useState} from 'react'
import { Helmet } from 'react-helmet' 
import { useParams } from 'react-router-dom'
import './projectDescription.css'
import '@fontsource/poppins'


const style ={
    fontFamily:'Poppins'
}

export default function ProjectDescription({sub_category_name}) {
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

    if (!project) {
        return <div className='loading'>Loading <span>...</span></div>
    }
    
    const ogUrl = `https://housedesigns.co.ke/architecture/residentials/${sub_category_name}/${project.title}`


    // useEffect(() => {
    //     console.log(project)
    // }, [project])

    return (
        <div className='project-description' style={style}>   
            <Helmet>
                <title>{project.title}</title>
                <meta name='description' content={project.details} />
                <meta property='og:title' content={project.title} />
                <meta property='og:description' content={project.details} />
                <meta property='og:image' content={images[0]} />
                <meta property='og:image:width' content='300' />
                <meta property='og:image:height' content='300' />
                <meta property='og:url' content={ogUrl} />
                <meta name='twitter:card' content='summary' />
                <meta name='twitter:title' content={project.title} />
                <meta name='twitter:description' content={project.details} />
                <meta name='twitter:image' content={images[0]} />
                <meta name='twitter:image:width' content='144' />
                <meta name='twitter:image:height' content='144' />
                <meta name='twitter:url' content={ogUrl} />
            </Helmet>         
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
        </div>
    )
}
