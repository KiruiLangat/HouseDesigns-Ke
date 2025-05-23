import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../assets/styles/Projects.module.css';
import '@fontsource/poppins';
import e from 'cors';

const style = {
    fontFamily: 'Poppins',
};

const subCategoryMap = {
    bungalows: 1,
    maisonettes: 2,
    apartments: 3,
    tiny_homes: 4,
};

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const router = useRouter();
    const { sub_category_name } = router.query;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);
            try {
                const subCategoryId = subCategoryMap[sub_category_name];
                const response = await fetch(`/api/residentials/${subCategoryId}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log(data);
                setProjects(data);
            } catch (error) {
                console.error(error);
            }
        };
        if (sub_category_name) {
            fetchProjects();
            setLoading(false);

        }
    }, [sub_category_name]);

    const imageMapping = {
        bungalows: "https://housedesigns.co.ke/bungalows.png",
        maisonettes: "https://housedesigns.co.ke/OurExpertise.jpg",
        apartments: "https://housedesigns.co.ke/apartments.jpg",
        tiny_homes: "https://housedesigns.co.ke/tinyhomes.jpg",
        default: "https://housedesigns.co.ke/defaultImage.jpg",
    };

    const subCategoryImageURL = imageMapping[sub_category_name] || imageMapping.default;    if (loading) {
        return (
            <div className={styles.projects}>
                <h1 className={styles.projectsTitle}>{sub_category_name?.charAt(0).toUpperCase() + sub_category_name?.slice(1)}</h1>
                <div className={styles.serviceProjectsContainer}>
                    {Array(6).fill().map((_, index) => (
                        <div key={`placeholder-${index}`} className={`${styles.projectBox1} ${styles.placeholder}`}>
                            <div className={`${styles.projectsImg} ${styles.placeholderImg}`}></div>
                            <div className={styles.placeholderTitle}></div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div style={style} className={styles.projects}>
            <Head>
                <title>{sub_category_name?.charAt(0).toUpperCase() + sub_category_name?.slice(1)}</title>
                <meta name='title' content={sub_category_name?.charAt(0).toUpperCase() + sub_category_name?.slice(1)} />
                <meta name='description' content={`Explore Our ${sub_category_name?.charAt(0).toUpperCase() + sub_category_name?.slice(1)} HouseDesigns and House Plans in Kenya.`} />
                <meta property='og:title' content={sub_category_name?.charAt(0).toUpperCase() + sub_category_name?.slice(1)} />
                <meta property='og:description' content={`Explore Our ${sub_category_name?.charAt(0).toUpperCase() + sub_category_name?.slice(1)} HouseDesigns and House Plans in Kenya.`} />
                <meta property='og:image' content={subCategoryImageURL} />
                <meta property='og:image:width' content='1200' />
                <meta property='og:image:height' content='600' />
                <meta property='og:url' content={`https://housedesigns.co.ke/architecture/residentials/${sub_category_name?.charAt(0).toUpperCase() + sub_category_name?.slice(1)}`} />
                <meta name='twitter:card' content='summary' />
                <meta name='twitter:title' content={sub_category_name?.charAt(0).toUpperCase() + sub_category_name?.slice(1)} />
                <meta name='twitter:description' content={`Explore Our ${sub_category_name?.charAt(0).toUpperCase() + sub_category_name?.slice(1)} HouseDesigns and House Plans in Kenya.`} />
                <meta name='twitter:image' content={subCategoryImageURL} />
                <meta name='twitter:image:width' content='1024' />
                <meta name='twitter:image:height' content='512' />
                <meta name='twitter:url' content={`https://housedesigns.co.ke/architecture/residentials/${sub_category_name?.charAt(0).toUpperCase() + sub_category_name?.slice(1)}`} />
            </Head>

            <h1 className={styles.projectsTitle}>{sub_category_name?.charAt(0).toUpperCase() + sub_category_name?.slice(1)}</h1>
            <div className={styles.serviceProjectsContainer}>
                {projects.map(project => (
                    <div className={styles.projectBox1} key={project.id}>
                        <Link href={`/projects/${sub_category_name}/${project.title}`}>
                            <a>
                                <div className={styles.projectImg}>
                                    <Image 
                                        src={project.project_img_url} 
                                        alt={project.title || 'Project Loading'} 
                                        layout='fill' 
                                        objectFit='cover'                                           
                                    />
                                </div>
                                <h2>{project.title}</h2>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
