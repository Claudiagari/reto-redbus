import React from 'react' ;
import CarouselPaceToPay from './CarouselPlaceToPay';
import Instructions from './Instructions'

/* Data según pago por internet */
const dataOnline = [
  {
    id: 'bcp',
    url: 'bcp.png',
    instructions1: 'Selecciona la opción Pago de ',
    instructions2: 'Ingresa tu código CIP: 9125682 y sigue los pasos'
  },
  {
    id: 'bbva',
    url: 'bbva.png',
    instructions1: 'Selecciona la opción Pago de ',
    instructions2: 'Ingresa tu código CIP: 9125682 y sigue los pasos'
  },
  {
    id: 'interbank',
    url: 'interbank.png',
    instructions1: 'Selecciona la opción Pago ',
    instructions2: 'Ingresa tu código CIP: 9125682 y sigue los pasos'
  },
  {
    id: 'scotiabank',
    url: 'scotiabank.png',
    instructions1: 'Selecciona la opción Pago',
    instructions2: 'Ingresa tu código CIP: 9125682 y sigue los pasos'
  },
  {
    id: 'banbif',
    url: 'banbif.png',
    instructions1: 'Selecciona la opción Pago de servicio',
    instructions2: 'Ingresa tu código CIP: 9125682 y sigue los pasos'
  }
];
/* Falta instruction 1 de banbif*/
const SectionPayOnline = () => (
  <div className="place-pay">
    <span className="text">Selecciona dónde quieras pagar</span>
    <CarouselPaceToPay />
    <span className="text">Puedes paga desde la Web o App móvil del Banco</span>
    <Instructions/>
  </div>
)

export default SectionPayOnline