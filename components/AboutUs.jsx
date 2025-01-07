import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../assets/styles/AboutUs.module.css'
import colorScheme from '../assets/images/colorScheme.svg'
import titleMarker from '../assets/images/Title-marker.svg'
import Workflow from '../assets/images/workflow.svg'
import mobileWorkflow from '../assets/images/mobileWorkflow.svg'
import simplicityIcon from '../assets/images/simplicityicon.svg'
import infiniteCaps from '../assets/images/posibilitiesicon.svg'
import resilienceicon from '../assets/images/resilianceicon.svg'
import Kelvin from '../assets/images/Kelvin.jpg'
import Jonathan from '../assets/images/Jonathan2.png'

export default function AboutUs() {
  return (
    <div className={styles.aboutusContainer}>
      <div className={styles.aboutUs}>Get to Know us!</div>
      <Image src={colorScheme} alt='colorScheme' className={styles.colorScheme} />
      <div className={styles.workflowTitle}>
        <div className={styles.ourWorkflow}>OUR WORKFLOW</div>
        <h2 className={styles.ourWorkflowMobile}>OUR WORKFLOW</h2>
        <Image src={titleMarker} alt='titleMarker' className={styles.titleMarker} />
      </div>
      <div>
        <Image src={Workflow} alt='Workflow' className={styles.workflow} />
      </div>
      <Image src={mobileWorkflow} alt='workflow' className={styles.mobileWorkflow} />
      <div className={styles.viewServices}>
        <Link href='/our-expertise'>
          <p>Explore our Services</p>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Arrow 7" d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0L0 9Z" fill="#ED7D31"/></svg>
        </Link>
      </div>
      <div className={styles.philosophy}>
        <div className={styles.ourPhilosophy}>OUR PHILOSOPHY</div>
        <h2 className={styles.ourPhilosophyMobile}>OUR PHILOSOPHY</h2>
        <Image src={titleMarker} alt='titleMarker' className={styles.titleMarker2} />
      </div>
      <div className={styles.philosophyTables}>
        <div className={styles.simplicityBox}>
          <h2>Simplicity</h2>
          <Image src={simplicityIcon} alt='simplicity-icon' className={styles.simplicityIcon} />
          <p>Our aim is to design buildings with an effortlessly simple aesthetic, achieved through a systematic work plan and methodology that simplifies the construction process into clear phases, ensuring a comprehensible and transparent experience for our clients</p>
        </div>
        <div className={styles.infiniteBox}>
          <h2>Infinite Capacities</h2>
          <Image src={infiniteCaps} alt='infinite-icon' className={styles.infiniteIcon} />
          <p>Unbound by the constraints of traditional and envisioning a perpetual loop of design possibilities, our commitment is to forge a practice that resonates with resilience and timelessness, delivering an elevated and captivating architectural experience</p>
        </div>
        <div className={styles.resilienceBox}>
          <h2>Resilience and Flexibility</h2>
          <Image src={resilienceicon} alt='resilience-icon' className={styles.resilienceIcon} />
          <p>We specialize in crafting timeless aesthetics, seamlessly integrating contemporary and site-specific technologies and materials. Our flexible design scope spans from mass production in master planning to the intricate detailing of furniture</p>
        </div>
      </div>
      <div className={styles.mobilePhilosophy}>
        <div className={styles.mobileSimplicity}>
          <Image src={simplicityIcon} alt='simplicity-icon' className={styles.mobileSimplicityIcon} />
          <div className={styles.mobileSimplicityTitle}>Simplicity</div>
        </div>
        <div className={styles.mobileInfinite}>
          <Image src={infiniteCaps} alt='infinite-icon' className={styles.mobileInfiniteIcon} />
          <div className={styles.mobileInfiniteTitle}>Infinite Capacities</div>
        </div>
        <div className={styles.mobileResilience}>
          <Image src={resilienceicon} alt='resilience-icon' className={styles.mobileResilienceIcon} />
          <div className={styles.mobileResilienceTitle}>Resilience & Flexibility</div>
        </div>
      </div>
      <h2 className={styles.ourTeamMobile}>OUR LEAD TEAM</h2>
      <div className={styles.teamTitleBox}>
        <div className={styles.ourTeam}>OUR LEAD TEAM</div>
        <Image src={titleMarker} alt='titleMarker4' className={styles.titleMarker4} />
      </div>
      <div className={styles.ourTeamBox}>
        <div className={styles.teamMembers}>
          <div className={styles.member1Box}>
            <div className={styles.memberImg}>
              <Image src={Kelvin} alt='Kelvin'  />
            </div>
            <h2 className={styles.member1Name}>Kelvin Maundu</h2>
            <h3 className={styles.member1Title}>Managing Director</h3>
          </div>
          <div className={styles.member2Box}>
            <div className={styles.memberImg}>
              <Image src={Jonathan} alt='Jonathan' width={'100px'} height={'200px'} />
            </div>
            <h2 className={styles.member2Name}>Jonathan Munyao</h2>
            <h3 className={styles.member2Title}>Design Director</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

