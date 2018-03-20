import React from 'react' ;
import ContainerCarouselPaceToPay from '../containers/Container-carrousel';
import ContainerInstruction from '../containers/Container-Instructions';


/* Falta instruction 1 de banbif*/
const SectionPayOnline = () => (
  <div className="place-pay">
    <span className="text">Selecciona dónde quieras pagar</span>
    <ContainerCarouselPaceToPay />
    <span className="text">Puedes paga desde la Web o App móvil del Banco</span>
    <ContainerInstruction/>
  </div>
)

export default SectionPayOnline