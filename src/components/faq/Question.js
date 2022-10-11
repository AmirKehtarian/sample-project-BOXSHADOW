import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useState } from 'react'

const Question = ({id, title, answer}) => {

    const [showAnswer, setShowAnswer] = useState(false);

    const clickHandler = () => {
      setShowAnswer(!showAnswer)
    }

  return (
        <div className='container question' >
          <div className='question-title'  >
            <h2>{title}</h2>
            <button onClick={clickHandler} >
              { 
               showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />
              }
            </button>
          </div>
          <div className={showAnswer ? 'question-answer' : 'question-answer-hide'}>
            {
              <p className={'c'+ id}>{answer}</p>
            }
            
          </div>
        </div>
      )
}

export default Question