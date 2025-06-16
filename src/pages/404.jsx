import { useNavigate } from 'react-router-dom';
import sorcier404 from '../wizard/sad-404.png';
import arbre404 from '../arbre-404.png';

function Page404() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/')
  }
  
  return (
    <div
      className="h-screen bg-center bg-no-repeat" 
      style={{ 
        backgroundImage: `url(${arbre404})`, // utiliser les `` (shift + ^ + espace) quand t'importe qlq chose en style
        backgroundSize: '2000px 400px', // d'abord largeur ensuite hauteur
        backgroundPosition: 'center bottom 20px',
      }}
    >
        <h1>404 - Page non trouvée</h1>
        <p>texte</p>
        <button onClick={goHome}>Retourner à l'accueil</button>
        <img src={sorcier404} alt="image sorcier 404" />
    </div>
  );
}

export default Page404;