import React from 'react';
import CarrouselItem from './Carrousel-item';
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
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <SampleNext />,
  prevArrow: <SamplePrevArrow />,
  responsive:[ { breakpoint: 768, settings: { slidesToShow: 3 } } ]
};

const CarouselPlaceToPay = ({dataOnline, onItemClick}) => (
  <Slider className="ul" {...settings}>
     {dataOnline.map( placepay =>
      <CarrouselItem  key = {placepay.name}
      onClick = {() => onItemClick(placepay)}
        {...placepay}
     />
    )}
  </Slider>
)

export default CarouselPlaceToPay