import React from 'react'
import './about.css'
import ME from '../../assets/profile-second.png'
import {TbAward} from 'react-icons/tb'
import {FiUsers} from 'react-icons/fi'
import {BsFolderCheck} from 'react-icons/bs'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <TbAward className='about__icon' />
              <h5>Experience</h5>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
            </article>
            <article className="about__card">
              <BsFolderCheck className='about__icon' />
              <h5>Projects</h5>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, consequatur minima quae,
            suscipit delectus corporis dolore voluptate, provident aliquid consectetur eveniet. 
            Doloremque eveniet quia alias eius exercitationem nam consequatur repudiandae!
          </p>
          <a href="#contact" className='btn btn-primary'>Contact</a>
        </div>
      </div>
    </section>
  )
}

export default About