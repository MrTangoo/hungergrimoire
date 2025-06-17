import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recettes from './pages/Recettes';
import About from './pages/About';
import Page404 from './pages/404';
import Chrono from './components/Chrono'; // import du chronometre, c'est temporaire, juste histoire que je puisse mieux voir les modifications

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Home' element={<Home />}/>
          <Route path='/Recettes' element={<Recettes />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Chrono' element={<Chrono />} />
          <Route path='*' element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;