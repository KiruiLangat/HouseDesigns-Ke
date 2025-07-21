import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import '@fontsource/poppins'
import styles from '../assets/styles/OurExpertise.module.css'
import CommercialImg from '../assets/images/commercial.jpg'
import ResidentialsImg from '../assets/images/residentials.jpg'
import InstitutionImg from '../assets/images/Institutions.png'

const style = {
    fontFamily: 'Poppins',
}

export default function ArchitectureServiceCategory() {
    return (
        <div className={styles.ourExpertise} style={style}>
            <Head>
                <title>Architecture Projects | HouseDesigns</title>
                <meta name="description" content="Explore our portfolio of architecture projects by HouseDesigns, including residential, commercial, and institutional designs in Kenya." />
                <meta property="og:title" content="Architecture Projects | HouseDesigns" />
                <meta property="og:description" content="Explore our portfolio of architecture projects by HouseDesigns, including residential, commercial, and institutional designs in Kenya." />
                <meta property="og:image" content="https://housedesigns.co.ke/modernmarket.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:url" content="https://housedesigns.co.ke/architecture" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://housedesigns.co.ke/architecture" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Architecture Projects | HouseDesigns" />
                <meta name="twitter:description" content="Explore our portfolio of architecture projects by HouseDesigns, including residential, commercial, and institutional designs in Kenya." />
                <meta name="twitter:image" content="https://housedesigns.co.ke/modernmarket.jpg" />
                <meta name="twitter:url" content="https://housedesigns.co.ke/architecture" />
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
                        "https://x.com/HouseDesignsKe",
                        "https://www.linkedin.com/company/house-designske/",
                        "https://www.instagram.com/house_designske/"
                      ]
                    })
                  }}
                />
            </Head>

            <h1 className={styles.titleServices}>Architecture Projects</h1>
            <div className={styles.services}>
                <div className={styles.service1}>
                    <Link href="/residentials">
                        <div className={styles.service1Img}>
                            <Image src={ResidentialsImg} alt='Residential' layout='responsive' width={600} height={250} loading='lazy' />
                        </div>
                        <div className={styles.serviceTitleRow}>
                            <h2>Residentials</h2>
                            <span className={styles.arrowServices}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Arrow 7" d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0L0 9Z" fill="#ED7D31"/>
                                </svg>
                            </span>
                        </div>
                    </Link>
                </div>
                <div className={styles.service1}>
                    <Link href="/commercial">
                        <div className={styles.service1Img}>
                            <Image src={CommercialImg} alt='Commercial' layout='responsive' width={600} height={250} loading='lazy' />
                        </div>
                        <div className={styles.serviceTitleRow}>
                            <h2>Commercial</h2>
                            <span className={styles.arrowServices}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Arrow 7" d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0L0 9Z" fill="#ED7D31"/>
                                </svg>
                            </span>
                        </div>
                    </Link>
                </div>
                <div className={styles.service1}>
                    <Link href="/institutions">
                        <div className={styles.service1Img}>
                            <Image src={InstitutionImg} alt='Institutions' layout='responsive' width={600} height={250} loading='lazy' />
                        </div>
                        <div className={styles.serviceTitleRow}>
                            <h2>Institutions</h2>
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
