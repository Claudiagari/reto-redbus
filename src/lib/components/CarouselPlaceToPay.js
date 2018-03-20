import React from 'react';
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