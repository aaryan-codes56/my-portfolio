import React from 'react'
import "./Hero.css"
import profile_img from '../../assets/profile.png'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt=""/>
        <h1><span>I'm Aaryan Krishna</span>, frontend developer and video editor.</h1>
        <p>I am an aspiring full stack developer. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-projects">View Projects</div>
        </div>
    </div>
  )
}

export default Hero