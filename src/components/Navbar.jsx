import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light mb-5 app-theme-color">
      <div className="container">
        <a className="navbar-brand" href="/home">ToDo App</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Todos
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/completed">Completed</a></li>
                <li><a className="dropdown-item" href="/uncompleted">Uncompleted</a></li>
              </ul>
            </li>

          </ul>
          <li class="nav-item d-flex">
            <a class="nav-link" href="#">Logout</a>
          </li>
      
        </div>
      </div>
    </nav>
  )
}

export default Navbar