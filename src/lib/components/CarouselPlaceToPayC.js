import React from 'react';
import CarrouselItemCash from './Carrousel-itemCash';
import Slider from 'react-slick';

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

const CarouselPlaceToPayC = ({dataCash, onItemClick}) => (
    <Slider {...settings}>
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