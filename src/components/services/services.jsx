import React from 'react'
import './services.css'
import {BsCheckLg} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development Services</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Custom website and web application development using React.js and Next.js.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Responsive UI/UX design, ensuring cross-platform compatibility and user engagement.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Front-end optimization for performance and SEO.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Backend & Database Solutions</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>ASP.NET Core backend development for robust server-side logic.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Database design and management with SQL, ensuring data integrity and efficient access.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Implementing secure RESTful APIs for seamless frontend-backend integration.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Project Management & Strategy:</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Analyzing business requirements to deliver tailored IT solutions.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Agile project management, from conceptualization to deployment.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Strategic planning for system architecture and long-term IT infrastructure.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services