import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {GiRallyTheTroops} from 'react-icons/gi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/huseyn-hajiyev-akif/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/huseynHajiyev" target="_blank"><BsGithub /></a>
        <a href="https://troopl.com/hhajiyev" target="_blank"><GiRallyTheTroops /></a>
    </div>
  )
}

export default HeaderSocials