import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import TodoTable from '../components/TodoTable'

function Home() {
  const [todoData, setTodoData] = useState([
    {
      todo: "completed",
      title: "Homework",
      description: "Do math homework"
    },
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

export default Home