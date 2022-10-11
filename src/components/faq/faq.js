import React, { useEffect } from 'react'
import { MdOutlineLibraryBooks } from 'react-icons/md'
import './faq.css'
import { questions } from './data.js'
import Question from './Question.js'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Faq = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <section id='faq'>
      <div className='container faq'>
        <div className='faq-title' data-aos="fade-up">
          <MdOutlineLibraryBooks color='orangered' size={30} />
          <h2>Häufig gestellte Fragen</h2>
        </div>

        <div className='questions'>
          {
            questions.map(item => 
            <Question 
            key={item.id}
            title={item.title}
            answer={item.answer}
            id={item.id}
            />
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Faq
