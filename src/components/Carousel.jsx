import { Link } from 'react-router-dom';
import React from 'react';
import Card from './Card'
import Lasagnes_img from '../img/lasagnes_img.jpg'
import '../css/Carousel.css';

// swiper imports
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

function Carousel() {
// cards data
const recipes = [
  {
    cardColor: { bg: 'bg-light-green', border: 'bg-dark-green' },
    cardImg: Lasagnes_img,
    reciepName: 'Tartiflette',
    ingredients: 'Pommes de terre, reblochon...',
    nbPeople: 4,
    reciepDuration: 30,
    reciepUrl: '/recettes/tartiflette',
  },

  {
    cardColor: { bg: 'bg-light-green', border: 'bg-dark-green' },
    cardImg: Lasagnes_img,
    reciepName: 'Tartiflette2',
    ingredients: 'Pommes de terre, reblochon...',
    nbPeople: 4,
    reciepDuration: 30,
    reciepUrl: '/recettes/tartiflette',
  },

  {
    cardColor: { bg: 'bg-yellow', border: 'bg-dark-green' },
    cardImg: Lasagnes_img,
    reciepName: 'Tartiflette',
    ingredients: 'Pommes de terre, reblochon...',
    nbPeople: 4,
    reciepDuration: 30,
    reciepUrl: '/recettes/tartiflette',
  },

  {
    cardColor: { bg: 'bg-orange', border: 'bg-dark-green' },
    cardImg: Lasagnes_img,
    reciepName: 'Tartiflette2',
    ingredients: 'Pommes de terre, reblochon...',
    nbPeople: 4,
    reciepDuration: 30,
    reciepUrl: '/recettes/tartiflette',
  },

  {
    cardColor: { bg: 'bg-light-green', border: 'bg-dark-green' },
    cardImg: Lasagnes_img,
    reciepName: 'Tartiflette',
    ingredients: 'Pommes de terre, reblochon...',
    nbPeople: 4,
    reciepDuration: 30,
    reciepUrl: '/recettes/tartiflette',
  },

  {
    cardColor: { bg: 'bg-light-green', border: 'bg-dark-green' },
    cardImg: Lasagnes_img,
    reciepName: 'Tartiflette2',
    ingredients: 'Pommes de terre, reblochon...',
    nbPeople: 4,
    reciepDuration: 30,
    reciepUrl: '/recettes/tartiflette',
  },
]
// end cards data


  return (
    <>
      {/* carousel div (with arrows) */}
      <div className="w-1/2 relative">
        {/* swiper things */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          // swiper style
          spaceBetween={20}
          slidesPerView={3}
          // breakpoints
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
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
            <button className='swiper-button-prev !text-dark-grey group transition-all duration-500 rounded-full !-translate-x-16'></button>
            <button className='swiper-button-next !text-dark-grey group transition-all duration-500 rounded-full !translate-x-16'></button>
          </div>
      </div>
    </>
  );
}

export default Carousel;