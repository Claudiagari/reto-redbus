import React from 'react';
import bcp from '../assets/images/bcp.png';
import bbva from '../assets/images/bbva.png';
import interbank from '../assets/images/interbank2.jpg';
import scotiabank from '../assets/images/scotiabank.gif';
import banbif from '../assets/images/banbif.png';
import CarrouselItem from './Carrousel-item';

const CarouselPlaceToPay = ({dataOnline}) => (
      <ul>
     {dataOnline.map( placepay =>
      <CarrouselItem  key = {placepay.name}
        {...placepay}
     />
    )}
  </ul>
)

export default CarouselPlaceToPay