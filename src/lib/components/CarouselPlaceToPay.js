import React from 'react';
import CarrouselItem from './Carrousel-item';
import Slider from 'react-slick';

function SampleNext(props) {
  const {onClick} = props
  return (
    <span className="chevron-r-internet" onClick={onClick}><i className="fas fa-chevron-right"></i>
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
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <SampleNext />,
  prevArrow: <SamplePrevArrow />,
  responsive:[ { breakpoint: 768, settings: { slidesToShow: 3 } } ]
};


const CarouselPlaceToPay = ({dataOnline, onItemClick}) => (
  <Slider {...settings}>
     {dataOnline.map( placepay =>
      <CarrouselItem  key = {placepay.name}
      onClick = {() => onItemClick(placepay)}
        {...placepay}
     />
    )}
  </Slider>
)

export default CarouselPlaceToPay