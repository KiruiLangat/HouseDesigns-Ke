import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../../../assets/styles/projectDescription.module.css'
import '@fontsource/poppins'

const style = {
    fontFamily: 'Poppins'
}

export default function ProjectDescription({ project, images }) {
    const router = useRouter()

    if (router.isFallback) {
        return <div className={styles.loading}>Loading <span>...</span></div>
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
                    <Image src={images[0]} alt='project Img' layout='responsive' width={1200} height={600} />
                </div>
                <div className={styles.masonry}>
                    {images.slice(1).map((image, index) => (
                        <div key={index} className={styles.imageContainer}>
                            <Image src={image} alt={`img${index + 1}`} layout='responsive' width={1200} height={600} onLoad={(e) => e.target.style.opacity = 1} loading='lazy' />
                        </div>
                    ))}
                </div>
            </>
            {project && (
                <>
                    <h1>{project.title}</h1>
                    <div className={styles.projectInfo}>
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
                            <p>{project.details}</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://housedesigns.co.ke/api/residentials/project-titles')
    const titles = await res.json()

    const paths = titles.map((title) => ({
        params: { title }
    }))

    return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
    const { title } = params

    const [projectRes, imagesRes] = await Promise.all([
        fetch(`https://housedesigns.co.ke/api/residentials/project-details/${title}`),
        fetch(`https://housedesigns.co.ke/api/residentials/project-images/${title}`)
    ])

    const [project, images] = await Promise.all([
        projectRes.json(),
        imagesRes.json()
    ])

    return {
        props: {
            project,
            images
        }
    }
}
