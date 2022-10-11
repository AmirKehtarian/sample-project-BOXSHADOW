import React from 'react'
import { IoMdTrash } from 'react-icons/io'
import { BiCheck,BiUserCheck } from 'react-icons/bi'

const ListItem = ({id, doneIcon, title, delHandler, doneHandler}) => {
  return (
    <div>
        <li className={`todo-list-item ${doneIcon ? '' : 'todo-list-bg'}`}>
                { doneIcon ? title : <del>{title}</del> } 
                <div className='todo-list-button'>
                    <button className='todo-delete' onClick={() => delHandler(id)}><IoMdTrash /></button>
                    <button className='todo-confirm' onClick={() => doneHandler(id)}>
                      {
                        doneIcon ? <BiCheck /> : <BiUserCheck />

                      }
                    </button>
                </div>
        </li>
    </div>
  )
}

export default ListItem