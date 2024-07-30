import React, { useState } from 'react';
import TodoTable from '../components/TodoTable';
import Modal from '../components/Modal';
import Form from '../components/Form';
import useTodoActions from '../hooks/useTodoActions';

function UncompletedTodo() {
  const { todos, handleSave, handleDelete } = useTodoActions({ completed: false });
  const [selectedTodo, setSelectedTodo] = useState(null);

  return (
    <div>
      <TodoTable todoData={todos} setSelectedTodo={setSelectedTodo} handleDelete={handleDelete} />
      {selectedTodo && (
        <Modal
          id="editModal"
          title="Edit To Do"
          body={<Form todoData={selectedTodo} onSave={handleSave} />}
        />
      )}
    </div>
  )
}

export default UncompletedTodo