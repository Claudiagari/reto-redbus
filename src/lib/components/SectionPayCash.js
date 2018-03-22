import React from 'react' ;
import ContainerCarouselPaceToPayC from '../containers/Container-carrouselCash';
import ContainerInstructionC from '../containers/Container-InstructionsCash';


const SectionPayOnline = () => (
  <div className="place-pay">
    <span className="text">Selecciona dónde quieras pagar</span>
    <ContainerCarouselPaceToPayC />
    <ContainerInstructionC/>
  </div>
)

export default SectionPayOnline