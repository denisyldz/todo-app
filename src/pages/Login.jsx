import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/home');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const onSubmit = async (data) => {
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate('/home');
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className='app-theme-color d-flex justify-content-center align-items-center vh-100'>
      <div className='form-background p-5 rounded border'>
        <h3 className='text-center mb-4'>Sign In</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: 'Entered value does not match email format'
                }
              })}
              placeholder='Enter Email'
              className='form-control'
            />
            {errors.email && <p className='text-danger'>{errors.email.message}</p>}
          </div>
          <div className='mb-4'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must have at least 8 characters'
                }
              })}
              placeholder='Enter Password'
              className='form-control'
            />
            {errors.password && <p className='text-danger'>{errors.password.message}</p>}
          </div>
          {error && <p className='text-danger'>{error}</p>}
          <div className='d-grid mb-2'>
            <button type='submit' className='btn button'>Sign In</button>
          </div>
        </form>
        <p className='text-center'>
          <Link to='/forgot-password'>Forgot your password?</Link>
        </p>
        <span>Don't have an account? <Link to='/signup'>Sign Up</Link> </span>
      </div>
    </div>
  );
}

export default Login;
