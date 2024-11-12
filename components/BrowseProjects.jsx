import React from 'react';
import Image from 'next/image';
import styles from '../assets/styles/BrowseProjects.module.css';
import sideBracket from '../assets/images/sideBracket.png';
import BrowseCarousel from './BrowseCarousel';

export default function BrowseProjects() {
    return (
        <div className={styles.projectsContainer}>
            
            <div className={styles.sideBracket}>
                <Image src={sideBracket} alt="sideBracket" />
            </div>
            
            <div className={styles.projectsIntro}>
                <h1>Browse <br/>our Projects<br/>and Find Your <br/> Taste</h1>
                <p>Here are some of our completed <br/> projects</p>
            </div>

            <div className={styles.projectsIntroMessageMobile}>
                <h1>Browse Our Projects</h1>
            </div>

            <BrowseCarousel/>
        
        </div>
    )
}