import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/profile.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='/'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Huseyn Hajiyev</h1>
        <h5 className="text-light">Fullstack React, Next.js, and RoR developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header