import React, { useState } from 'react';
import TodoTable from '../components/TodoTable';
import AddTodoButton from '../components/AddTodoButton';
import useTodos from '../hooks/useTodos';
import Modal from '../components/Modal';
import Form from '../components/Form';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

function Home() {
  const todoData = useTodos();
  const [selectedTodo, setSelectedTodo] = useState(null);

  const handleSave = async (updatedTodo) => {
    if (!updatedTodo?.id) return;

    try {
      await updateDoc(doc(db, 'todos', updatedTodo?.id), {
        title: updatedTodo?.title,
        description: updatedTodo?.description,
        completed: updatedTodo?.completed,
      });
      setSelectedTodo(null); // Close modal
    } catch (error) {
      console.error("Error updating todo: ", error);
    }
  };

  return (
    <div>
      <div className='mb-5'>
        <AddTodoButton />
      </div>
      <TodoTable todoData={todoData} setSelectedTodo={setSelectedTodo} />
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
