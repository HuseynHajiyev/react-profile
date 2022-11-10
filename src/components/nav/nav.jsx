import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineFileDone} from 'react-icons/ai'
import {MdOutlineHomeRepairService} from 'react-icons/md'
import {AiOutlineContacts} from 'react-icons/ai'
import {VscFolderActive} from 'react-icons/vsc'
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav>
      <Link to="/" spy={true} smooth={false} offset={0} duration={200} 
      ><FaHome /></Link>
      <Link to="about" spy={true} smooth={false} offset={0} duration={200} 
      ><AiOutlineUser /></Link>
      <Link to="experience" spy={true} smooth={false} offset={0} duration={200} 
      ><AiOutlineFileDone /></Link>
      <Link to="services" spy={true} smooth={false} offset={0} duration={200} 
      ><MdOutlineHomeRepairService /></Link>
      <Link to="portfolio" spy={true} smooth={false} offset={0} duration={200}
      ><VscFolderActive /></Link>
      <Link to="contact" spy={true} smooth={false} offset={0} duration={200}
      ><AiOutlineContacts /></Link>
    </nav>
  )
}

export default Nav