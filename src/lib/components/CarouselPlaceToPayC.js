import React from 'react';
import bcp from '../assets/images/bcp.png';
import bbva from '../assets/images/bbva.png';
import interbank from '../assets/images/interbank2.jpg';
import scotiabank from '../assets/images/scotiabank.gif';
import banbif from '../assets/images/banbif.png';
import Slider from 'react-slick'

var settings = {
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

const CarouselPlaceToPayC = () => (
  
    <Slider {...settings}>
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
      <li>
      <img src={interbank}/>
      <p className="bold">Agentes y Bodegas </p>
      <p className="bold">Agencias</p>
    </li>
    <li>
      <img src={banbif}/>
      <p className="bold">Agencias</p>
    </li>               
    </Slider>
)

export default CarouselPlaceToPayC