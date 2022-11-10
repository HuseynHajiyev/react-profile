import React from 'react'
import './footer.css'

import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="" className='footer__logo'>Huseyn Hajiyev</a>
      <ul className="permalinks">
        <a href="#" >Home</a>
        <a href="#about" >About</a>
        <a href="#experience">Experience</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </ul>
      <div className="footer__socials">
        <a href="https://www.instagram.com/hajiyev_huseyn/" target="_blank"><BsInstagram /></a>
        <a href="https://www.facebook.com/huseyn.hajiyev.1/" target="_blank"><BsFacebook /></a>
        <a href="https://twitter.com/hajiyev_huseyn" target="_blank"><BsTwitter /></a>
      </div>
    </footer>
  )
}

export default Footer