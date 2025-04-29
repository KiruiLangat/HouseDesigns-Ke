import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../assets/styles/GetInTouch.module.css';
import GetInTouchCarousel from '../components/getintouchCarousel';
import sideBracket from '../assets/images/sideBracket.png';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const style = {
    fontFamily: 'Poppins',
};

export default function GetInTouch() {
    return (
        <div className={styles.getintouchContainer} style={style}>
            <GetInTouchCarousel />
            <div className={styles.getintouchDetails}>
                <div className={styles.theDetails}>
                    <h1>Get your Dream House Today!</h1>
                    <div className={styles.getintouchLinesAndIcons}>
                        <div className={styles.topLine}></div>
                        <div className={styles.getintouchContactIcons}>
                            <div >
                                <WhatsAppIcon className={styles.getintouchWhatsappIcon}/>
                            </div>
                            <div >
                                <LocalPhoneIcon className={styles.getintouchPhoneIcon} />
                            </div>
                            <div >
                                <EmailIcon className={styles.getintouchEmailIcon} />
                            </div>
                        </div>
                        <div className={styles.bottomLine}></div>
                    </div>
                    <Link href='/contact-us'>
                        <div className={styles.getintouchCTA}>
                            <p>Get in touch</p>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="Arrow 7" d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0L0 9Z" fill="#ED7D31" />
                            </svg>
                        </div>
                    </Link>
                </div>
                <div className={styles.getintouchSideBracket}>
                    <Image src={sideBracket} alt='sideBracket' />
                </div>
            </div>
        </div>
    );
}
