import React, { useEffect } from 'react'
import { MdChecklistRtl } from 'react-icons/md'
import { FiCopy } from 'react-icons/fi'
import './projects.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Projects = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <section id='projects'>
      <div className='container projects' data-aos="fade-up">
        <div className='projects-title'>
          <h2>Beispiel-Projekte</h2>
          <p>Bitte klicken Sie auf die Buttons</p>
        </div>
        <div className='projects-names'>
          <a href='/Sample-Project-todolist' target='_blank'>
            <div className='projects-name'>
              <MdChecklistRtl size={25} />
              <p>To Do List</p>
            </div>
          </a>
          <a href='/Sample-Project-boxshadow' target='_blank'>
            <div className='projects-name'>
              <FiCopy size={25} />
              <p>Box-Shadows</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects