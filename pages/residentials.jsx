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
                <title>Residential Projects</title>
                <meta name='title' content='Residential Projects' />
                <meta name='description' content='Explore Our Residential Projects' />
                <meta property='og:title' content='Residential Projects'/>
                <meta property='og:description' content='Explore Our Residential Projects' />
                <meta property='og:image' content='https://housedesigns.co.ke/apartment.jpg' />
                <meta property='og:image:width' content='1200' />
                <meta property='og:image:height' content='600' />
                <meta property='og:url' content='https://housedesigns.co.ke/architecture/residentials' />
                <meta name='twitter:card' content='summary' />
                <meta name='twitter:title' content='Residential Projects' />
                <meta name='twitter:description' content='Explore Our Residential Projects' />
                <meta name='twitter:image' content='https://housedesigns.co.ke/apartment.jpg' />
                <meta name='twitter:image:width' content='1024' />
                <meta name='twitter:image:height' content='512' />
                <meta name='twitter:url' content='https://housedesigns.co.ke/architecture/residentials' />
            </Head>
            <h1 className={styles.projectsTitle}>Residential Projects</h1>
                <div className={styles.serviceProjectsContainer}>
                    <div className={styles.projectBox}>
                        <Link href="/bungalows" legacyBehavior>
                        <a>
                            <div className={styles.projectImg}>
                                <Image src={BungalowsImg} alt='Bungalows' layout='fixed' />
                            </div>
                            <h2>Bungalows</h2>
                        </a>
                        </Link>
                    </div>
                    <div className={styles.projectBox}>
                        <Link href="/maisonettes" legacyBehavior>
                        <a>
                            <div className={styles.projectImg}>
                                <Image src={MaisonetteImg} alt='Maisonette' layout='fixed' />
                            </div>
                            <h2>Maisonettes</h2>
                        </a>
                        </Link>
                    </div>
                    <div className={styles.projectBox}>
                        <Link href="/apartments" legacyBehavior>
                        <a>
                            <div className={styles.projectImg}>
                                <Image src={ApartmentsImg} alt='Apartments' layout='fixed' />
                            </div>
                            <h2>Apartments</h2>
                        </a>
                        </Link>
                    </div>
                    <div className={styles.projectBox}>
                        <Link href="/tiny homes" legacyBehavior>
                        <a>
                            <div className={styles.projectImg}>
                                <Image src={TinyHomesImg} alt='Tiny Homes' layout='fixed'/>
                            </div>
                            <h2>Tiny Homes</h2>
                        </a>
                        </Link>
                    </div>
                </div>
        </div>
    )
}