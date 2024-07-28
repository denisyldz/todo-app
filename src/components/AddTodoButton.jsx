import React from 'react'
import AddIcon from './icons/AddIcon'
import Form from './Form'
import Modal from './Modal'

function AddTodoButton({ handleSave, handleClose }) {
  return (
    <>
      <button type="button" className="btn button" data-bs-toggle="modal" data-bs-target="#addModal">
        <AddIcon /> To Do
      </button>

      <Modal
        id="addModal"
        title="Add To Do"
        body={<Form />}
        onSave={handleSave}
        onClose={handleClose}
      />
    </>
  )
}

export default AddTodoButton