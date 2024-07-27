import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TrashIcon from './icons/TrashIcon';
import EditIcon from './icons/EditIcon';
import UncompletedIcon from './icons/UncompletedIcon';
import CompletedIcon from './icons/CompletedIcon';

function TodoTable({ todoData }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">To Do</th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {todoData.map((d, i) => (
          <tr key={i}>
            <th scope="row">
              <div style={{ marginTop: "6px" }}>
                <span title={d.todo === "uncompleted" ? 'Uncompleted' : 'Completed'} className={d.todo === "uncompleted" ? 'uncompleted' : 'completed'}>
                  {d.todo === "uncompleted" ? <UncompletedIcon /> : <CompletedIcon />}
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
              <button className="btn btn-warning" style={{ marginRight: 10 }} title='Edit' type="submit">
                <EditIcon />
              </button>
              <button className="btn btn-danger" title='Delete' type="submit">
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
