import React from 'react'
import './footer.css'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedinIn, FaXing } from 'react-icons/fa'
import { BsMouse } from 'react-icons/bs'

const Footer = () => {
  return (
    <section id='footer'>
      <div className='container footer'>
      <div className='contact'>
          <h4>kann ich dir helfen</h4>
          <div className='footer-contact'>
            <a href='mailto:a.kehtarian@gmail.com' target='_blank'><FaEnvelope />&nbsp; a.kehtarian@gmail.com</a>
            <a href='tel:+4917642992020' target='_blank'><FaPhoneAlt />&nbsp; (+49) 176 4299 2020</a>
            <a href='https://www.linkedin.com/in/amir-kehtarian-ba8ab559/' target='_blank'><FaLinkedinIn />&nbsp; amir kehtarian</a>
            <a href='https://www.xing.com/profile/Amir_Kehtarian/cv' target='_blank'><FaXing />&nbsp; amir kehtarian</a>
            <a href='https://www.google.com/maps/place/Bindfeldweg+36,+22459+Hamburg/@53.6223391,9.9475509,17z/data=!4m13!1m7!3m6!1s0x47b1863229c7a993:0xa584af437da4e1e9!2sBindfeldweg+36,+22459+Hamburg!3b1!8m2!3d53.6223391!4d9.9475509!3m4!1s0x47b1863229c7a993:0xa584af437da4e1e9!8m2!3d53.6223391!4d9.9475509' target='_blanck'><FaMapMarkerAlt />&nbsp; Bindfeldweg 36, 22459, Hamburg</a>
          </div>
        </div>
        <div className='support'>
        <h4>Nützliche Links</h4>
          <div className='footer-links'>
            <a href='https://developer.mozilla.org/en-US/' target='_blank'>&bull; MDN - Entwickler</a>
            <a href='https://www.w3.org/' target='_blank'>&bull; W3C</a>
            <a href='https://www.jhu.edu/'target='_blank' >&bull; Johns Hopkins Universität</a>
            <a href='https://www.w3schools.com/' target='_blank'>&bull; W3School</a>
            <a href='https://www.coursera.org/' target='_blank'>&bull; Coursera</a>
          </div>
          <div className='floating'>
            <a href='#navbar' className='top'>
            <BsMouse />
            </a>
          </div>
          
        </div>
            
      </div>
      <div className='copy-right'>
          <p>&copy; 2022 amir<span>K</span>ehtarian, all rights reserved</p>
      </div>

    </section>
  )
}

export default Footer