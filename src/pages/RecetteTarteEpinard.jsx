function RecetteTarteEpinard() {
  return (
    <>
        <div className="flex gap-8 bg-dark-green pl-5 pt-10"> {/* Toute la recette  */}
            <div className="flex flex-col"> {/* Ingredients */}
                <p>1 cuillère à soupe de miel</p>
                <p>5 cuillère à soupe de curry</p>
                <p>1 oignon</p>
                <p>1 pot de crème fraîche (20 cl)</p>
                <p>sel</p>
                <p>4 escalopes de poulet</p>
                <p>1/2 citron</p>
                <p>riz</p>
                    {/* Ustensiles */}
                <p>1 passoire </p>
                <p>1 set 3 poêles</p>
                <p>1 couteau</p>
                <p>1 économe</p>
                <p>1 cuillère en bois</p>
                <p>1 saladier</p>

                <div className="flex bg-white"> {/* Temps total ett */}
                    <div className="pr-4">
                        <p>Préparation : 15min</p>
                    </div>
                    <p>Cuisson: 10min</p>
                </div>
            </div>

            <div className="flex-1 bg-white"> {/* Recette */}
                <h1 className="text-5xl mb-5">Tarte aux épinards</h1>
                <p>Étape 1 Eplucher et émincer les oignons. Les faire rissoler, dans une poêle légèrement huilée.</p>
                <p>Étape 2 Couper le poulet en fines lamelles. Le mettre dans la poêle.</p>
                <p>Étape 3 Rajouter le miel, le jus du citron et saupoudrer de curry (ne pas verser tout le curry). Laisser dans la poêle, jusqu'à ce que le poulet soit complètement cuit.</p>
                <p>Étape 4 Faire cuire le riz.</p>
                <p>Étape 5 Rajouter la crème fraîche au mélange, dans la poêle. Bien mélanger, puis mettre le reste de curry. Saler</p>
                <p>Étape 6 Mélanger avec le riz et servir.</p>
            </div>
        </div>  
    </>
  );
}

export default RecetteTarteEpinard;