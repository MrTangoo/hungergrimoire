import { Link } from 'react-router-dom';
import Card from './Card'
import Lasagnes_img from '../img/lasagnes_img.jpg'
import React from 'react';
import '../css/Carousel.css';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

function Carousel() {
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


  return (
    <>
      <div className="w-1/2 relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="multiple-slide-carousel relative"
        >
          {recipes.map((r, i) => (
            <SwiperSlide key={i}>
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

        <div className="absolute flex justify-center items-center m-auto left-0 right-0 w-fit bottom-12">
          <button className="swiper-button-prev group !p-2 flex justify-center items-center border border-solid border-indigo-600 !w-12 !h-12 transition-all duration-500 rounded-full hover:bg-indigo-600 !-translate-x-16">
            <svg className="h-5 w-5 text-indigo-600 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
              <path d="M10.0002 11.9999L6 7.99971L10.0025 3.99719" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="swiper-button-next group !p-2 flex justify-center items-center border border-solid border-indigo-600 !w-12 !h-12 transition-all duration-500 rounded-full hover:bg-indigo-600 !translate-x-16">
            <svg className="h-5 w-5 text-indigo-600 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
              <path d="M5.99984 4.00012L10 8.00029L5.99748 12.0028" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Carousel;