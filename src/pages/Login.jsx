import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate('/home');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleSignIn = () => {
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
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
        <h3 className='text-center mb-4'>Sign In</h3>
        <div className='mb-4'>
          <label htmlFor='email'>Email</label>
          <input
            value={email}
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter Email'
            className='form-control'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='password'>Password</label>
          <input
            value={password}
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter Password'
            className='form-control'
          />
        </div>
        {error && <p className='text-danger'>{error}</p>}
        <div className='d-grid mb-2'>
          <button onClick={handleSignIn} className='btn button'>Sign In</button>
        </div>
        <p className='text-center'>
          <Link to='/forgot-password'>Forgot your password?</Link>
        </p>
        <span>Don't have an account? <Link to='/signup'>Sign Up</Link> </span>
      </div>
    </div>
  );
}

export default Login;
