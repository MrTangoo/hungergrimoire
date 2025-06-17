import { Link } from 'react-router-dom';

function Card({cardColor, cardImg, reciepName, ingredients, nbPeople, reciepDuration, reciepUrl}) {
  return (
    <>
        <div className="flex items-center justify-center w-1/6 h-96 bg-light-green rounded-[15%]">
          <div className="flex flex-col items-center justify-around w-[90%] h-[92%] bg-dark-green rounded-[15%]">
            <img className="w-2/3 rounded-lg" src={cardImg} />
            <h1>{reciepName}</h1>
            <p>{nbPeople} personnes</p>
            <Link className="flex items-center justify-center bg-light-grey rounded-lg h-9 px-5" to={reciepUrl}>Ouvrir</Link>
          </div>
        </div>
    </>
  );
}

export default Card;