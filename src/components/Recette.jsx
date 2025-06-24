import React from "react";
import PouletCurry from '../img/recettes/poulet_curry_img.jpg'
import sorcier from '../img/wizard/wizard_darkgreen.png'

function Recette( {recette} ) {

const ListIngredients = (recette.ingredients).map((item, i) => <p key={i}>{item}</p>);
const ListUstensiles = (recette.ustensiles).map((item, i) => <p key={i}>{item}</p>);
const ListEtapes = (recette.etapes).map((item, i) => 
typeof item === "string" ? (
<p key={i}>{i + 1}. {item}</p>
) : (
<React.Fragment key={i}>{item}</React.Fragment>
));

  return (
    <>
        <div className="flex gap-8 bg-dark-green pl-5">
          <div className="flex flex-col pt-10">
            <h2 className="text-xl mt-4 font-semibold">Ingrédients</h2>
            {ListIngredients}

            <h2 className="text-xl mt-4 font-semibold">Ustensiles</h2>
            {ListUstensiles}

            <div className="flex bg-white mt-5 mb-5 p-3 rounded-lg">
              <div className="pr-4">
                <p>Durée : {recette.duree}</p>
              </div>
              <div>
                <p>Peronnes : {recette.personnes}</p>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-white pl-20 pt-10 text-xl pb-10">
            <div className="flex items-center">
              <h1 className="text-5xl" style={{ fontFamily: 'Megrim' }}>{recette.nom}</h1>
              <img src={sorcier} alt="Sorcier" className="w-32 h-auto ml-auto mr-20" />
            </div>
            <h2 className="text-xl mt-4 font-semibold">Étapes</h2>
            {ListEtapes}
            <div className="flex justify-end">
              <img src={PouletCurry} alt="Image du poulet curry" className="w-80 h-auto mr-10 rounded-xl"/>
            </div>
          </div>
        </div>
    </>
  );
}

export default Recette;