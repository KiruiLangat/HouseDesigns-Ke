import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../assets/styles/OurExpertise.module.css';

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
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { sub_category_name } = router.query;

  useEffect(() => {
    async function fetchProjects() {
      setLoading(true);
      try {
        const subCategoryId = subCategoryMap[sub_category_name];
        if (!subCategoryId) {
          setProjects([]);
          setLoading(false);
          return;
        }
        const response = await fetch(`/api/residentials/${subCategoryId}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        setProjects([]);
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    if (sub_category_name) fetchProjects();
  }, [sub_category_name]);

  const imageMapping = {
    bungalows: 'https://housedesigns.co.ke/bungalows.png',
    maisonettes: 'https://housedesigns.co.ke/OurExpertise.jpg',
    apartments: 'https://housedesigns.co.ke/apartments.jpg',
    tiny_homes: 'https://housedesigns.co.ke/tinyhomes.jpg',
    default: 'https://housedesigns.co.ke/defaultImage.jpg',
  };
  const subCategoryImageURL = imageMapping[sub_category_name] || imageMapping.default;

  const formattedName = sub_category_name ? sub_category_name.charAt(0).toUpperCase() + sub_category_name.slice(1).replace('_', ' ') : '';

  if (loading) {
    return (
      <div className={styles.ourExpertise} style={style}>
        <h1 className={styles.titleServices}>{formattedName}</h1>
        <div className={styles.services}>
          {Array(6).fill().map((_, index) => (
            <div key={`placeholder-${index}`} className={`${styles.service1} ${styles.placeholder}`}>
              <div className={`${styles.service1Img} ${styles.placeholderImg}`}></div>
              <div className={styles.serviceTitleRow}>
                <h2 className={styles.placeholderTitle}></h2>
                <span className={styles.arrowServices}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Arrow 7" d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0L0 9Z" fill="#ED7D31"/>
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.ourExpertise} style={style}>
      <Head>
        <title>{formattedName}</title>
        <meta name='title' content={formattedName} />
        <meta name='description' content={`Explore Our ${formattedName} HouseDesigns and House Plans in Kenya.`} />
        <meta property='og:title' content={formattedName} />
        <meta property='og:description' content={`Explore Our ${formattedName} HouseDesigns and House Plans in Kenya.`} />
        <meta property='og:image' content={subCategoryImageURL} />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='600' />
        <meta property='og:url' content={`https://housedesigns.co.ke/architecture/residentials/${formattedName}`} />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content={formattedName} />
        <meta name='twitter:description' content={`Explore Our ${formattedName} HouseDesigns and House Plans in Kenya.`} />
        <meta name='twitter:image' content={subCategoryImageURL} />
        <meta name='twitter:image:width' content='1024' />
        <meta name='twitter:image:height' content='512' />
        <meta name='twitter:url' content={`https://housedesigns.co.ke/architecture/residentials/${formattedName}`} />
      </Head>

      <h1 className={styles.titleServices}>{formattedName}</h1>
      <div className={styles.services}>
        {projects.length > 0 ? (
          projects.map(project => (
            <div className={styles.service1} key={project.id}>
              <Link href={`/projects/${sub_category_name}/${project.title}`}>
                <div className={styles.service1Img}>
                  <Image
                    src={project.project_img_url}
                    alt={project.title || 'Project Loading'}
                    layout='responsive'
                    width={600}
                    height={250}
                    loading='lazy'
                  />
                </div>
                <div className={styles.serviceTitleRow}>
                  <h2>{project.title}</h2>
                  <span className={styles.arrowServices}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path id="Arrow 7" d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0L0 9Z" fill="#ED7D31"/>
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div style={{ textAlign: 'center', width: '100%' }}>
            <p>No projects found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
