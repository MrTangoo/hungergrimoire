function Card({cardColor, cardImg, reciepName, ingredients, nbPeople, reciepDuration, reciepUrl}) {
  return (
    <>
        <div class="w-1/4 bg-dark-green border-8 border-light-green rounded-xl">
            <img class ="w-2/3 rounded-lg" src={cardImg} />
            <p></p>
        </div>
    </>
  );
}

export default Card;