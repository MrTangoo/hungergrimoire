import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
        <h1>salut</h1>
        <Link to="./About">Lien about</Link>
    </>
  );
}

export default Home;