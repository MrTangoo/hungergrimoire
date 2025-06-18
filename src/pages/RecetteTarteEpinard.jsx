import PouletCurry from '../img/recettes/poulet_curry_img.jpg'
import sorcier from '../img/wizard/wizard_darkgreen.png'

function RecetteTarteEpinard() {
  return (
    <>
        <div className="flex gap-8 bg-dark-green pl-5"> {/* Toute la recette  */}
            <div className="flex flex-col pt-10"> {/* Ingredients */}
                <h1 className="text-3xl">Ingredients</h1>
                <p>• 1 cuillère à soupe de miel</p>
                <p>• 5 cuillère à soupe de curry</p>
                <p>• 1 oignon</p>
                <p>• 1 pot de crème fraîche (20 cl)</p>
                <p>• sel</p>
                <p>• 4 escalopes de poulet</p>
                <p>• 1/2 citron</p>
                <p>• riz</p>
                    {/* Ustensiles */}
                <h1 className="text-3xl">Ustensiles</h1>
                <p>• 1 passoire </p>
                <p>• 1 set 3 poêles</p>
                <p>• 1 couteau</p>
                <p>• 1 économe</p>
                <p>• 1 cuillère en bois</p>
                <p>• 1 saladier</p>

                <div className="flex bg-white mt-5 mb-5 p-3 rounded-lg"> {/* Temps total ett */}
                    <div className="pr-4">
                        <p>Préparation : 15min</p>
                    </div>
                    <div className="pr-4">
                        <p>Cuisson : 10min</p>
                    </div>
                    <p>Personnes : 4</p>
                </div>
            </div>
            <div className="flex-1 bg-white pl-20 pt-10 text-xl pb-10">
            <div className="flex items-center">
                <h1 className="text-5xl" style={{ fontFamily: 'Megrim' }}>
                Poulet au riz et à la crème de curry
                </h1>
                <img src={sorcier} alt="Sorcier" className="w-32 h-auto ml-auto mr-20" />
            </div>

            <p>1. Eplucher et émincer les oignons. Les faire rissoler, dans une poêle légèrement huilée.</p>
            <p>2. Couper le poulet en fines lamelles. Le mettre dans la poêle.</p>
            <p>3. Rajouter le miel, le jus du citron et saupoudrer de curry (ne pas verser tout le curry). Laisser dans la poêle, jusqu'à ce que le poulet soit complètement cuit.</p>
            <p>4. Faire cuire le riz.</p>
            <p>5. Rajouter la crème fraîche au mélange, dans la poêle. Bien mélanger, puis mettre le reste de curry. Saler</p>
            <p>6. Mélanger avec le riz et servir.</p>

            <div className="flex justify-end">
                <img src={PouletCurry} alt="Image du poulet curry" className="w-80 h-auto mr-10 rounded-xl" />
            </div>
            </div>
        </div>  
    </>
  );
}

export default RecetteTarteEpinard;