import React from 'react'
import '../../ToDoList/ToDoList.css'
import { HiPlus } from 'react-icons/hi'

const Form = ({ todo, change, submit, error }) => {
  return (
    <form onSubmit={submit} className='todo-form'>
      <button type='submit' className='todo-form-btn'><HiPlus /></button>
      <div className='todo-form-input'>
        <input type='text' className='todo-form-input' placeholder='(mind. 1 Zeichen)'
          value={todo}
          onChange={change}
        />
        {
          error && <small className='todo-error'>{error}</small>
        }
      </div>
    </form>
  )
}

export default Form