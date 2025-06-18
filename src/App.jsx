import './css/App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout'
import Home from './pages/Home';
import Recettes from './pages/Recettes';
import About from './pages/About';
import Page404 from './pages/404';

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='/Recettes' element={<Recettes />} />
          <Route path='/About' element={<About />} />
          <Route path='/404' element={<Page404 />} />
          <Route path='*' element={<Page404 />} />
          </Route>
        </Routes>
    </>
  );
}

export default App;