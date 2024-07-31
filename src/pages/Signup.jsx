import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = React.useState(null);

  const onSubmit = async (data) => {
    setError(null);
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      navigate('/home');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className='app-theme-color d-flex justify-content-center align-items-center vh-100'>
      <div className='form-background p-5 rounded border'>
        <h3 className='text-center mb-4'>Sign Up</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4 d-flex justify-content-between gap-4'>
            <div>
              <label htmlFor='firstName'>First Name</label>
              <input
                type='text'
                id='firstName'
                {...register('firstName', { required: 'First name is required' })}
                placeholder='Enter First Name'
                className='form-control'
              />
              {errors.firstName && <p className='text-danger'>{errors.firstName.message}</p>}
            </div>
            <div>
              <label htmlFor='lastName'>Last Name</label>
              <input
                type='text'
                id='lastName'
                {...register('lastName', { required: 'Last name is required' })}
                placeholder='Enter Last Name'
                className='form-control'
              />
              {errors.lastName && <p className='text-danger'>{errors.lastName.message}</p>}
            </div>
          </div>
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
            <button type='submit' className='btn button'>Sign Up</button>
          </div>
        </form>
        <span>Already have an account? <Link to='/'>Sign In</Link> </span>
      </div>
    </div>
  );
}

export default Signup;
