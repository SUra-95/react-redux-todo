import React from 'react'
import { useSelector } from 'react-redux'

function Todos() {
    const todos = useSelector(state => state.todos)
    console.log(todos);
  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </>
  )
}

export default Todos