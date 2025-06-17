import { useNavigate } from 'react-router-dom';
import sorcier from '../image404-sorcier-orage.png';

function Page404() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/')
  }

  return (
    // p c'est padding
    <div className="bg-cream flex justify-between items-center p-8">
      <div>
        <h1 className="text-center font-bold text-7xl">Erreur 404</h1>
        <p className="text-3xl">Oulala! La page que vous cherchez n'existe pas!</p>
        <br />
        <p className="text-3xl">
          À la place vous avez trouvé le sorcier triste! 
          Laissez-moi vous ramener à un endroit plus sûr.
        </p>
        <button onClick={goHome}
          className=""
        >
          Retourner à l'accueil
        </button>
      </div>

      <img src={sorcier} alt="image sorcier sous orage" 
        className=""
      />
    </div>
  );
}

export default Page404;