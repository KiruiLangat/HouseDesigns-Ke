import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../assets/styles/OurExpertise.module.css'
import '@fontsource/poppins'
import InteriorDesign from '../assets/images/interior-design.jpg'
import ProjectMgmt from '../assets/images/projectMgmt.webp'
import Masterplanning from '../assets/images/masterplanning.png'
import architecture from '../assets/images/CM_1.jpg'
import Link from 'next/link'

const style = {
    fontFamily: 'Poppins',
}

export default function OurExpertise(){
    return(
        <div className={styles.ourExpertise} style={style}>
            <Head>
                <title>Our Expertise | HouseDesigns</title>
                <meta name="description" content="Explore our services at HouseDesigns: architecture, interior design, project management, and master planning in Kenya." />
                <meta property="og:title" content="Our Expertise | HouseDesigns"/>
                <meta property="og:description" content="Explore our services at HouseDesigns: architecture, interior design, project management, and master planning in Kenya." />
                <meta property="og:image" content="https://housedesigns.co.ke/CM_1.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:url" content="https://housedesigns.co.ke/our-expertise" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://housedesigns.co.ke/our-expertise" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Our Expertise | HouseDesigns" />
                <meta name="twitter:description" content="Explore our services at HouseDesigns: architecture, interior design, project management, and master planning in Kenya." />
                <meta name="twitter:image" content="https://housedesigns.co.ke/CM_1.jpg" />
                <meta name="twitter:url" content="https://housedesigns.co.ke/our-expertise" />
                {/* Organization JSON-LD structured data */}
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "Organization",
                      "name": "HouseDesigns",
                      "url": "https://housedesigns.co.ke/",
                      "logo": "https://housedesigns.co.ke/Logo.png",
                      "sameAs": [
                        "https://x.com/HouseDesignske/",
                        "https://www.linkedin.com/company/house-designske/",
                        "https://www.instagram.com/house_designske/"
                      ]
                    })
                  }}
                />
            </Head> 
            {/* ...existing code... */}
            <h1 className={styles.titleServices}>Explore our services</h1>
            <div className={styles.services}>
                <div className={styles.service1}>
                    <Link href="/architecture"> 
                        <div className={styles.service1Img}>
                            <Image src={architecture} alt='architecture' layout='fixed'  loading='lazy'/>
                        </div>
                        <div className={styles.serviceTitleRow}>
                            <h2>Architecture</h2>
                            <span className={styles.arrowServices}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Arrow 7" d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0L0 9Z" fill="#ED7D31"/>
                                </svg>
                            </span>
                        </div>
                    </Link>
                </div>
                <div className={styles.service1}>
                    <Link href="/contact-us">
                        <div className={styles.service1Img}>
                            <Image src={InteriorDesign} alt='interior design' layout='fixed' loading='lazy'/>
                        </div>
                        <div className={styles.serviceTitleRow}>
                            <h2>Interior Design</h2>
                            <span className={styles.arrowServices}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Arrow 7" d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0L0 9Z" fill="#ED7D31"/>
                                </svg>
                            </span>
                        </div>
                    </Link>
                </div>
                <div className={styles.service1}>
                    <Link href='/contact-us'>
                        <div className={styles.service1Img}>
                            <Image src={ProjectMgmt} alt='project-management' layout='fixed' loading='lazy' />
                        </div>
                        <div className={styles.serviceTitleRow}>
                            <h2>Project Management</h2>
                            <span className={styles.arrowServices}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Arrow 7" d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0L0 9Z" fill="#ED7D31"/>
                                </svg>
                            </span>
                        </div>
                    </Link>
                </div>
                <div className={styles.service1}>
                    <Link href='/masterplanning'>
                        <div className={styles.service1Img}>
                            <Image src={Masterplanning} alt='masterplanning' layout='fixed' loading='lazy' />
                        </div>
                        <div className={styles.serviceTitleRow}>
                            <h2>Master Planning</h2>
                            <span className={styles.arrowServices}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Arrow 7" d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0L0 9Z" fill="#ED7D31"/>
                                </svg>
                            </span>
                        </div>
                    </Link>
                </div>
            </div> 
        </div>
    )
}