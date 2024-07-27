import React from 'react'

function Signup() {
  return (
    <div className='app-theme-color d-flex justify-content-center align-items-center vh-100'>
      <div className='form-background p-5 rounded border'>
        <form>
          <h3 className='text-center mb-4'>Sign Up</h3>
          <div className='mb-4 d-flex justify-content gap-4'>
            <div>
              <label htmlFor='firstname'>First Name</label>
              <input type='text' placeholder='Enter Name' className='form-control' />
            </div>
            <div>
              <label htmlFor='lastname'>Last Name</label>
              <input type='text' placeholder='Enter Last Name' className='form-control' />
            </div>
          </div>
          <div className='mb-4'>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Enter Email' className='form-control' />
          </div>
          <div className='mb-4'>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Enter Password' className='form-control' />
          </div>
          <div className='d-grid mb-2'>
            <button className='btn btn button'>Sign Up</button>
          </div>
          <span>Already have an account? <a href='/'>Sign In</a> </span>
        </form>
      </div>
    </div>
  )
}

export default Signup