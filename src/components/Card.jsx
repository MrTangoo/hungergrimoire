import { Link } from 'react-router-dom';

function Card({ cardColor, cardImg, reciepName, ingredients, nbPeople, reciepDuration, reciepUrl }) {
  return (
    <div className={`aspect-[4/5] scale-[78%] flex items-center justify-center ${cardColor.bg} rounded-3xl`}>
      <div className={`h-full ${cardColor.border} m-[5%] rounded-3xl`}>
        <div className='h-full flex flex-col items-center justify-between scale-90'>
          <div className="w-full aspect-video overflow-hidden rounded-3xl">
            <img src={cardImg} className="w-full h-full object-cover" />
          </div>
          <h1 className={`${cardColor.bg} text-center px-[8%] rounded-3xl`}>
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