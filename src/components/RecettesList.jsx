import Chrono from "./Chrono";
import Recette from "./Recette";

function RecettesList() {
  const recettesList = [
  {
    nom: "Poulet Curry au riz et à la crème de curry",
    duree: 25,
    personnes: 4,
    ingredients: [
      "1 cuillère à soupe de miel",
      "5 cuillères à soupe de curry",
      "1 oignon",
      "1 pot de crème fraîche (20 cl)",
      "sel",
      "4 escalopes de poulet",
      "1/2 citron",
      "riz"
    ],
      ustensiles: [
      "1 passoire",
      "1 set 3 poêles",
      "1 couteau",
      "1 économe",
      "1 cuillère en bois",
      "1 saladier"
    ],
    etapes: [
        "Éplucher et émincer les oignons. Les faire rissoler, dans une poêle légèrement huilée.",
        "Couper le poulet en fines lamelles. Le mettre dans la poêle.",
        "Rajouter le miel, le jus du citron et saupoudrer de curry (ne pas verser tout le curry). Laisser dans la poêle, jusqu'à ce que le poulet soit complètement cuit.",
        "Faire cuire le riz.",
        <div className="flex pt-4 pb-4">
          <Chrono MinutesCustom={15} />
        </div>,
        "Rajouter la crème fraîche au mélange, dans la poêle. Bien mélanger, puis mettre le reste de curry. Saler.",
        "Mélanger avec le riz et servir."
    ]
  },

    {
    nom: "Poulet Curry au riz et à la crème de curry",
    duree: 25,
    personnes: 4,
    ingredients: [
      "1 cuillère à soupe de miel",
      "5 cuillères à soupe de curry",
      "1 oignon",
      "1 pot de crème fraîche (20 cl)",
      "sel",
      "4 escalopes de poulet",
      "1/2 citron",
      "riz"
    ],
      ustensiles: [
      "1 passoire",
      "1 set 3 poêles",
      "1 couteau",
      "1 économe",
      "1 cuillère en bois",
      "1 saladier"
    ],
    etapes: [
        "Éplucher et émincer les oignons. Les faire rissoler, dans une poêle légèrement huilée.",
        "Couper le poulet en fines lamelles. Le mettre dans la poêle.",
        "Rajouter le miel, le jus du citron et saupoudrer de curry (ne pas verser tout le curry). Laisser dans la poêle, jusqu'à ce que le poulet soit complètement cuit.",
        "Faire cuire le riz.",
        <div className="flex pt-4 pb-4">
          <Chrono MinutesCustom={15} />
        </div>,
        "Rajouter la crème fraîche au mélange, dans la poêle. Bien mélanger, puis mettre le reste de curry. Saler.",
        "Mélanger avec le riz et servir."
    ]
  }
];

  const recette = recettesList[0];

  return (
    <>
      <Recette recette={recette}/>
    </>
  );
}

export default RecettesList;