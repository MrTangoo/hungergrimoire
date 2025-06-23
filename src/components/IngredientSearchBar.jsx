import { useState } from "react";

function IngredientSearchBar() {

  const [inputValue, setInputValue] = useState(""); // on stocke la valeur de l'input ici
  const [filteredIngredients, setFilteredIngredients] = useState([]); // on filtre les ingrédients par rapport à l'input du user

  const ingredients = [
  'Œuf', 'Oeuf', 'Oeufs', 'Salade', 'Tomate', 'Concombre', 'Carotte', 'Oignon', 'Poivron',
  'Avocat', 'Laitue', 'Radis', 'Maïs', 'Thon', 'Poulet', 'Fromage',
  'Pain', 'Croutons', 'Mozzarella', 'Olives', 'Vinaigrette', 'Riz', 'Pâtes',
  'Lentilles', 'Pois chiches', 'Haricots rouges', 'Saumon', 'Tofu', 'Crevettes',
  'Champignons', 'Courgette', 'Aubergine', 'Brocoli', 'Chou-fleur', 'Épinards',
  'Roquette', 'Betterave', 'Noix', 'Amandes', 'Noisettes',
  'Graines de tournesol', 'Graines de courge', 'Feta', 'Parmesan', 'Ricotta',
  'Yaourt nature', 'Mayonnaise', 'Moutarde', 'Huile d’olive', 'Vinaigre balsamique',
  'Citron', 'Basilic', 'Persil', 'Coriandre', 'Menthe', 'Aneth',
  'Cornichons', 'Piments', 'Paprika', 'Curry', 'Sel', 'Poivre', 'Ketchup',
  'Sauce barbecue', 'Tabasco', 'Œuf dur', 'Œuf poché', 'Œuf brouillé',
  'Lait', 'Crème fraîche', 'Beurre', 'Pommes de terre', 'Patate douce',
  'Navet', 'Topinambour', 'Céleri', 'Fenouil', 'Artichaut', 'Asperge',
  'Chou rouge', 'Chou vert', 'Chou chinois', 'Pois mange-tout', 'Haricots verts',
  'Mâche', 'Endive', 'Cresson', 'Tomme', 'Comté', 'Boursin', 'Raclette',
  'Anchois', 'Sardines', 'Truite', 'Morue', 'Palourdes', 'Moules', 'Calmars',
  'Encornets', 'Boulgour', 'Quinoa', 'Polenta', 'Semoule', 'Farine',
  'Pain de mie', 'Baguette', 'Tortilla', 'Galette', 'Wrap', 'Brioche',
  'Croissant', 'Pain complet', 'Pain de seigle', 'Toasts', 'Graines de sésame',
  'Graines de lin', 'Graines de chia', 'Ciboulette', 'Oseille', 'Laurier',
  'Thym', 'Romarin', 'Origan', 'Estragon', 'Gingembre', 'Ail', 'Échalote',
  'Câpres', 'Zeste de citron', 'Zeste d’orange', 'Miel', 'Sucre',
  'Sirop d’érable', 'Confiture', 'Compote', 'Pomme', 'Banane', 'Fraise',
  'Framboise', 'Myrtille', 'Cerise', 'Raisin', 'Orange', 'Clémentine',
  'Pamplemousse', 'Poire', 'Pêche', 'Nectarine', 'Kiwi', 'Mangue', 'Ananas',
  'Melon', 'Pastèque', 'Figues', 'Dattes', 'Pruneaux', 'Abricot sec',
  'Raisins secs', 'Chocolat', 'Noix de coco râpée', 'Avoine', 'Corn flakes',
  'Granola'
]; // beaucoup d'ingrédients

  const handleInputChange = (e) => { // fonction qui met à jour l'input du user (e = element), elle est appelée à chaque fois que l'input du user change
    const value = e.target.value;
    setInputValue(value);

    if (value.length > 0) {
      const filtered = ingredients.filter(ingredient =>
        ingredient.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 3);
      setFilteredIngredients(filtered);
    } else {
      setFilteredIngredients([]);
    }
  };

  // fonction qui permet que si le user clique sur une recommendation, alors l'input est changé par la recommendation cliquée
  const handleIngredientClick = (ingredient) => {
    setInputValue(ingredient);
    setFilteredIngredients([]);
  };

  return (
    <>
      <div className='w-full max-w-sm min-w-[200px]'>
        <div className='relative'>
          <input
            className='border-transparent bg-dark-grey w-full placeholder:text-white/70 text-white text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow'
            placeholder='Entre tes ingrédients ici'
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            className='absolute top-1 right-1 flex items-center rounded bg-light-grey py-1 px-2.5 border border-transparent text-center text-sm transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
            type='button'
          >
            Rechercher
          </button>
          { /* ----- La div de recommendation ici ----- */ }

          { /* affiche div uniquement si l'input n'est pas vide */ }
          {filteredIngredients.length > 0 && (
            <div className='absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg'>
              {filteredIngredients.map((ingredient, index) => ( // map c'est pour itérer les ingrédients de filteredIngredients
                <div
                  key={index} // clé de l'index actuel
                  className='p-2 cursor-pointer hover:bg-gray-200'
                  onClick={() => handleIngredientClick(ingredient)}
                >
                  { /* ici on affiche le nom de l'ingrédient dans la div */ }
                  {ingredient}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default IngredientSearchBar;