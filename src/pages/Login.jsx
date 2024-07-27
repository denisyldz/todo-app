import React from 'react'

function Login() {
  return (
    <div className='app-theme-color d-flex justify-content-center align-items-center vh-100'>
      <div className='form-background p-5 rounded border'>
        <form>
          <h3 className='text-center mb-4'>Sign In</h3>
          <div className='mb-4'>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Enter Email' className='form-control' />
          </div>
          <div className='mb-4'>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Enter Password' className='form-control' />
          </div>
          <div className='d-grid mb-2'>
            <button className='btn button'>Sign In</button>
          </div>
          <p className='text-center'>
             <a href=''>Forgot your password?</a>
          </p>
          <span>Don't have an account? <a href='/signup'>Sign Up</a> </span>
        </form>
      </div>
    </div>
  )
}

export default Login