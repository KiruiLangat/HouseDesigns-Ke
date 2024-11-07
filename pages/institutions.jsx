import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import '@fontsource/poppins'
import styles from '../assets/styles/Institution.module.css'
import InstitutionImg from '../assets/images/Institutions.png'
import Institution1 from '../assets/images/institution1.png'
import Institution2 from '../assets/images/institution2.png'
import Institution3 from '../assets/images/institution3.png'
import Institution4 from '../assets/images/institution4.png'

const style = {
    fontFamily: 'Poppins'
}

export default function InstitutionCategory(){
    return(
        <div className={styles.projectDescription} style={style}>
            <Head>
                <title>Institutions</title>
                <meta name='title' content='Institutions' />
                <meta name='description' content='Enhancing Our Learning Spaces' />
                <meta property='og:title' content='Institutions'/>
                <meta property='og:description' content='Enhancing Our Learning Spaces' />
                <meta property='og:image' content='https://housedesigns.co.ke/Institutions.png' />
                <meta property='og:image:width' content='1200' />
                <meta property='og:image:height' content='600' />
                <meta property='og:url' content='https://housedesigns.co.ke/architecture/institutions' />
                <meta name='twitter:card' content='summary' />
                <meta name='twitter:title' content='Institutions' />
                <meta name='twitter:description' content='Enhancing Our Learning Spaces' />
                <meta name='twitter:image' content='https://housedesigns.co.ke/Institutions.png' />
                <meta name='twitter:image:width' content='1024' />
                <meta name='twitter:image:height' content='512' />
                <meta name='twitter:url' content='https://housedesigns.co.ke/architecture/institutions' />
            </Head>
            <div className={styles.largeImg}>
                <Image src={InstitutionImg} alt='Institution' />
            </div>
            <div className={styles.masonry}>
                <Image src={Institution1} alt='Modern Market' />
                <Image src={Institution2} alt='Modern Market' />
                <Image src={Institution3} alt='Modern Market' />
                <Image src={Institution4} alt='Modern Market' />
            </div>
            <h1>Institution</h1>
            <div className={styles.projectInfo}>                
                <div className={styles.details}>
                    <h2>Project Details</h2>
                    <p>View the institution planning on Our Masterplanning Services.</p>
                    <Link href='/masterplanning'>
                        <button>Check out the Masterplan</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
