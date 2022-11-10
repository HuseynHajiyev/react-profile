import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/KanakuUpper.png'
import IMG2 from '../../assets/rentACar.png'
import IMG3 from '../../assets/cLang.png'
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
    title: "Kanaku: A Tour Guide RoR/StimulusJs",
    github: "https://github.com/HuseynHajiyev/kanaku",
    demo: "https://troopl.com/hhajiyev/kanaku"
  },
  {
    id: 2,
    image: IMG2,
    title: "Kanaku RentACar RoR/StimulusJs",
    github: "https://github.com/HuseynHajiyev/rent-a-car",
    demo: "https://troopl.com/hhajiyev/rent-a-car"
  },
  {
    id: 3,
    image: IMG3,
    title: "A programming course completed in C",
    github: "https://github.com/HuseynHajiyev/c-programming",
    demo: "#"
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
    autoplay: true
  };
  return (
    <section id='portfolio' className='panorama-slider'>
      <h5>My experience</h5>
      <h2>Portfolio</h2>

      <Swiper  {...swiperParameters} className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}, index) => {
            return(
              <SwiperSlide className="portfolio__item" key={index}>
                <div className="portfolio__item-img">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target="_blank">Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank">Demo</a>
                </div>
              </SwiperSlide>
            )
          }) 
        }
      </Swiper>
    </section>
  )
}

export default Portfolio