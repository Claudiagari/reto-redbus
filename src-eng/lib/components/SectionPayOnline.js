import React from 'react' ;
import ContainerCarouselPaceToPay from '../containers/Container-carrousel';
import ContainerInstruction from '../containers/Container-Instructions';


/* Falta instruction 1 de banbif*/
const SectionPayOnline = () => (
  <div className="place-pay">
    <span className="text">Select your bank</span>
    <ContainerCarouselPaceToPay />
    <span className="text">You can pay through the web or the mobile app of each Bank</span>
    <ContainerInstruction/>
  </div>
)

export default SectionPayOnline