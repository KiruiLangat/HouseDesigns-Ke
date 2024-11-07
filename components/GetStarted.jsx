import React from 'react'
import Image from 'next/image'
import styles from '../assets/styles/GetStarted.module.css'
import '@fontsource/poppins'
import InteriorDesign from '../assets/images/interior-design.png'
import PMgt from './images/pmgt.png'
import Masterplanning from '../assets/images/masterplanningIcon.png'
import Architecture from '../assets/images/Architecture.png'
import sideBracket from '../assets/images/sideBracket.png'
import Link from 'next/link';

const style = {
    fontFamily: 'Poppins',
    }

export default function GetStarted() {
  return (
    <div className={styles.getStarted} style={style}>

        <div className={styles.getStartedBox1}>
            <div className={styles.sidebracket}>
                <Image src={sideBracket} alt='sideBracket'/>
            </div>
            <div className={styles.getStartedIntro}>
                <h1> Our Expertise </h1>
                <h2>View our services and let's get you started</h2>
                <Link href='/our-expertise'>
                    <div className={styles.getStartedCTA}>
                        <p>Get Started </p>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Arrow 7" d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0L0 9Z" fill="#ED7D31"/></svg>
                    </div>
                </Link>
            </div> 
        </div>

        <div className={styles.getStartedBox2}>
            <div className={styles.archBox}>
                <Image src={Architecture} alt='Architecture-Icon' className={styles.archIcon} />
                <h2>Architecture</h2>
                <div className={styles.line1}/>
                <p> Elevating spaces with innovative architectural designs </p>
            </div>
            <div className={styles.interiorBox}>
                <Image src={InteriorDesign} alt='Interior-Design-Icon' className={styles.interiorIcon}/>
                <h2>Interior Design</h2>
                <div className={styles.line2}/>
                <p>Creating environments that resonate with individual tastes</p>
            </div>
            <div className={styles.pmgtBox}>
                <Image src={PMgt} alt='Project-Management-Icon' className={styles.pmgtIcon}/>
                <h2>Project Management</h2>
                <div className={styles.line3}/>
                <p>Ensuring seamless execution from concept to completion</p>
            </div>
            <div className={styles.masterplanBox}>
                <Image src={Masterplanning} alt='MasterplanningIcon' className={styles.masterplanIcon}/>
                <h2>Masterplanning</h2>
                <div className={styles.line4}/>
                <p>Shaping the community with a forward-thinking approach</p>
            </div>
        </div>

        <div className={styles.mobileServices}>
            <h1>Our Expertise</h1>
            <div className={styles.servicesContainer}>
                <div className={styles.iconContainer}>
                    <Image src = {Architecture} alt="Architecture-Icon" className={styles.mobileIcon}/>
                    <h2>Architecture</h2>
                </div>
                <div className={styles.iconContainer}>
                    <Image src = {InteriorDesign} alt="Interior-Design-Icon" className={styles.mobileIcon}/>
                    <h2>Interior Design</h2>
                </div>
                <div className={styles.iconContainer}>
                    <Image src = {PMgt} alt="Project-Management-Icon" className={styles.mobileIcon}/>
                    <h2>Project Management</h2>
                </div>
                <div className={styles.iconContainer}>
                    <Image src = {Masterplanning} alt="MasterplanningIcon" className={styles.mobileIcon}/>                
                    <h2>Masterplanning</h2>
                </div>
            </div>
            
            <Link href='/our-expertise'>
                <div className={styles.mobileCTA}>
                    <p>Get Started</p>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Arrow 7" d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0L0 9Z" fill="#ED7D31"/></svg>
                </div>
            </Link> 
        </div>
    </div>
  );
}

