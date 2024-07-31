import React from 'react';
import TrashIcon from './icons/TrashIcon';
import EditIcon from './icons/EditIcon';
import UncompletedIcon from './icons/UncompletedIcon';
import CompletedIcon from './icons/CompletedIcon';

function TodoTable({ todoData, setSelectedTodo, handleDelete }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Status</th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Created At</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {todoData.map((todo) => (
          <tr key={todo.id}>
            <th scope="row">
              <div  style={{ marginTop: "6px" }}>
                <span title={todo.completed ? 'Completed' : 'Uncompleted'} className={todo.completed ? 'completed' : 'uncompleted'}>
                  {todo.completed ? <CompletedIcon /> : <UncompletedIcon />}
                </span>
              </div>
            </th>
            <td>{todo.title}</td>
            <td>{todo.description}</td>
            <td>{todo.formattedDate}</td>
            <td>
              <button
                className="btn btn-warning"
                data-bs-toggle="modal"
                style={{ marginRight: 10 }}
                data-bs-target="#editModal"
                title='Edit'
                onClick={() => setSelectedTodo(todo)}
              >
                <EditIcon />
              </button>
              <button onClick={() => handleDelete(todo.id)} className="btn btn-danger" title='Delete'>
                <TrashIcon />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TodoTable;
