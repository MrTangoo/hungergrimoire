import { Link } from 'react-router-dom';
import React from 'react';
import Card from './Card'
import Lasagnes_img from '../img/lasagnes_img.jpg'
import Omelette_img from '../img/omellette_img.jpg'
import Chili_con_carne_img from '../img/chili_con_carne_img.jpg'
import Gratin_daufinois_img from '../img/gratin_dauphinois_img.jpg'
import Curry_img from '../img/curry_legumes_img.jpg'
import Quiche_img from '../img/quiche_loraine_img.jpg'
import Poulet_img from '../img/poulet_roti.jpeg'
import Tajine_img from '../img/tajine_img.jpg'
import Pizza_img from '../img/pizza_img.jpg'
import Soupe_img from '../img/soupe_img.jpg'
import '../css/Carousel.css';

// swiper imports
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

function Carousel( {slidesPerView, width} ) {
// cards data
const recipes = [
  {
    cardColor: { bg: 'bg-light-green', border: 'bg-dark-green' },
    cardImg: Lasagnes_img,
    reciepName: 'Lasagnes',
    ingredients: 'Pâtes, viande hachée, sauce tomate, . . .',
    nbPeople: 4,
    reciepDuration: 45,
    reciepUrl: '/recettes/lasagnes',
  },
  {
    cardColor: { bg: 'bg-orange', border: 'bg-dark-green' },
    cardImg: Omelette_img,
    reciepName: 'Omelette',
    ingredients: 'Œufs, oignons, fromage',
    nbPeople: 2,
    reciepDuration: 10,
    reciepUrl: '/recettes/omelette',
  },
  {
    cardColor: { bg: 'bg-yellow', border: 'bg-dark-green' },
    cardImg: Chili_con_carne_img,
    reciepName: 'Chili Con Carne',
    ingredients: 'Haricots rouges, viande, tomates, . . .',
    nbPeople: 5,
    reciepDuration: 40,
    reciepUrl: '/recettes/chili',
  },
  {
    cardColor: { bg: 'bg-light-green', border: 'bg-dark-green' },
    cardImg: Gratin_daufinois_img,
    reciepName: 'Gratin dauphinois',
    ingredients: 'Pommes de terre, crème, ail, . . .',
    nbPeople: 4,
    reciepDuration: 60,
    reciepUrl: '/recettes/gratin-dauphinois',
  },
  {
    cardColor: { bg: 'bg-orange', border: 'bg-dark-green' },
    cardImg: Curry_img,
    reciepName: 'Curry de légumes',
    ingredients: 'Courgette, carotte, lait coco, curry, . . .',
    nbPeople: 3,
    reciepDuration: 35,
    reciepUrl: '/recettes/curry-legumes',
  },
  {
    cardColor: { bg: 'bg-yellow', border: 'bg-dark-green' },
    cardImg: Quiche_img,
    reciepName: 'Quiche Lorraine',
    ingredients: 'Lardons, œufs, crème, . . .',
    nbPeople: 6,
    reciepDuration: 30,
    reciepUrl: '/recettes/quiche-lorraine',
  },
  {
    cardColor: { bg: 'bg-light-green', border: 'bg-dark-green' },
    cardImg: Poulet_img,
    reciepName: 'Poulet rôti',
    ingredients: 'Poulet, herbes, pommes de terre, . . .',
    nbPeople: 4,
    reciepDuration: 75,
    reciepUrl: '/recettes/poulet-roti',
  },
  {
    cardColor: { bg: 'bg-orange', border: 'bg-dark-green' },
    cardImg: Tajine_img,
    reciepName: 'Tajine de légumes',
    ingredients: 'Navets, courgettes, pois chiches, . . .',
    nbPeople: 4,
    reciepDuration: 50,
    reciepUrl: '/recettes/tajine-legumes',
  },
  {
    cardColor: { bg: 'bg-yellow', border: 'bg-dark-green' },
    cardImg: Pizza_img,
    reciepName: 'Pizza maison',
    ingredients: 'Pâte, sauce tomate, fromage, . . .',
    nbPeople: 2,
    reciepDuration: 25,
    reciepUrl: '/recettes/pizza',
  },
  {
    cardColor: { bg: 'bg-light-green', border: 'bg-dark-green' },
    cardImg: Soupe_img,
    reciepName: 'Soupe de légumes',
    ingredients: 'Carottes, poireaux, pommes de terre, . . .',
    nbPeople: 4,
    reciepDuration: 30,
    reciepUrl: '/recettes/soupe-legumes',
  }
]

// end cards data


  return (
    <>
      {/* carousel div (with arrows) */}
      <div className="lg:w-1/2 md:w-4/5 w-[80%] md relative">
        {/* swiper things */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          // swiper style
          spaceBetween={0}
          slidesPerView={1}
          // breakpoints
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
          className="multiple-slide-carousel relative"
        >
          {/* slides (= cards) */}
          {recipes.map((r, i) => (
            <SwiperSlide key={i}>
              {/* custom cards values */}
              <Card
                cardColor={r.cardColor}
                cardImg={r.cardImg}
                reciepName={r.reciepName}
                ingredients={r.ingredients}
                nbPeople={r.nbPeople}
                reciepDuration={r.reciepDuration}
                reciepUrl={r.reciepUrl}
              />
            </SwiperSlide>
          ))}
        </Swiper>
          <div className=''>
            <button className='invisible sm:visible swiper-button-prev !text-dark-grey group transition-all duration-500 rounded-full !-translate-x-16 scale-75'></button>
            <button className='invisible sm:visible swiper-button-next !text-dark-grey group transition-all duration-500 rounded-full !translate-x-16 scale-75'></button>
          </div>
      </div>
    </>
  );
}

export default Carousel;