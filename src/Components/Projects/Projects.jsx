import React from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import arrow_icon from '../../assets/arrow_icon.svg'
import project1_img from '../../assets/project_1.png'
import project2_img from '../../assets/project_2.png'
import project3_img from '../../assets/project_3.png'
import project4_img from '../../assets/project_4.png'
import project5_img from '../../assets/project_5.png'


const Projects = () => {
  return (
    <div id="projects" className='my-work'>
      <div className="my-work-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className='project-list'>


        <div className="project-item">
          <img src={project1_img} alt="" className='p-img'/>
          <h2 className='p-title'>REX - AI Chat Bot</h2>
          <p className='p-descritpion'>
          A responsive AI chatbot using HTML, CSS, JavaScript, and the Gemini API, demonstrating AI integration and frontend expertise through real-time, interactive user experiences.
          </p>
          <div className='project-btns'>
          <button className='code-btn'><a href='https://github.com/aaryan-codes56/ai-chatbot' className='source-link'>View Code</a></button>
          <button className='demo-btn'><a href='https://aaryan-codes56.github.io/ai-chatbot/' className='source-link'>View Project</a></button>
         </div>
         </div>


         <div className="project-item">
          <img src={project2_img} alt="" className='p-img'/>
          <h2 className='p-title'>SOL Coffee</h2>
          <p className='p-descritpion'>
          A responsive coffee shop website using HTML, CSS, and JavaScript, showcasing strong frontend skills through modern UI and seamless cross-device responsiveness.
          </p>
          <div className='project-btns'>
          <button className='code-btn'><a href='https://github.com/aaryan-codes56/SOL-coffee' className='source-link'>View Code</a></button>
          <button className='demo-btn'><a href='https://aaryan-codes56.github.io/SOL-coffee/' className='source-link'>View Project</a></button>
          </div>
         </div>


         <div className="project-item">
          <img src={project3_img} alt="" className='p-img'/>
          <h2 className='p-title'>CalcX - A Smart Calculator</h2>
          <p className='p-descritpion'>
           A responsive smart calculator using HTML, CSS, and JavaScript, highlighting frontend skills through dynamic theming, intuitive UX, and error-resistant performance.
          </p>
          <div className='project-btns'>
          <button className='code-btn'><a href='https://github.com/aaryan-codes56/CalcX' className='source-link'>View Code</a></button>
          <button className='demo-btn'><a href='https://aaryan-codes56.github.io/CalcX/' className='source-link'>View Project</a></button>
          </div>
         </div>


         <div className="project-item">
          <img src={project4_img} alt="" className='p-img'/>
          <h2 className='p-title'>BGgone - Image Background Remover</h2>
          <p className='p-descritpion'>
           A responsive web tool using HTML, CSS, JavaScript, and the Remove.bg API to enable precise, instant background removal with a clean, intuitive UI and seamless cross-device performance.
          </p>
          <div className='project-btns'>
          <button className='code-btn'><a href='https://github.com/aaryan-codes56/image-bg-remover' className='source-link'>View Code</a></button>
          <button className='demo-btn'><a href='https://aaryan-codes56.github.io/image-bg-remover/' className='source-link'>View Project</a></button>
          </div>
         </div>


         <div className="project-item">
          <img src={project5_img} alt="" className='p-img'/>
          <h2 className='p-title'>Amara Home Solutions</h2>
          <p className='p-descritpion'>
          Amara is a responsive web app built with HTML, CSS, JavaScript, and React.js that helps users find and book trusted home service providers with real-time data using APIs, making service discovery and booking easy and reliable across all devices.
          </p>
          <div className='project-btns'>
          <button className='code-btn'><a href='https://github.com/aaryan-codes56/amara-home-service.git' className='source-link'>View Code</a></button>
          <button className='demo-btn'><a href='#' className='source-link'>View Project</a></button>
          </div>
         </div>
        
        
      </div>
       <div className="my-work-showmore">
        <p><a href='https://github.com/aaryan-codes56' className='more-link'>Show More</a></p>
        <img src={arrow_icon} alt="" />
       </div>
    </div>
  )
}

export default Projects