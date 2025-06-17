import { Link } from 'react-router-dom';
import lightgreen_wizard from '../img/wizard_lightgreen.png'
import Header from '../components/Header';
import Title from '../components/Title';
import IngredientSearchBar from '../components/IngredientSearchBar';
import Carousel from '../components/Carousel';

function Home() {
  return (
    <div class="flex flex-col items-center justify-center bg-lighter-grey">
        <Header />
        <img class="w-32 fixed top-4 right-3" src={lightgreen_wizard}></img>
        <Title />
        <IngredientSearchBar />
        <Carousel />
        <Link class="flex items-center justify-center bg-light-grey rounded-lg h-9 px-5" to="./Recettes">Voir toutes les recettes</Link>
    </div>
  );
}

export default Home;