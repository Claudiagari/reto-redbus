import React from 'react';
import bcp from '../assets/images/bcp.png';
import bbva from '../assets/images/bbva.png';
import interbank from '../assets/images/interbank2.jpg';
import scotiabank from '../assets/images/scotiabank.gif';
import banbif from '../assets/images/banbif.png';

const CarouselPlaceToPayC = () => (
  
    <ul>
      <li>
        <img src={bcp}/>
        <p className="bold">Agentes y Bodegas </p>
        <p className="bold">Agencias</p>
      </li>
      <li>
        <img src={bbva}/>
        <p className="bold">Agentes y Bodegas </p>
        <p className="bold">Agencias</p>
      </li>
      <li>
        <img src={interbank}/>
        <p className="bold">Agentes y Bodegas </p>
        <p className="bold">Agencias</p>
      </li>
      <li>
        <img src={banbif}/>
        <p className="bold">Agencias</p>
      </li>        
    </ul>
)

export default CarouselPlaceToPayC