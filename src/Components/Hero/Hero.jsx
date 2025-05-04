import React from 'react'
import "./Hero.css"
import profile_img from '../../assets/profile.png'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" className='pro-img' />
        <h1><span>I'm Aaryan Krishna</span>, Frontend Developer and Graphic Designer.</h1>
        <p>I’m a Frontend Developer on my journey to becoming a Full Stack developer. I also work as a video editor and graphic designer, creating visually engaging and meaningful digital content.</p>
        <div className="hero-action">
            <div className="hero-connect">
              <a className='anchor-link1' href="#contact">Get in touch</a>
            </div>
            <div className="hero-projects">
              <a className='anchor-link1' href="#projects">View Projects</a>
            </div>
        </div>
    </div>
  )
}

export default Hero