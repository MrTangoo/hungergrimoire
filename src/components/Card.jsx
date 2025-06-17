import { Link } from 'react-router-dom';

function Card({cardColor, cardImg, reciepName, ingredients, nbPeople, reciepDuration, reciepUrl}) {
  return (
    <>
        <div className='flex items-center justify-center w-80 h-96 bg-light-green rounded-3xl'>
          <div className='h-full bg-dark-green scale-90 rounded-3xl'>
            <div className='h-full flex flex-col items-center justify-between scale-90'>
              <img className='rounded-3xl' src={cardImg} />
              <h1 className='flex items-center justify-center bg-light-green'>{reciepName}</h1>
              <p>{nbPeople} personnes</p>
              <Link className='flex items-center justify-center bg-light-grey' to={reciepUrl}>Ouvrir</Link>
            </div>
          </div>
        </div>
    </>
  );
}

export default Card;