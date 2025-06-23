import React from 'react';
import { Link } from 'react-router-dom';
import IngredientSearchBar from '../components/IngredientSearchBar';
import orange_wizard from '../img/wizard/wizard_orange.png';
import Carousel from '../components/Carousel';

function Recettes() {
  return (
    <>
      <div className='py-20 flex flex-col items-center justify-center bg-lighter-grey'>
        <img className='w-32 absolute top-4 right-3' src={orange_wizard}></img>
        <IngredientSearchBar />
        <h1>Categorie</h1>
        <Carousel 
          // slidesPerView={6}
        />
        <h1>Categorie</h1>
        <Carousel 
          // slidesPerView={6}
        />
        <h1>Categorie</h1>
        <Carousel 
          // slidesPerView={6}
        />
        <h1>Categorie</h1>
        <Carousel 
          // slidesPerView={6}
        />
        <h1>Categorie</h1>
        <Carousel 
          // slidesPerView={6}
        />
        <h1>Categorie</h1>
        <Carousel 
          // slidesPerView={6}
        />
        <h1>Categorie</h1>
        <Carousel 
          // slidesPerView={6}
        />
        <h1>Categorie</h1>
        <Carousel 
          // slidesPerView={6}
        />
        <h1>Categorie</h1>
        <Carousel 
          // slidesPerView={6}
        />
        <h1>Categorie</h1>
        <Carousel 
          // slidesPerView={6}
        />
      </div>
    </>
  );
}

export default Recettes;