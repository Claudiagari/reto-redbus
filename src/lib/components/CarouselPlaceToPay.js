import React from 'react';
import bcp from '../assets/images/bcp.png';
import bbva from '../assets/images/bbva.png';
import interbank from '../assets/images/interbank2.jpg';
import scotiabank from '../assets/images/scotiabank.gif';
import banbif from '../assets/images/banbif.png';

const CarouselPlaceToPay = () => (
  <div className="place-pay">
    <span className="text">Selecciona dónde quieras pagar</span>
    <img src={bcp}/>
    <img src={bbva}/>
    <img src={interbank}/>
    <img src={scotiabank}/>
    <img src={banbif}/>
  </div>
)

export default CarouselPlaceToPay