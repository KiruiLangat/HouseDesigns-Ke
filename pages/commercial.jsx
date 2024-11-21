import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import '@fontsource/poppins'
import styles from '../assets/styles/Commercial.module.css'
import ModernMarket from '../assets/images/modernmarket.jpg'
import ModernMarket1 from '../assets/images/modernmarket1.jpg'
import ModernMarket2 from '../assets/images/modernmarket2.jpg'
import ModernMarket3 from '../assets/images/modernmarket3.jpg'
import ModernMarket4 from '../assets/images/modernmarket4.jpg'
import ModernMarket5 from '../assets/images/modernmarket5.jpg'
import ModernMarket6 from '../assets/images/modernmarket6.jpg'

const style = {
    fontFamily: 'Poppins'
}

export default function CommercialCategory(){
    return(
        <div className={styles.projectDescription} style={style}>
            <Head>
                <title>Commercial Projects</title>
                <meta name='title' content='Commercial Projects' />
                <meta name='description' content='Industrialization with Style and Finese' />
                <meta property='og:title' content='Commercial Projects'/>
                <meta property='og:description' content='Industrialization with Style and Finese' />
                <meta property='og:image' content='/modernmarket1.jpg' />
                <meta property='og:image:width' content='1200' />
                <meta property='og:image:height' content='600' />
                <meta property='og:url' content='https://housedesigns.co.ke/architecture/commercial' />
                <meta name='twitter:card' content='summary' />
                <meta name='twitter:title' content='Commercial Projects' />
                <meta name='twitter:description' content='Industrialization with Style and Finese' />
                <meta name='twitter:image' content='/modernmarket1.jpg' />
                <meta name='twitter:image:width' content='1024' />
                <meta name='twitter:image:height' content='512' />
                <meta name='twitter:url' content='https://housedesigns.co.ke/architecture/commercial' />
            </Head>
            <div className={styles.largeImg}>
                <Image src={ModernMarket5} alt='Modern Market' />
            </div>
            <div className={styles.masonry}>
                <Image src={ModernMarket1} alt='Modern Market' />
                <Image src={ModernMarket2} alt='Modern Market' />
                <Image src={ModernMarket3} alt='Modern Market' />
                <Image src={ModernMarket4} alt='Modern Market' />
                <Image src={ModernMarket} alt='Modern Market' />
                <Image src={ModernMarket6} alt='Modern Market' />
            </div>
            <h1>Modern Market</h1>
            <div className={styles.projectInfo}>                
                <div className={styles.details}>
                    <h2>Project Details</h2>
                    <p>State of the art market area.</p>
                </div>
            </div>
        </div>
    )
}
