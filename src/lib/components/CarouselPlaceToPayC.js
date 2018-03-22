import React from 'react';
import CarrouselItemCash from './Carrousel-itemCash';
import Slider from 'react-slick';

function SampleNext(props) {
  const {className, style, onClick} = props
  return (
    <div className={className }
    style={{...style, top:'8%'}}
    onClick={onClick}><i className="fas fa-chevron-right"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className }
      style={{...style, top:'8%'}}
      onClick={onClick}
    ><i className="fas fa-chevron-left"></i></div>
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

const CarouselPlaceToPayC = ({dataCash, onItemClick}) => (
    <Slider {...settings} className="row d-flex justify-content-center">
      {dataCash.map( placepayC =>
      <CarrouselItemCash  
        key = {placepayC.name}
        onClick = {() => onItemClick(placepayC)}
        {...placepayC}
     />
      )}       
    </Slider>
)

export default CarouselPlaceToPayC