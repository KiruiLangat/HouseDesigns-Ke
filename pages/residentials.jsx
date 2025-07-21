import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../assets/styles/OurExpertise.module.css'
import BungalowsImg from '../assets/images/bungalows.jpg'
import MaisonetteImg from '../assets/images/maisonettes.jpg'
import ApartmentsImg from '../assets/images/apartments.jpg'
import TinyHomesImg from '../assets/images/tinyhomes.jpg'

const style = {
    fontFamily: 'Poppins',
};

export default function ServiceSubCategory(){
    return(
        <div className={styles.ourExpertise} style={style}>
            <Head>
                <title>Residential Projects | HouseDesigns</title>
                <meta name="description" content="Explore our residential projects by HouseDesigns, including bungalows, maisonettes, apartments, and tiny homes in Kenya." />
                <meta property="og:title" content="Residential Projects | HouseDesigns"/>
                <meta property="og:description" content="Explore our residential projects by HouseDesigns, including bungalows, maisonettes, apartments, and tiny homes in Kenya." />
                <meta property="og:image" content="https://housedesigns.co.ke/apartments.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:url" content="https://housedesigns.co.ke/architecture/residentials" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://housedesigns.co.ke/architecture/residentials" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Residential Projects | HouseDesigns" />
                <meta name="twitter:description" content="Explore our residential projects by HouseDesigns, including bungalows, maisonettes, apartments, and tiny homes in Kenya." />
                <meta name="twitter:image" content="https://housedesigns.co.ke/apartments.jpg" />
                <meta name="twitter:url" content="https://housedesigns.co.ke/architecture/residentials" />
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
            <h1 className={styles.titleServices}>Residential Projects</h1>
            <div className={styles.services}>
                <div className={styles.service1}>
                    <Link href="/projects/bungalows">
                        <div className={styles.service1Img}>
                            <Image src={BungalowsImg} alt='Bungalows' layout='responsive' width={600} height={250} loading='lazy' />
                        </div>
                        <div className={styles.serviceTitleRow}>
                            <h2>Bungalows</h2>
                            <span className={styles.arrowServices}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Arrow 7" d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0L0 9Z" fill="#ED7D31"/>
                                </svg>
                            </span>
                        </div>
                    </Link>
                </div>
                <div className={styles.service1}>
                    <Link href="/projects/maisonettes">
                        <div className={styles.service1Img}>
                            <Image src={MaisonetteImg} alt='Maisonette' layout='responsive' width={600} height={250} loading='lazy' />
                        </div>
                        <div className={styles.serviceTitleRow}>
                            <h2>Maisonettes</h2>
                            <span className={styles.arrowServices}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Arrow 7" d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0L0 9Z" fill="#ED7D31"/>
                                </svg>
                            </span>
                        </div>
                    </Link>
                </div>
                <div className={styles.service1}>
                    <Link href="/projects/apartments">
                        <div className={styles.service1Img}>
                            <Image src={ApartmentsImg} alt='Apartments' layout='responsive' width={600} height={250} loading='lazy' />
                        </div>
                        <div className={styles.serviceTitleRow}>
                            <h2>Apartments</h2>
                            <span className={styles.arrowServices}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Arrow 7" d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0L0 9Z" fill="#ED7D31"/>
                                </svg>
                            </span>
                        </div>
                    </Link>
                </div>
                <div className={styles.service1}>
                    <Link href="/projects/tiny homes">
                        <div className={styles.service1Img}>
                            <Image src={TinyHomesImg} alt='Tiny Homes' layout='responsive' width={600} height={250} loading='lazy' />
                        </div>
                        <div className={styles.serviceTitleRow}>
                            <h2>Tiny Homes</h2>
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