import React, { useState } from 'react';
import TodoTable from '../components/TodoTable';
import AddTodoButton from '../components/AddTodoButton';
import Modal from '../components/Modal';
import Form from '../components/Form';
import useTodoActions from '../hooks/useTodoActions';

function Home() {
  const { todos, clearForm, setClearForm, handleSave, createTodo, handleDelete } = useTodoActions();
  const [selectedTodo, setSelectedTodo] = useState(null);

  return (
    <div>
      <div className='mb-5'>
        <AddTodoButton clearForm={clearForm} handleSave={createTodo} setClearForm={setClearForm} />
      </div>
      <TodoTable handleDelete={handleDelete} todoData={todos} setSelectedTodo={setSelectedTodo} />
      {selectedTodo && (
        <Modal
          id="editModal"
          title="Edit To Do"
          body={<Form todoData={selectedTodo} onSave={handleSave} />}
        />
      )}
    </div>
  );
}

export default Home;
