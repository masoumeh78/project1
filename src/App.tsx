import React from 'react';
import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Toolbar from './Pages/Toolbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Toolbar />}>

            <Route path='Login' element={<Login />} />
            <Route path='Signup' element={<Signup />} />
          </Route>

        </Routes>

      </BrowserRouter>


    </>
  );
}

export default App;
