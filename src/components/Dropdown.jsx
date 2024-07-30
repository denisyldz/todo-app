import React from 'react';

function Dropdown({ completed, setCompleted }) {
  return (
    <select
      id="todos"
      className="form-select"
      value={completed ? "completed" : "uncompleted"}
      onChange={(e) => setCompleted(e?.target?.value === "completed")}
    >
      <option value="uncompleted">Uncompleted</option>
      <option value="completed">Completed</option>
    </select>
  );
}

export default Dropdown;
