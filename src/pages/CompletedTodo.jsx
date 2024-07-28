import React from 'react'
import TodoTable from '../components/TodoTable'
import useTodos from '../hooks/useTodos'

function CompletedTodo() {
  const todoData = useTodos({ completed: true })

  return (
    <div>
      <TodoTable todoData={todoData} />
    </div>
  )
}

export default CompletedTodo