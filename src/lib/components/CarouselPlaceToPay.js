import React from 'react';
import bcp from '../assets/images/bcp.png';
import bbva from '../assets/images/bbva.png';
import interbank from '../assets/images/interbank2.jpg';
import scotiabank from '../assets/images/scotiabank.gif';
import banbif from '../assets/images/banbif.png';

const CarouselPlaceToPay = () => (
  <div className="place-pay">
    <ul>
      <li>
        <img src={bcp}/>
      </li>
      <li>
        <img src={bbva}/>
      </li>
      <li>
        <img src={interbank}/>
      </li>
      <li>
      <img src={scotiabank}/>
      </li>
      <li>
        <img src={banbif}/>
      </li>        
    </ul>
    </div>
)

export default CarouselPlaceToPay