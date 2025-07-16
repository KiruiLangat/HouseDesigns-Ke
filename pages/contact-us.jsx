/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styles from '../assets/styles/ContactUs.module.css'
import Calendly from '../components/Calendly'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

 

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
      router.push('/submission');
    } catch (error) {
      console.log('Form submission failed', error);
    }
  };

  return (
    <div className={styles.contactContainer} style={style}>
      <Head>
        <title>Contact Us | HouseDesigns</title>
        <meta name="description" content="Get in touch with HouseDesigns. Reach out and let us create something extraordinary together. Contact us for architecture, interior, and project management services in Kenya." />
        <meta property="og:title" content="Contact Us | HouseDesigns" />
        <meta property="og:description" content="Get in touch with HouseDesigns. Reach out and let us create something extraordinary together. Contact us for architecture, interior, and project management services in Kenya." />
        <meta property="og:image" content="https://housedesigns.co.ke/projectMgmt.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://housedesigns.co.ke/contact-us" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://housedesigns.co.ke/contact-us" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | HouseDesigns" />
        <meta name="twitter:description" content="Get in touch with HouseDesigns. Reach out and let us create something extraordinary together. Contact us for architecture, interior, and project management services in Kenya." />
        <meta name="twitter:image" content="https://housedesigns.co.ke/projectMgmt.webp" />
        <meta name="twitter:url" content="https://housedesigns.co.ke/contact-us" />
        {/* Organization JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "HouseDesigns",
              "url": "https://housedesigns.co.ke/",
              "logo": "https://housedesigns.co.ke/Logo.png",
              "sameAs": [
                "https://x.com/HouseDesignske/",
                "https://www.linkedin.com/company/house-designske/",
                "https://www.instagram.com/house_designske/"
              ]
            })
          }}
        />
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
              <LocalPhoneIcon />
              <h3>Call us</h3>
              <p>+254 710 478 088</p>
            </div>
            <div className={styles.email}>
              <EmailIcon />
              <h3>Email</h3>
              <p>housedesignske@gmail.com</p>
            </div>
            <div className={styles.whatsapp}>
              <WhatsAppIcon />
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
