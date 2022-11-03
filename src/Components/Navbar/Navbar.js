import React from 'react'
import './Navbar.css'
import { Logo, socialIcons } from './NavbarComponents'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-icon-container'>
            {socialIcons.map((icon=><a className='nav-icon' href='#'>
                {icon}
            </a>))}
        </div>
        <div className='logo-container'>
            {Logo}
        </div>
    </div>
  )
}

export default Navbar