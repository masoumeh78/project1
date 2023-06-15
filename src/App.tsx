import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Pages/Home';
import Listing from './component/Pages/Listing/Listing';
import Footer from './component/Footer/Footer';

function App() {
  return (

    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/فهرست" element={<Listing/>} />
        </Routes>
        <Footer />
      </Router>

    </>

  );
}

export default App;
