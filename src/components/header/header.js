import React from 'react'
import { useEffect } from 'react'
import { BsMouse } from 'react-icons/bs'
import codingWithMe from '../../asset/images/img-4.png'
import resume from '../../asset/pdf/Lebenslauf.pdf'
import motivation from '../../asset/pdf/Motivation.pdf'
import './header.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Header = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <section id='header'>
      <div className='container header'>
        <div className='header-right' data-aos="fade-left">
            <h3>
              <span>das bin ich, amir<span id='k'>K</span>ehtarian</span>
              <span>, der das Web und die Technologie nicht nur lebt, sondern auch mit Leidenschaft und Herzblut dabei ist.</span>
            </h3>
            <p>für die Bekanntschaft mit mir klicken Sie auf die Schaltfläche unten</p>
            <div className='header-btn'>
              <a href={resume} target='_blank' className='btn btn-dark'>Lenenslauf</a>
              <a href={motivation} target='_blank' className='btn btn-light'>Wer bin ich?</a>
            </div>
        </div>
        <div className='header-left' data-aos="fade-right">
            <img src={codingWithMe} alt='photo-1'/>
        </div>
      </div>

      <div className='floating-icon'>
        <a href='#features'>
          <BsMouse color={'#fff'} size={25} className='mouse' />
        </a>
      </div>
    </section>
  )
}

export default Header