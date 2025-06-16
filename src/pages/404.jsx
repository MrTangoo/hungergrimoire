import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import react from 'react';

function Page404() {
  const navigate = UseNavigate();

  const goHome = () => {
    navigate('/Home.jsx')
  }
  
  return (
    <>
        <h1>404 - Page non trouvée</h1>
        <p>texte</p>
        <button onClick={goHome}>Retourner à l'accueil</button>
    </>
  );
}

export default Page404;