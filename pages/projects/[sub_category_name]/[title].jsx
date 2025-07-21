import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../../../assets/styles/projectDescription.module.css'
import '@fontsource/poppins'
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

const style = {
    fontFamily: 'Poppins'
}

export default function ProjectDescription() {
    const router = useRouter()
    const { title } = router.query
    const [images, setImages] = useState([])

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(`/api/residentials/project-images/${title}`)
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
        if (title) {
            fetchImages();
        }
    }, [title]);

    const [project, setProject] = useState(null)

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await fetch(`/api/residentials/project-details/${title}`)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json()
                setProject(data)
            } catch (error) {
                console.error(error)
            }
        }
        if (title) {
            fetchProject();
        }
    }, [title]);

    if (!project) {
        return ( 
        <div className={styles.loading}>
            <HourglassBottomIcon className={styles.loadingIcon} />
            <p>Fetching Project Images...</p>            
        </div>
        )
    }

    const ogUrl = `https://housedesigns.co.ke/${project.title}`

    return (
        <div className={styles.projectDescription} style={style}>
            <Head>
                <title>{project.title}</title>
                <meta name='title' content={project.title} />
                <meta name='description' content={project.details} />
                <meta property='og:title' content={project.title} />
                <meta property='og:description' content={project.details} />
                <meta property='og:image' content={images[0]} />
                <meta property='og:image:width' content='1200' />
                <meta property='og:image:height' content='600' />
                <meta property='og:url' content={ogUrl} />
                <meta name='twitter:card' content='summary' />
                <meta name='twitter:title' content={project.title} />
                <meta name='twitter:description' content={project.details} />
                <meta name='twitter:image' content={images[0]} />
                <meta name='twitter:image:width' content='1024' />
                <meta name='twitter:image:height' content='512' />
                <meta name='twitter:url' content={ogUrl} />
            </Head>
            <>
                <div className={styles.largeImg}>
                    {images[0] && (
                        <Image 
                            src={images[0]} 
                            alt='project Img' 
                            layout='responsive' 
                            width={1200} 
                            height={600}
                            className={styles.mainImage}
                            onLoad={(e) => {
                                e.target.classList.add(styles.loaded);
                                e.target.style.opacity = 1;
                            }}
                        />
                    )}
                </div>
                <div className={styles.masonry}>
                    {images.slice(1).map((image, index) => (
                        <div key={index} className={styles.imageContainer}>
                            <Image 
                                src={image} 
                                alt={`img${index + 1}`} 
                                onLoad={(e) => {
                                    e.target.classList.add('loaded');
                                    e.target.style.opacity = 1;
                                }} 
                                loading='lazy'
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    ))}
                </div>
            </>
            {project && (
                <>
                    
                    <div className={styles.projectInfo}>
                        <h1>{project.title}</h1>
                        <div className={styles.projectTexts}>
                            <div className={styles.descriptions}>
                                
                                <div className={styles.description1}>
                                    <h2>Location</h2>
                                    <p>{project.location}</p>
                                </div>
                                <div className={styles.description2}>
                                    <h2>Plinth Area</h2>
                                    <p>{project.plinth_area}</p>
                                </div>
                                <div className={styles.description3}>
                                    <h2>Status</h2>
                                    <p>{project.project_status}</p>
                                </div>
                            </div>
                            <div className={styles.details}>
                                <h2>Project Details</h2>
                                <div className={styles.detailsContent}>
                                    <p>{project.details}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
