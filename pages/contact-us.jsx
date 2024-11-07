import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styles from '../assets/styles/ContactUs.module.css'
import Calendly from './Calendly'
import callicon from '../public/images/mobileSVG.svg'
import emailicon from '../public/images/emailSVG.svg'
import whatsappicon from '../public/images/whataspp-black-svg.svg'

const style = {
  fontFamily: 'Poppins'
}

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', number: '', message: '' });
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`/api/contact-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('HTTPS error' + response.status);
      }
      console.log('Navigating to submission page')
      router.push('/submission-page');
    } catch (error) {
      console.log('Form submission failed', error);
    }
  };

  return (
    <div className={styles.contactContainer} style={style}>
      <Head>
        <title>Contact Us</title>
        <meta name='title' content='Contact Us' />
        <meta name='description' content='Get in touch with us. Reach out to us and let us create something extraordinary together.' />
        <meta property='og:description' content='Get in touch with us. Reach out to us and let us create something extraordinary together' />
        <meta property='og:image' content='https://housedesigns.co.ke/projectMgmt.webp' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='600' />
        <meta property='og:url' content='https://housedesigns.co.ke/contact-us' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content='Contact Us' />
        <meta name='twitter:description' content='Get in touch with us. Reach out to us and let us create something extraordinary together' />
        <meta name='twitter:image' content='https://housedesigns.co.ke/projectMgmt.webp' />
        <meta name='twitter:image:width' content='1024' />
        <meta name='twitter:image:height' content='512' />
        <meta name='twitter:url' content='https://housedesigns.co.ke/contact-us' />
      </Head>
      <div className={styles.contactHeader}></div>
      <div className={styles.contactWelcome}>
        <h1>Get in touch with us...</h1>
        <p>Reach out to us and let's create something extraordinary together</p>
      </div>
      <div className={styles.contactUs}>
        <div className={styles.appointment}>
          <h2>Book An Appointment</h2>
          <Calendly />
        </div>
        <div className={styles.contactInfo}>
          <div className={styles.ourContacts}>
            <h2>How to reach us:</h2>
            <div className={styles.call}>
              <Image src={callicon} alt='mobile-icon' />
              <h3>Call us</h3>
              <p>+254 710 478 088</p>
            </div>
            <div className={styles.email}>
              <Image src={emailicon} alt='email-icon' />
              <h3>Email</h3>
              <p>housedesignske@gmail.com</p>
            </div>
            <div className={styles.whatsapp}>
              <Image src={whatsappicon} alt='whatsapp-icon' />
              <h3>WhatsApp</h3>
              <a href="https://wa.me/+254710478088" target="_blank" rel="noopener noreferrer">
                Chat with us on WhatsApp
              </a>
            </div>
          </div>
          <div className={styles.form}>
            <h2>Start the conversation</h2>
            <form onSubmit={handleSubmit}>
              <h3>*Name:</h3>
              <input type='text' name='name' placeholder='' value={form.name} onChange={handleChange} required />
              <h3>*Email Address:</h3>
              <input type='email' name='email' placeholder='' value={form.email} onChange={handleChange} required />
              <h3>*Phone Number:</h3>
              <input type='number' name='number' placeholder='' value={form.number} onChange={handleChange} required />
              <h3>*Message:</h3>
              <textarea name='message' placeholder='Leave a message' value={form.message} onChange={handleChange} required />
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
