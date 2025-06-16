import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Title from '../components/Title';
import Carousel from '../components/Carousel';
import IngredientSearchBar from '../components/IngredientSearchBar';

function Home() {
  return (
    <>
        <Header />
        <h1>salut</h1>
        <Link to="./About">Lien about</Link>
        <Title />
        <IngredientSearchBar />
        <Carousel />
    </>
  );
}

export default Home;