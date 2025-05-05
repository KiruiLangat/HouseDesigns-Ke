import React, { useState } from 'react';
import styles from '../../assets/styles/shop/landingPage.module.css';
import '@fontsource/poppins';
import LandingCarousel from './LandingPageCarousel';

const style = {
    fontFamily: 'Poppins',
};

export default function LandingPage() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const getHighlightStyle = () => {
        switch (selectedOption) {
            case 'Option 1':
                return { color: '#33fffc' };
            case 'Option 2':
                return { color: '#33FF57' };
            case 'Option 3':
                return { color: '#3357FF' };
            case 'Option 4':
                return { color: '#ED7D31' };
            default:
                return {};
        }
    };

    return (
        <div className={styles.shopHome} style={style}>
            <div className={styles.landingPage}>
                <div className={styles.landingContent}>
                    <h1 className={styles.landingText}>
                        Turning Your Vision into Reality <br /> through
                        <span className={styles.highlight} style={getHighlightStyle()}> A Seamless And <br /> Collaborative </span> <br />
                        Approach
                    </h1>
                    <h2 className={styles.landingSubtext}>
                        Experience the Journey from Concept to Completion of<br />
                        House Designs and House Plans with Expert Workflow, <br />
                        <span className={styles.highlightSubtext} style={getHighlightStyle()}> Transforming Your Vision Step by Step </span> and Crafting <br /> and Your Amazing Dream Home.
                    </h2>
                </div>

                <div className={styles.landingOptions}>
                    <LandingCarousel onSelect={handleOptionSelect} />
                </div>
            </div>
        </div>
    );
};