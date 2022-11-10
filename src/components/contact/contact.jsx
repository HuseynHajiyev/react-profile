import React from 'react'
import './contact.css'
import {useState} from 'react';

import {MdEmail} from 'react-icons/md' 
import {SiSlack} from 'react-icons/si'
import {SiWhatsapp} from 'react-icons/si'
import {BsCheckCircleFill} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { wait } from '@testing-library/user-event/dist/utils';

const Contact = () => {
  const form = useRef();
  const [visibility, setVisibility] = useState("hidden");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e21y8qt', 'template_en1mrff', form.current, '_dTkvzmiLyHpTIg-n');

    e.target.reset()
    setVisibility("")
    console.log("yeho")
    setTimeout(() => {setVisibility("hidden")}, 2000)
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <a href="mailto:hhajiyev@hotmail.com" className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>hhajiyev@hotmail.com</h5>
          </a>
          <a href="https://lewagon-alumni.slack.com/archives/D03CE28UZ5E" target="_blank" className="contact__option">
            <SiSlack className='contact__option-icon'/>
            <h4>Slack</h4>
            <h5>Huseyn Hajiyev</h5>
          </a>
          <a href="https://api.whatsapp.com/send?phone=994513888188" target='_blank' className="contact__option">
            <SiWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+994513888188</h5>
          </a>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' autoComplete="off" required/>
          <input type="email" name="email" placeholder='your@email.com'autoComplete="off" required/>
          <input type="text" name="subject" placeholder='Subject' autoComplete="off" required/>
          <textarea name="message" rows="7 " placeholder='Message Here' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      <p id='success' className={visibility}><BsCheckCircleFill id='success-icon' />Message sent successfully</p>
    </section>
  )
}

export default Contact
