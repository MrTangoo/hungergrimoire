import { Link } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
        <Header />
        <h1>salut</h1>
        <Link to="./About">Lien about</Link>
        <Footer />
    </>
  );
}

export default Home;