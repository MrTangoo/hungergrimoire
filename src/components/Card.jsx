import { Link } from 'react-router-dom';

function Card({ cardColor, cardImg, reciepName, ingredients, nbPeople, reciepDuration, reciepUrl }) {
  return (
    <div className={`flex items-center justify-center w-72 h-96 ${cardColor.bg} rounded-3xl scale-90`}>
      <div className={`h-full ${cardColor.border} scale-90 rounded-3xl`}>
        <div className='h-full flex flex-col items-center justify-between scale-90'>
          <img className='rounded-3xl' src={cardImg} />
          <h1 className={`${cardColor.bg} text-center w-1/2 h-8 text-2xl rounded-3xl`}>
            {reciepName}
          </h1>
          <p className={`${cardColor.bg} text-center w-full p-4 text-s rounded-3xl`}>
            {ingredients}
          </p>
          <p className='text-lg'>{nbPeople} personnes</p>
          <p className='text-lg'>{reciepDuration}'</p>
          <Link
            className='text-center px-3 py-2 bg-light-grey rounded-3xl transition-all duration-1000 ease-in-out hover:scale-110'
            to={reciepUrl}
          >
            Ouvrir
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card;