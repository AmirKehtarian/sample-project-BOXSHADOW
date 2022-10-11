import React from 'react'
import { useEffect } from 'react'
import { BsFillBookmarkStarFill } from 'react-icons/bs'
import './features.css'
import mySkill from '../../asset/images/img-10.png'
import { FeaturesList } from './data.js'
import { BsHexagon } from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Features = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <section id='features'>
      <div className='container features'>
        <div className='title' data-aos="fade-up">
          <BsFillBookmarkStarFill color='orangered' size={30} />
          <h2>Kenntnisse & Fähigkeiten</h2>
          <p>Konzeption und Umsetzung verschiedener interaktiver Websites mit Benutzeroberfläche und professionellem Kundenerlebnis</p>
        </div>
        <div className='features-content'>
          <div className='features-left' data-aos="fade-left">
            <img src={mySkill} />
          </div>
          <div className='features-right' data-aos="fade-right">
              {
                FeaturesList.map(item => (
                  <div className='feature' key={item.id} >
                    <div className='features-icon' >
                      <BsHexagon color='#fc5412' size={40} />
                      <div className='inner-icon'>{item.icon}</div>
                    </div>
                    <div className='features-text'>
                      <h2>{item.heading}</h2>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))
              }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features