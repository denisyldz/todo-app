import React from 'react'
import TodoTable from '../components/TodoTable'
import useTodos from '../hooks/useTodos'

function UncompletedTodo() {
  const todoData = useTodos({ completed: false })
  
  return (
    <div>
      <TodoTable todoData={todoData} />
    </div>
  )
}

export default UncompletedTodo