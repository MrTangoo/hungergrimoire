import { useState } from "react";

function IngredientSearchBar() {

  const ingredients = [
  'Œuf', 'Salade', 'Tomate', 'Concombre', 'Carotte', 'Oignon', 'Poivron',
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
];

  return (
    <>
        <div className='w-full max-w-sm min-w-[200px]'>
          <div className='relative'>
            <input
              className='border-transparent bg-dark-grey w-full placeholder:text-white/70 text-white text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow'
              placeholder='Entre tes ingrédients ici' 
            />
            <button
              className='absolute top-1 right-1 flex items-center rounded bg-light-grey py-1 px-2.5 border border-transparent text-center text-sm transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              type='button'
            >
              Search
            </button> 
          </div>
        </div>
    </>
  );
}

export default IngredientSearchBar;