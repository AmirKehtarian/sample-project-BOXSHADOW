import React from 'react'
import '../../ToDoList/ToDoList.css'
import ListItem from './ListItem'


const Lists = ({ del, done, todos }) => {

  if(todos.length <= 0) {
    return (
      <div className='list todo-task'>
        <h2>noch keine Aufgabe</h2>
      </div>
    )
  }
  return (
      <ul className='list-group'>
        {
          todos && todos.map((item) => {
            return (
              <ListItem
                key={item.id}
                id={item.id}
                title={item.title}
                delHandler={del}
                doneHandler={done}
                doneIcon={item.doneIcon}
              />
            )
          })

        }
      </ul>
  )
}

export default Lists