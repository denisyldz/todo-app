import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';

function Form({ todoData, onSave, clearForm, setClearForm }) {
  const [title, setTitle] = useState(todoData?.title || '');
  const [description, setDescription] = useState(todoData?.description || '');
  const [completed, setCompleted] = useState(todoData?.completed || false);

  useEffect(() => {
    if (todoData) {
      setTitle(todoData.title || '');
      setDescription(todoData.description || '');
      setCompleted(todoData.completed || false);
    } else if (clearForm) {
      setTitle('');
      setDescription('');
      setCompleted(false);
      setClearForm(false);
    }
  }, [todoData, clearForm, setClearForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...todoData, title, description, completed });
  };

  return (
    <>

      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            placeholder='Enter Title'
            value={title}
            onChange={(e) => setTitle(e?.target?.value)}
            className='form-control'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            value={description}
            onChange={(e) => setDescription(e?.target?.value)}
            style={{ maxHeight: 90 }}
            placeholder='Enter Description'
            className='form-control'
          />
        </div>
        <Dropdown completed={completed} setCompleted={setCompleted} />
        <div className="modal-footer">
          <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={onSave}>Save changes</button>
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
            onClick={() => {
              setClearForm(true)
            }}
          >Close</button>
        </div>
      </form>
    </>
  );
}

export default Form;
