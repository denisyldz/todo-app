import React, { useState } from 'react'
import TodoTable from '../components/TodoTable'

function UncompletedTodo() {
  const [todoData, setTodoData] = useState([
    {
      todo: "uncompleted",
      title: "Homework",
      description: "Do science homework"
    },
    {
      todo: "uncompleted",
      title: "Cleanup",
      description: "Wash the dishes"
    }
  ])
  return (
    <div>
      <TodoTable todoData={todoData} />
    </div>
  )
}

export default UncompletedTodo