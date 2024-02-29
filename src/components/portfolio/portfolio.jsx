import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/ParticiplePlus.png'
import IMG2 from '../../assets/KanakuUpper.png'
import IMG3 from '../../assets/food_city_az_logo.jpeg'
import IMG4 from '../../assets/AVF.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Keyboard, Pagination } from "swiper";
//Swiper CSS
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import "swiper/css/keyboard";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Participle+: An e-commerce React App - Developer",
    type: "Web Dev Public",
    github: "https://github.com/HuseynHajiyev/ProfileCommerce",
    demo: "https://participle-plus.vercel.app/"
  },
  {
    id: 2,
    image: IMG2,
    title: "Kanaku: A Tour Guide RoR App - Sr. Developer team of 4",
    type: "Web Dev Public",
    github: "https://github.com/HuseynHajiyev/kanaku",
    demo: "https://troopl.com/hhajiyev/kanaku"
  },
  {
    id: 3,
    image: IMG3,
    title: "Foodcity Agropark ERP system Deploymen - PM",
    type: "Project Management",
    demo: "https://www.foodcity.az/"
  },
  {
    id: 4,
    image: IMG4,
    title: "Azerbaijan Volleyball Federation ERP deployemt - PM",
    type: "Project Management",
    demo: "https://avf.az/az/home",
  },
]



const Portfolio = () => {
  const swiperParameters = {
    modules: [A11y, Autoplay, Keyboard, Navigation, Pagination],
    observer: true,
    watchSlidesProgress: true,
    threshold: 5,
    grabCursor: true,
    navigation: true,
    autoplay: { enabled: true },
    loop: true,
    observeParents: true,
    keyboard: { enabled: true },
    pagination: true,
  };
  return (
    <section id='portfolio' className='panorama-slider'>
      <h5>My experience</h5>
      <h2>Portfolio</h2>

      <Swiper  {...swiperParameters} className="container portfolio__container">
        {
          data.map(({id, image, title, github, type, demo}, index) => {
            return(
              <SwiperSlide className="portfolio__item" key={index}>
                <div className="portfolio__item-img">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                {type === "Project Management" ? (
                  <div className="portfolio__item-cta">
                    <a href={demo} className='btn btn-primary' target="_blank">Demo</a>
                  </div>
                ) : (
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target="_blank">Github</a>
                    <a href={demo} className='btn btn-primary' target="_blank">Demo</a>
                  </div>
                )}
              </SwiperSlide>
            )
          }) 
        }
      </Swiper>
    </section>
  )
}

export default Portfolio