import { Link } from 'react-router-dom';
import Recette from '../components/Recette'

function About() {
  return (
    <>
        <h1>About</h1>
        <Link to='../Recettes'>Lien recette</Link>
        <Recette 
          title='Hello world'
        />
    </>
  );
}

export default About;