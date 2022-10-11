import React from 'react'
import { useState } from 'react'
import './navbar.css'
import { SiAnaconda } from 'react-icons/si'
import { AiOutlineBars } from 'react-icons/ai'
import { RiCloseLine } from 'react-icons/ri'

const Navbar = () => {
  const [showIcon, setShowIcon] = useState(false);

   const toggleMenu = () => {
    setShowIcon(!showIcon)
  }

  return (
    <nav id='navbar' className='navbar container'>
      <div className='menu-icons' onClick={toggleMenu}>
        {
          showIcon ? 
          <RiCloseLine />
          : <AiOutlineBars />
        }
      </div>
        <div className='logo'>
          <SiAnaconda />
          <p className='logo-text'>amir<span>K</span>ehtarian</p>
        </div>
      
      <div className='menu'>
        <ul className='nav-links' id={ showIcon ? "show-links-mobile" : "show-links-mobile-hide" }>
          <li><a href='#header' >Startseite</a></li>
          <li><a href='#features'>Fähigkeiten</a></li>
          <li><a href='#contact'>Kontakt</a></li>
          <li><a href='#faq'>FAQ</a></li>
          <li><a href='#projects'className='btn btn-dark'>Projekt</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar