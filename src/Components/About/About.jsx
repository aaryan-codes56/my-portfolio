import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_image from '../../assets/about.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
      <h1>About Me</h1>
      <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={about_image} alt="" className='abt-img' />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Hi, I'm a passionate web developer with a knack for creating dynamic and responsive web applications. I love turning ideas into reality and am always eager to learn new technologies and improve my skills.</p>
            <p>With a strong foundation in HTML, CSS, and JavaScript, I have experience working with various frameworks and libraries such as React, Node.js, and Express. I enjoy collaborating with teams to deliver high-quality products that meet user needs.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"60%"}} /></div>
            <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}} /></div>
            <div className="about-skill"><p>Python</p><hr style={{width:"60%"}} /></div>
            <div className="about-skill"><p>Git & Github</p><hr style={{width:"55%"}} /></div>
          </div>
        </div>
      </div>
    </div>      
    
  )
}

export default About