import React from 'react'
import "./Navbar.css"
import logo from '../../assets/logo-wb.png'

const Navbar = () => {


  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className="nav-menu">
            <li><a className='anchor-link' href="#home">Home</a></li>
            <li><a className='anchor-link' href="#about">About</a></li>
            <li><a className='anchor-link' href="#projects">Projects</a></li>
            <li><a className='anchor-link' href="#contact">Contact</a></li>
        </ul>
        <div className="nav-connect">
          <a className='connect-link' href="https://www.linkedin.com/in/aaryan-krishna-840217317">Connect with me</a>
        </div>
    </div>
  )
}

export default Navbar