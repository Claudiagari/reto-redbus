import React from 'react' ;
import CarouselPlaceToPayC from './CarouselPlaceToPayC';
import InstructionsCash from './InstructionsCash'


const SectionPayOnline = () => (
  <div className="place-pay">
    <span className="text">Selecciona dónde quieras pagar</span>
    <CarouselPlaceToPayC />
    <InstructionsCash/>
  </div>
)

export default SectionPayOnline