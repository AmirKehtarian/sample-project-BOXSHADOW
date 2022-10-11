import { React, useState, useEffect } from 'react'
import Layout from './compo/Layout'
import Header from './compo/Header'
import Lists from './compo/Lists'
import Form from './compo/Form'


const ToDoList = () => {

  const [error, setError] = useState(null)
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = JSON.parse(localStorage.getItem('todos'))

    if(getTodos) {
      setTodos(getTodos)
    }
  }, [])


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);


  const submitHandler = (e) => {
    e.preventDefault()

    if(todo.length < 1) {
      setError('Keine Aufgabe eingegeben (mind. 1 Zeichen)')
      return false
    }
    setTodos([...todos, {id: Date.now(), title: todo, doneIcon: true}])
    setError(null)
    setTodo('')
  }

  const delHandler = (id) => {
    if (window.confirm('Möchten Sie die Aufgabe wirklich löschen?')) {
      const updateTodos = todos.filter((item) => item.id !== id)
      setTodos(updateTodos)
    }
  }

  const doneHandler = (id) => {
    const index = todos.findIndex((item) => item.id === id)
    const duplicateTodos = [...todos]
    duplicateTodos[index] = {
      id: todos[index].id,
      title: todos[index].title,
      doneIcon: !todos[index].doneIcon
    }
    setTodos(duplicateTodos)
  }


  return (
    <Layout>
      <Header />
      <Form
        todo={todo}
        change={(e) => setTodo(e.target.value)}
        submit={submitHandler}
        error={error}
      />
      <Lists del={delHandler} done={doneHandler} todos={todos} />
      <div className='todo-copy-right'>
          <p>&copy; 2022 amir<span>K</span>ehtarian, all rights reserved</p>
      </div>
    </Layout>
  )
}

export default ToDoList