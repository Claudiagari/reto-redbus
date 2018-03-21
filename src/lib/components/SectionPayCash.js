import React from 'react' ;
import CarouselPlaceToPayC from './CarouselPlaceToPayC';
import InstructionsCash from './InstructionsCash'

/* Data según pago en efectivo */
const dataCash = [
  {
    id: 'bcp',
    url: 'bcp.png',
    instructions1: 'Selecciona la opción Pago de servicios > EMPRESAS > PAGOEFECTIVO > PAGOEFECTIVOSOLES.',
    instructions2: 'Ingresa tu código CIP: 9125682 y sigue los pasos'
  },
  {
    id: 'bbva',
    url: 'bbva.png',
    instructions1: 'Selecciona la opción Pago de servicios > De Instituciones y Empresas > Busca por nombre > PAGOEFECTIVO > PAGOEFECTIVOSOLES.',
    instructions2: 'Ingresa tu código CIP: 9125682 y sigue los pasos'
  },
  {
    id: 'interbank',
    url: 'interbank.png',
    instructions1: 'Selecciona la opción Pago a Instituciones o Empresa > Empresa: PAGOEFECTIVO > Servicio: PAGOEFECTIVO',
    instructions2: 'Ingresa tu código CIP: 9125682 y sigue los pasos'
  },
  {
    id: 'scotiabank',
    url: 'scotiabank.png',
    instructions1: 'Selecciona la opción Pagos > Otras Instituciones > Otros > Busca por Empresa/Servicio: PAGOEFECTIVO > Selecciona: PAGOEFECTIVO SOLES',
    instructions2: 'Ingresa tu código CIP: 9125682 y sigue los pasos'
  },
  {
    id: 'banbif',
    url: 'banbif.png',
    instructions1: 'Selecciona la opción Pago de servicio',
    instructions2: 'Ingresa tu código CIP: 9125682 y sigue los pasos'
  }
];

const SectionPayOnline = () => (
  <div className="place-pay">
    <span className="text">Selecciona dónde quieras pagar</span>
    <CarouselPlaceToPayC />
    <InstructionsCash/>
  </div>
)

export default SectionPayOnline