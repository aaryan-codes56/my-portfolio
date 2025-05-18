import React, {useRef} from 'react'
import "./Navbar.css"
import logo from '../../assets/logo-wb.png'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const menuRef = useRef()

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }
  

  return (
    <div className='navbar'>
        <img src={logo} alt="" className='nav-logo'/>
        <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
            <li><a className='anchor-link' href="#about">About</a></li>
            <li><a className='anchor-link' href="#skills">Skills</a></li>
            <li><a className='anchor-link' href="#projects">Projects</a></li>
            <li><a className='anchor-link' href="#contact">Contact me</a></li>
        </ul>
        <div className="nav-connect">
          <a className='connect-link' href="https://www.linkedin.com/in/aaryan-krishna-840217317">Connect with me</a>
        </div>
    </div>
  )
}

export default Navbar