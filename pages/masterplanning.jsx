import React from "react";
import Head from 'next/head';
import Image from 'next/image';
import styles from '../assets/styles/Masterplanning.module.css';
import '@fontsource/poppins';
import Masterplan from '../assets/images/masterplanning.png';
import Masterplan1 from '../assets/images/Masterplanning2.png';
import Masterplan2 from '../assets/images/Masterplanning3.png';
import Masterplan3 from '../assets/images/Masterplanning4.png';
import Masterplan4 from '../assets/images/Institutions.png';
import Masterplan5 from '../assets/images/institution1.png';
import Masterplan6 from '../assets/images/institution2.png';
import Masterplan7 from '../assets/images/Masterplanning5.png';
import Masterplan8 from '../assets/images/Masterplanning6.png';
import Masterplan9 from '../assets/images/institution3.png';
import Masterplan10 from '../assets/images/Masterplanning7.png';
import Masterplan11 from '../assets/images/Masterplanning8.png';
import Masterplan12 from '../assets/images/institution4.png';
import Masterplan13 from '../assets/images/Masterplanning9.png';
import Masterplan14 from '../assets/images/Masterplanning10.png';
import Masterplan15 from '../assets/images/Masterplanning11.png';

const style = {
    fontFamily: 'Poppins'
};

export default function Masterplanning() {
    return (
        <>
            <Head>
                <title>Masterplanning Projects</title>
                <meta name='title' content='Masterplanning Projects' />
                <meta name='description' content='Enhancing Our Community by Developing Sustainable, Functional, and Aesthetically Pleasing Urban Spaces.' />
                <meta property='og:title' content='Masterplanning' />
                <meta property='og:description' content='Enhancing Our Community by Developing Sustainable, Functional, and Aesthetically Pleasing Urban Spaces.' />
                <meta property='og:image' content='/masterplanning.png' />
                <meta property='og:image:width' content='1200' />
                <meta property='og:image:height' content='600' />
                <meta property='og:url' content='https://housedesigns.co.ke/masterplanning' />
                <meta name='twitter:card' content='summary' />
                <meta name='twitter:title' content='Masterplanning' />
                <meta name='twitter:description' content='Enhancing Our Community by Developing Sustainable, Functional, and Aesthetically Pleasing Urban Spaces.' />
                <meta name='twitter:image' content='/masterplanning.png' />
                <meta name='twitter:image:width' content='1024' />
                <meta name='twitter:image:height' content='512' />
                <meta name='twitter:url' content='https://housedesigns.co.ke/masterplanning' />
            </Head>
            <div className={styles.masterplan} style={style}>
                <div className={styles.largeImg}>
                    <Image src={Masterplan} alt="institution Masterplan" width={'700px'} height={'430px'} />
                </div>
                <h1 className={styles.masterplanTitle}>Masterplanning Services</h1>
                <h2>University of Isiolo</h2>
                <div className={styles.masonry}>
                    <Image src={Masterplan1} alt="institution Masterplan" />
                    <Image src={Masterplan2} alt="institution Masterplan" />
                    <Image src={Masterplan3} alt="institution Masterplan" />
                    <Image src={Masterplan4} alt="institution Masterplan" />
                    <Image src={Masterplan5} alt="institution Masterplan" />
                    <Image src={Masterplan6} alt="institution Masterplan" />
                    <Image src={Masterplan7} alt="institution Masterplan" />
                    <Image src={Masterplan8} alt="institution Masterplan" />
                    <Image src={Masterplan9} alt="institution Masterplan" />
                    <Image src={Masterplan10} alt="institution Masterplan" />
                    <Image src={Masterplan11} alt="institution Masterplan" />
                    <Image src={Masterplan12} alt="institution Masterplan" />
                    <Image src={Masterplan13} alt="institution Masterplan" />
                    <Image src={Masterplan14} alt="institution Masterplan" />
                    <Image src={Masterplan15} alt="institution Masterplan" />
                </div>
            </div>
        </>
    );
}