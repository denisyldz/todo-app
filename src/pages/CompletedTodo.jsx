import React, { useState } from 'react'
import TodoTable from '../components/TodoTable'

function CompletedTodo() {
  const [todoData, setTodoData] = useState([
    {
      todo: "completed",
      title: "Homework",
      description: "Do math homework"
    }
  ])
  return (
    <div>
      <TodoTable todoData={todoData} />
    </div>
  )
}

export default CompletedTodo