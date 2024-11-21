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
                <title>Architecture Projects</title>
                <meta name='title' content='Architecture Projects' />
                <meta name='description' content='Explore Our Architecture Projects' />
                <meta property='og:title' content='Architecture Projects' />
                <meta property='og:description' content='Explore Our Architecture Projects' />
                <meta property='og:image' content='/modernmarket.jpg' />
                <meta property='og:image:width' content='1200' />
                <meta property='og:image:height' content='600' />
                <meta property='og:url' content='https://housedesigns.co.ke/architecture' />
                <meta name='twitter:card' content='summary' />
                <meta name='twitter:title' content='Architecture Projects' />
                <meta name='twitter:description' content='Explore Our Architecture Projects' />
                <meta name='twitter:image' content='/modernmarket.jpg' />
                <meta name='twitter:image:width' content='1024' />
                <meta name='twitter:image:height' content='512' />
                <meta name='twitter:url' content='https://housedesigns.co.ke/architecture' />
            </Head>

            <h1 className={styles.projectsTitle}>Architecture Projects</h1>
            <div className={styles.serviceProjectsContainer}>
                <div className={styles.projectBox1}>
                    <Link href="/residentials" legacyBehavior>
                        <a>
                            <div className={styles.projectImg}>
                                <Image src={ResidentialsImg} alt='Residential' />
                            </div>
                            <h2>Residentials</h2>
                        </a>
                    </Link>
                </div>
                <div className={styles.projectBox1}>
                    <Link href="/commercial" legacyBehavior>
                        <a>
                            <div className={styles.projectImg}>
                                <Image src={CommercialImg} alt='Commercial' />
                            </div>
                            <h2>Commercial</h2>
                        </a>
                    </Link>
                </div>
                <div className={styles.projectBox1}>
                    <Link href="/institutions" legacyBehavior>
                        <a>
                            <div className={styles.projectImg}>
                                <Image src={InstitutionImg} alt='Institutions' />
                            </div>
                            <h2>Institutions</h2>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
