import React, { useState } from 'react'
import TodoTable from '../components/TodoTable'
import AddTodoButton from '../components/AddTodoButton'

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

  const handleSave = () => {
    console.log('Save button clicked');
  };

  const handleClose = () => {
    console.log('Close button clicked');
  };

  return (
    <div>
      <div className='mb-5'>
        <AddTodoButton handleSave={handleSave} handleClose={handleClose} />
      </div>
      <TodoTable todoData={todoData} />
    </div>
  )
}

export default Home