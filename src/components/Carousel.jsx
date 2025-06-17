import { Link } from 'react-router-dom';
import Card from './Card'
import test from '../img/wizard_darkgreen.png'
import React from 'react';

function Carousel() {
  return (
    <div className='w-full flex justify-center items-center p-[2%]'>
      <Card cardImg={test} reciepName='Lasagnes' nbPeople='4' reciepUrl='./404' />
    </div>
  );
}

export default Carousel;