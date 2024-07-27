import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  const MainLayout = ({ children }) => {
    const location = useLocation();
    const hideNavbarPaths = ['/', '/signup'];

    return (
      <>
        {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
        <div className='container'>
          {children}
        </div>
      </>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route
          path='/home'
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
