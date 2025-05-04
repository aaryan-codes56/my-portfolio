import React from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import arrow_icon from '../../assets/arrow_icon.svg'
import project1_img from '../../assets/project_1.png'
import project2_img from '../../assets/project_2.png'
import project3_img from '../../assets/project_3.png'
import project4_img from '../../assets/project_4.png'


const Projects = () => {
  return (
    <div id="projects" className='my-work'>
      <div className="my-work-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="j=" />
      </div>
      <div className='project-list'>
        <div className="project-item">
          <img src={project1_img} alt="" className='p-img'/>
          <h2 className='p-title'>REX - AI Chat Bot</h2>
          <p className='p-descritpion'>
          Built a responsive AI chatbot using HTML, CSS, JavaScript, and the Gemini API, demonstrating AI integration and frontend expertise through real-time, interactive user experiences.
          </p>
         </div>
         <div className="project-item">
          <img src={project2_img} alt="" className='p-img'/>
          <h2 className='p-title'>SOL Coffee</h2>
          <p className='p-descritpion'>
          Developed a responsive coffee shop website using HTML, CSS, and JavaScript, showcasing strong frontend skills through modern UI, smooth navigation, and seamless cross-device responsiveness.
          </p>
         </div>
         <div className="project-item">
          <img src={project3_img} alt="" className='p-img'/>
          <h2 className='p-title'>CalcX - A Smart Calculator</h2>
          <p className='p-descritpion'>
            Built a responsive smart calculator using HTML, CSS, and JavaScript, highlighting frontend skills through dynamic theming, intuitive UX, and error-resistant performance.
          </p>
         </div>
         <div className="project-item">
          <img src={project4_img} alt="" className='p-img'/>
          <h2 className='p-title'>BGgone - Image Background Remover</h2>
          <p className='p-descritpion'>
            Built a responsive web tool using HTML, CSS, JavaScript, and the Remove.bg API to enable precise, instant background removal with a clean, intuitive UI and seamless cross-device performance.
          </p>
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