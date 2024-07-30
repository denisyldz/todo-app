import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

function Signup() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    lastName: "",
    firstName: ""
  });
  const [error, setError] = useState(null);

  const handleRegister = () => {
    setError(null);
    createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then(() => {
        navigate('/home');
      })
      .catch((err) => {
        setError(err.message);
      });
  }

  return (
    <div className='app-theme-color d-flex justify-content-center align-items-center vh-100'>
      <div className='form-background p-5 rounded border'>
        <h3 className='text-center mb-4'>Sign Up</h3>
        <div className='mb-4 d-flex justify-content gap-4'>
          <div>
            <label htmlFor='firstName'>First Name</label>
            <input
              value={userData.firstName}
              onChange={(e) => {
                setUserData({ ...userData, firstName: e.target.value })
              }}
              type='text'
              name='firstName'
              placeholder='Enter Name'
              className='form-control'
            />
          </div>
          <div>
            <label htmlFor='lastName'>Last Name</label>
            <input
              onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
              value={userData.lastName}
              type='text'
              name='lastName'
              placeholder='Enter Last Name'
              className='form-control'
            />
          </div>
        </div>
        <div className='mb-4'>
          <label htmlFor='email'>Email</label>
          <input
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            type='email'
            placeholder='Enter Email'
            className='form-control'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='password'>Password</label>
          <input
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            value={userData.password}
            type='password'
            placeholder='Enter Password'
            className='form-control'
          />
        </div>
        {error && <p className='text-danger'>{error}</p>}
        <div className='d-grid mb-2'>
          <button onClick={handleRegister} className='btn button'>Sign Up</button>
        </div>
        <span>Already have an account? <Link to='/'>Sign In</Link> </span>
      </div>
    </div>
  );
}

export default Signup;
