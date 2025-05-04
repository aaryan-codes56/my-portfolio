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
    <div className='my-work'>
      <div className="my-work-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="j=" />
      </div>
      <div className='project-list'>
        <div className="project-item">
          <img src={project1_img} alt="" className='p-img'/>
          <h2 className='p-title'>Project Name</h2>
          <p className='p-descritpion'>Project description</p>
         </div>
         <div className="project-item">
          <img src={project2_img} alt="" className='p-img'/>
          <h2 className='p-title'>Project Name</h2>
          <p className='p-descritpion'>Project description</p>
         </div>
         <div className="project-item">
          <img src={project3_img} alt="" className='p-img'/>
          <h2 className='p-title'>Project Name</h2>
          <p className='p-descritpion'>Project description</p>
         </div>
         <div className="project-item">
          <img src={project4_img} alt="" className='p-img'/>
          <h2 className='p-title'>Project Name</h2>
          <p className='p-descritpion'>Project description</p>
         </div>
        
      </div>
       <div className="my-work-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
       </div>
    </div>
  )
}

export default Projects