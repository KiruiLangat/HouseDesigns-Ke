import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../assets/styles/Projects.module.css'
import BungalowsImg from '../assets/images/bungalows.jpg'
import MaisonetteImg from '../assets/images/maisonettes.jpg'
import ApartmentsImg from '../assets/images/apartments.jpg'
import TinyHomesImg from '../assets/images/tinyhomes.jpg'

const style = {
    fontFamily: 'Poppins',
};

export default function ServiceSubCategory(){
    return(
        <div className={styles.projects} style={style}>
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
            <h1 className={styles.projectsTitle}>Residential Projects</h1>
                <div className={styles.serviceProjectsContainer}>
                    {/* ...existing code... */}
                    <div className={styles.projectBox}>
                        <Link href="/projects/bungalows" legacyBehavior>
                        <a>
                            <div className={styles.projectImg}>
                                <Image src={BungalowsImg} alt='Bungalows' loading='lazy' />
                            </div>
                            <h2>Bungalows</h2>
                        </a>
                        </Link>
                    </div>
                    <div className={styles.projectBox}>
                        <Link href="/projects/maisonettes" legacyBehavior>
                        <a>
                            <div className={styles.projectImg}>
                                <Image src={MaisonetteImg} alt='Maisonette' loading='lazy' />
                            </div>
                            <h2>Maisonettes</h2>
                        </a>
                        </Link>
                    </div>
                    <div className={styles.projectBox}>
                        <Link href="/projects/apartments" legacyBehavior>
                        <a>
                            <div className={styles.projectImg}>
                                <Image src={ApartmentsImg} alt='Apartments' loading='lazy' />
                            </div>
                            <h2>Apartments</h2>
                        </a>
                        </Link>
                    </div>
                    <div className={styles.projectBox}>
                        <Link href="/projects/tiny homes" legacyBehavior>
                        <a>
                            <div className={styles.projectImg}>
                                <Image src={TinyHomesImg} alt='Tiny Homes' loading='lazy' />
                            </div>
                            <h2>Tiny Homes</h2>
                        </a>
                        </Link>
                    </div>
                </div>
        </div>
    )
}