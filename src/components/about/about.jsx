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
          <div className='about__information'>
            <ul>
              <li><strong>8+ years </strong> in web development & IT analysis</li>
              <li>Front-end specialist: <strong>React.js</strong>, TypeScript, Material UI</li>
              <li>Backend savvy: ASP.NET Core, SQL databases</li>
              <li><strong>Strategic project management</strong> & ERP solutions</li>
              <li>Proven track record in <strong> data warehousing </strong>& normalization</li>
              <li>Innovative problem-solver, continuous learner</li>
            </ul>
          </div>
          <a href="#contact" className='btn btn-primary'>Contact</a>
        </div>
      </div>
    </section>
  )
}

export default About