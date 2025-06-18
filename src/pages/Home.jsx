import { Link } from 'react-router-dom';
import lightgreen_wizard from '../img/wizard_lightgreen.png';
import Title from '../components/Title';
import IngredientSearchBar from '../components/IngredientSearchBar';
import Carousel from '../components/Carousel';
import Chrono from '../components/Chrono';

function Home() {
  return (
    <div className='py-20 flex flex-col items-center justify-center bg-lighter-grey'>
        <img className='w-32 absolute top-4 right-3' src={lightgreen_wizard}></img>
        <Title />
        <IngredientSearchBar />
        <Carousel />
        <Link className='flex items-center justify-center bg-light-grey rounded-lg h-9 px-5' to='./Recettes'>Voir toutes les recettes</Link>
    </div>
  );
}

export default Home;