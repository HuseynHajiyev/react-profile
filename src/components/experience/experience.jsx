import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Is My Skillset</h5>
      <h2>Experience Level</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Web Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML/CSS</h4>
                <h5> Sass, Tailwind, and Bootsrap</h5>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <h5> Javascript, Typescript, Redux, and Sagas</h5>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Ruby on Rails</h4>
                <h5>MVC, ActiveRecord, ERB syntax</h5>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>ASP.Net Core 7</h4>
                <h5> API, LINQ, EF Core, Identity Framework</h5>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Next Js</h4>
                <h5>Prisma, Typescript, Node, tRPC, SSR</h5>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>SQL</h4>
                <h5>Postgres, SQLite, MySQL, Database design, and Database normalization)</h5>
                <small className='text-light'>Skilled</small>
              </div>
            </article>
          </div> 
        </div>
        <div className="experience__backend">
          <h3>Project Management and Business Analysis</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Requirement Analysis</h4>
                <h5>Expert in translating business needs</h5>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Solution Design</h4>
                <h5>Strategic in IT solution development</h5>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Team Leadership</h4>
                <h5>Effective in guiding technical teams</h5>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Agile Methodologies</h4>
                <h5>Practiced in agile project management</h5>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Time & Budget Management</h4>
                <h5>Experienced</h5>
                <small className='text-light'>Proficient in project scheduling</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Stakeholder Communication</h4>
                <h5>Skilled in client and team engagement</h5>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience