import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import '@fontsource/poppins'
import styles from '../assets/styles/Projects.module.css'
import CommercialImg from '../assets/images/commercial.jpg'
import ResidentialsImg from '../assets/images/residentials.jpg'
import InstitutionImg from '../assets/images/Institutions.png'

const style = {
    fontFamily: 'Poppins',
}

export default function ArchitectureServiceCategory() {
    return (
        <div className={styles.projects} style={style}>
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

            <h1 className={styles.projectsTitle}>Architecture Projects</h1>
            <div className={styles.serviceProjectsContainer}>
                {/* ...existing code... */}
                <div className={styles.projectBox1}>
                    <Link href="/residentials" legacyBehavior>
                        <a>
                            <div className={styles.projectImg}>
                                <Image src={ResidentialsImg} alt='Residential' loading='lazy' />
                            </div>
                            <h2>Residentials</h2>
                        </a>
                    </Link>
                </div>
                <div className={styles.projectBox1}>
                    <Link href="/commercial" legacyBehavior>
                        <a>
                            <div className={styles.projectImg}>
                                <Image src={CommercialImg} alt='Commercial' loading='lazy'/>
                            </div>
                            <h2>Commercial</h2>
                        </a>
                    </Link>
                </div>
                <div className={styles.projectBox1}>
                    <Link href="/institutions" legacyBehavior>
                        <a>
                            <div className={styles.projectImg}>
                                <Image src={InstitutionImg} alt='Institutions' loading='lazy' />
                            </div>
                            <h2>Institutions</h2>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
