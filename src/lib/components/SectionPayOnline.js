import React from 'react' ;
import CarouselPaceToPay from './CarouselPlaceToPay';
import Instructions from './Instructions'

/* Data según pago por internet */
const SectionPayOnline = () => (
  <div>
    <span className="text">Selecciona dónde quieras pagar</span>
    <CarouselPaceToPay />
    <span className="text">Puedes paga desde la Web o App móvil del Banco</span>
    <Instructions/>
  </div>
)

export default SectionPayOnline