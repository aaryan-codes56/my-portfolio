import React from 'react'
import './Skills.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const Skills = () =>  {
    return (
      <div id="skills" className="skills-section">
        <div className="skills-title">
          <h1>Core Skills</h1>
          <img src={theme_pattern} alt="" />
        </div>
  
        <div className="skills-grid">
  
          <div className="skill-card">
            <p className="number">01</p>
            <h3><span className="highlight">Web</span> Development</h3>
            <p className="desc">I build modern, responsive websites using HTML, CSS, JavaScript, and React. From sleek landing pages to interactive platforms, I focus on user experience, performance, and clean, scalable code to bring digital ideas to life.</p>
          </div>
  
          <div className="skill-card">
            <p className="number">02</p>
            <h3><span className="highlight">Graphic</span> Design</h3>
            <p className="desc">I design visuals that stand out - posters, social media creatives, brand kits, and more. My design process blends aesthetics with function, ensuring every graphic communicates clearly and creatively.</p>
          </div>
  
          <div className="skill-card">
            <p className="number">03</p>
            <h3><span className="highlight">Video</span> Editing</h3>
            <p className="desc">I craft compelling visual stories through clean cuts, smooth transitions, motion graphics, and sound design. Whether it's reels, promos, vlogs, or event coverage, I focus on delivering videos that captivate and connect with the audience.</p>
          </div>
  
          <div className="skill-card">
            <p className="number">04</p>
            <h3><span className="highlight">Motion</span> Graphics</h3>
            <p className="desc">I bring static designs to life with smooth, engaging motion graphics that add depth and energy to your content. From animated logos and lower thirds to explainer videos and social media animations, I craft visuals that move with purpose and enhance your brand's story.</p>
          </div>
  
        </div>
      </div>
    );
}

export default Skills
