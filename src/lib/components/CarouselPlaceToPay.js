import React from 'react';
import CarrouselItem from './Carrousel-item';

const CarouselPlaceToPay = ({dataOnline, onItemClick}) => (
  <ul>
     {dataOnline.map( placepay =>
      <CarrouselItem  key = {placepay.name}
      onClick = {() => onItemClick(placepay)}
        {...placepay}
     />
    )}
  </ul>
)

export default CarouselPlaceToPay