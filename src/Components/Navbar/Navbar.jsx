import React from 'react'
import "./Navbar.css"
import logo from '../../assets/logo-wb.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className="nav-menu">
            <li>Home</li>
            <li>About Me</li>
            <li>Skills</li>
            <li>Project</li>
            <li>Contact</li>
        </ul>
        <div className="nav-connect">Contact Me</div>
    </div>
  )
}

export default Navbar