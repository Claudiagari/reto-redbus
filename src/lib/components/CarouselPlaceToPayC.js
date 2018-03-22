import React from 'react';
import bcp from '../assets/images/bcp.png';
import bbva from '../assets/images/bbva.png';
import interbank from '../assets/images/interbank2.jpg';
import scotiabank from '../assets/images/scotiabank.gif';
import banbif from '../assets/images/banbif.png';
import Slider from 'react-slick'

const css = [
 
]
function SampleNextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block', background: 'red'}}
      onClick={onClick}
    ></div>
  );
}

function SampleNext(props) {
  const {onClick} = props
  return (
    <span className="chevron-r" onClick={onClick}><i className="fas fa-chevron-right"></i>
    </span>
  );
}

function SamplePrevArrow(props) {
  const { onClick} = props
  return (
    <span className="chevron-l" onClick={onClick}><i className="fas fa-chevron-left"></i>
    </span>
  );
}

var settings = {
  arrows:true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <SampleNext />,
  prevArrow: <SamplePrevArrow />,
  responsive:[ { breakpoint: 768, settings: { slidesToShow: 3 } } ]
};

const CarouselPlaceToPayC = () => (
    <Slider {...settings}>
      <li className="text-center" >
        <img src={bcp}/>
        <p className="bold">Agentes y Bodegas </p>
        <p className="bold">Agencias</p>
      </li>
      <li className="text-center">
        <img src={bbva}/>
        <p className="bold">Agentes y Bodegas </p>
        <p className="bold">Agencias</p>
      </li>
      <li className="text-center">
        <img src={interbank}/>
        <p className="bold">Agentes y Bodegas </p>
        <p className="bold">Agencias</p>
      </li>
      <li className="text-center">
        <img src={banbif}/>
        <p className="bold">Agencias</p>
      </li> 
      <li className="text-center">
      <img src={interbank}/>
      <p className="bold">Agentes y Bodegas </p>
      <p className="bold">Agencias</p>
    </li>
    <li className="text-center">
      <img src={banbif}/>
      <p className="bold">Agencias</p>
    </li>               
    </Slider>
)

export default CarouselPlaceToPayC