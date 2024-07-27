import React from 'react'

function Dropdown() {
  return (
    <select id="todos" className="form-select form-select">
      <option value="" selected disabled>-</option>
      <option value="completed">Completed</option>
      <option value="uncompleted">Uncompleted</option>
    </select>

  )
}

export default Dropdown