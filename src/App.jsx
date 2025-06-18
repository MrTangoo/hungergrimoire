import './css/App.css';
import './fonts.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recettes from './pages/Recettes';
import About from './pages/About';
import Page404 from './pages/404';

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Home' element={<Home />}/>
          <Route path='/Recettes' element={<Recettes />}/>
          <Route path='/About' element={<About />}/>
          <Route path='*' element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;