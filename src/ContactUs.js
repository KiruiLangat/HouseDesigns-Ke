import './ContactUs.css'

import React, {useState} from 'react'
import Header from './Header'
import '@fontsource/poppins'
import Footer from './Footer'
import Calendly from './Calendly' 
import locationicon from './images/locationicon.svg'
import callicon from './images/callicon.svg'
import emailicon from './images/emailicon.svg'
import whatsappicon from './images/whatsappicon.svg'

const style = {
  fontFamily: 'Poppins'
}

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Here you would typically send the form data to your server
  };

  return (
    <div className='contact-container' style={style}>
      <div className='contact-header'>
        <Header />
      </div>
      <div className='contact-welcome'>
        <h1>Get in touch with us...</h1>
        <p>Reach out to us and let's create something extraordinary together</p>
      </div>
      <div className='contact-us'>
        <div className='appointment'>
          <h2>Book An Appointment</h2>
          <Calendly />
        </div>
        <div className='contact-info'>
          <div className='our-contacts'>
            <h2>Reach Us Through</h2>
            <div className='location'>
              <img src = {locationicon} alt='location-icon'/>
              <p>8906 - 00300 Nairobi Kenya</p>
            </div>
            <div className='call'>
              <img src = {callicon} alt='mobile-icon'/>
              <p>Office Line: +254 710 478 088</p>
            </div>
            <div className='email'>
              <img src = {emailicon} alt='email-icon'/>
              <p>housedesignske@gmail.com</p>
            </div>
            <div className='whatsapp'>
              <img src = {whatsappicon} alt='whatsapp-icon' />
              <a href="https://wa.me/+254710478088" target="_blank" rel="noopener noreferrer">Chat with us on WhatsApp </a>
            </div>
          </div>
          <div className='form'>
            <h2>Start the conversation</h2>
            <form onSubmit={handleSubmit}>
              <h3>Name:</h3>
              <input type='text' name='name' placeholder='' value={form.name} onChange={handleChange} required />
              <h3>Email Address:</h3>
              <input type='email' name='email' placeholder='' value={form.email} onChange={handleChange} required />
              <h3>Phone Number:</h3>
              <input type='number' name='number' placeholder='' value={form.number} onChange={handleChange} required />
              <h3>Message:</h3>
              <textarea name='message' placeholder='Leave a message' value={form.message} onChange={handleChange} required />
              <button type='submit'>Submit</button>
          </form>
          </div>
           

          
          
        </div>
      </div>
        
      
      <Footer />
      

    </div>
  )
}
