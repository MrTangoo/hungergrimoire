import { Link } from 'react-router-dom';
import Header from '../components/Header'

function Home() {
  return (
    <>
        <Header />
        <h1>salut</h1>
        <Link to="./About">Lien about</Link>
    </>
  );
}

export default Home;