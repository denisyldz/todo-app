import React from 'react';
import TrashIcon from './icons/TrashIcon';
import EditIcon from './icons/EditIcon';
import UncompletedIcon from './icons/UncompletedIcon';
import CompletedIcon from './icons/CompletedIcon';

function TodoTable({ todoData, setSelectedTodo, handleDelete }) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">To Do</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Created At</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {todoData.map((d, i) => (
            <tr key={d.id}>
              <th scope="row">
                <div style={{ marginTop: "6px" }}>
                  <span title={d.completed ? 'Completed' : 'Uncompleted'} className={d.completed ? 'completed' : 'uncompleted'}>
                    {d.completed ? <CompletedIcon /> : <UncompletedIcon />}
                  </span>
                </div>
              </th>
              <td>
                <div className='mt-2'>
                  {d.title}
                </div>
              </td>
              <td>
                <div className='mt-2'>
                  {d.description}
                </div>
              </td>
              <td>
                <div className='mt-2'>
                  {d.formattedDate}
                </div>
              </td>
              <td>
                <button
                  className="btn btn-warning"
                  data-bs-toggle="modal"
                  data-bs-target="#editModal"
                  style={{ marginRight: 10 }}
                  title='Edit'
                  type="button"
                  onClick={() => {
                    setSelectedTodo(d);
                  }}
                >
                  <EditIcon />
                </button>
                <button onClick={() => handleDelete(d.id)} className="btn btn-danger" title='Delete'>
                  <TrashIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TodoTable;
