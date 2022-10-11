import React from 'react'
import '../../ToDoList/ToDoList.css'
import { MdChecklistRtl } from 'react-icons/md'


function Header() {
  return (
    <div className='todo-header'>
      <div><MdChecklistRtl size={25} /></div>
      <h2>TO DO LIST</h2>
    </div>
  )
}

export default Header