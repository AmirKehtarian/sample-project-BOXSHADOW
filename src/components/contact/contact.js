import React, { useEffect } from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaXing } from 'react-icons/fa'
import './contact.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';


const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_6482cre', 'template_2kmh2x4', e.target, '8951XFJR5AYKbmAS4' )
    .then(result => {
      console.log(result)
      if (result.status === 200) {
        toast.success('Ihre Nachricht wurde erfolgreich gesendet', {
          position:'top-right', closeOnClick: true, className:'toast-message'
        })
      }
    }, (error) => {
      console.log(error)
      toast.error('Ihre Nachricht wurde nicht gesendet', {
        position:'top-right', closeOnClick: true, className:'toast-message'
      })
    })
  }

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <section id='contact'>
      <div className='container contact' data-aos="fade-up">
        
        <div className='container contact-form'>
          <div>
            <div>
              <h2 className=''>Zögern Sie nicht, jetzt kontaktieren</h2>
              <form className='contact-form' onSubmit={sendEmail}>
                <div className='contact-form-group'>
                  <input type='text' name='name'className='form-control' placeholder='Ihr Name' />
                  <input type='text' name='email'className='form-control' placeholder='example@email.com' />
                  <textarea name='message' className='form-control' placeholder='Ihre Nachricht'></textarea>
                </div>
                <div className='contact-form-group send'>
                  <input type='submit' className='btn-submit' value='SEND'/>
                </div>
              </form>
            </div>
          </div>
          <ToastContainer />
        </div>
        <div className='socials'>
          <div className='social-icon'>
              <a href='https://github.com/AmirKehtarian' target='_blank'><FaGithub /></a>
          </div>
          <div className='social-icon'>
              <a href='https://www.xing.com/profile/Amir_Kehtarian/cv' target='_blank'><FaXing /></a>
          </div>
          <div className='social-icon'>
          <a href='https://www.linkedin.com/in/amir-kehtarian-ba8ab559/' target='_blank'><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact