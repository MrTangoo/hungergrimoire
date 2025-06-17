import { Link } from 'react-router-dom';
import Card from './Card'
import React from 'react';

function Carousel() {
  return (
    <>
      <h1>CAROUSEL</h1>
      <Card cardImg="../img/wizard_darkgreen.png" reciepName="Lasagnes" />
    </>
  );
}

export default Carousel;