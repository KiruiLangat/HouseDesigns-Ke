import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../assets/styles/Projects.module.css';
import '@fontsource/poppins';

const style = {
    fontFamily: 'Poppins',
};

const subCategoryMap = {
    bungalows: 1,
    maisonettes: 2,
    apartments: 3,
    tiny_homes: 4,
};

const imageMapping = {
    bungalows: "https://housedesigns.co.ke/bungalows.png",
    maisonettes: "https://housedesigns.co.ke/OurExpertise.jpg",
    apartments: "https://housedesigns.co.ke/apartments.jpg",
    tiny_homes: "https://housedesigns.co.ke/tinyhomes.jpg",
    default: "https://housedesigns.co.ke/defaultImage.jpg",
};

export default function Projects({ projects, sub_category_name }) {
    const subCategoryImageURL = imageMapping[sub_category_name] || imageMapping.default;

    return (
        <div style={style} className={styles.projects}>
            <Head>
                <title>{sub_category_name?.charAt(0).toUpperCase() + sub_category_name?.slice(1)}</title>
                <meta name='title' content={sub_category_name?.charAt(0).toUpperCase() + sub_category_name?.slice(1)} />
                <meta name='description' content={`Explore Our ${sub_category_name?.charAt(0).toUpperCase() + sub_category_name?.slice(1)} House Designs and House Plans in Kenya.`} />
                <meta property='og:title' content={sub_category_name?.charAt(0).toUpperCase() + sub_category_name?.slice(1)} />
                <meta property='og:description' content={`Explore Our ${sub_category_name?.charAt(0).toUpperCase() + sub_category_name?.slice(1)} House Designs and House Plans in Kenya.`} />
                <meta property='og:image' content={subCategoryImageURL} />
                <meta property='og:image:width' content='1200' />
                <meta property='og:image:height' content='600' />
                <meta property='og:url' content={`https://housedesigns.co.ke/architecture/residentials/${sub_category_name?.charAt(0).toUpperCase() + sub_category_name?.slice(1)}`} />
                <meta name='twitter:card' content='summary' />
                <meta name='twitter:title' content={sub_category_name?.charAt(0).toUpperCase() + sub_category_name?.slice(1)} />
                <meta name='twitter:description' content={`Explore Our ${sub_category_name?.charAt(0).toUpperCase() + sub_category_name?.slice(1)} House Designs and House Plans in Kenya.`} />
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
                                <div className={styles.projectsImg}>
                                    <Image src={project.project_img_url} alt='Project Loading' layout='fill' objectFit='cover' loading='lazy' />
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

export async function getStaticPaths() {
    const paths = Object.keys(subCategoryMap).map(sub_category_name => ({
        params: { sub_category_name }
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const subCategoryId = subCategoryMap[params.sub_category_name];
    const response = await fetch(`https://housedesigns.co.ke/api/residentials/${subCategoryId}`);

    if (!response.ok) {
        console.error(`Failed to fetch data for sub_category_name: ${params.sub_category_name}`);
        return {
            notFound: true,
        };
    }

    const projects = await response.json();

    return {
        props: {
            projects,
            sub_category_name: params.sub_category_name
        }
    };
}
