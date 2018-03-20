import bcp from '../assets/images/bcp.png';
import bbva from '../assets/images/bbva.png';
import interbank from '../assets/images/interbank2.jpg';
import scotiabank from '../assets/images/scotiabank.gif';
import banbif from '../assets/images/banbif.png';

export default function () {
    return [
        {
          name: 'bcp',
          url: bcp,
          instructions1: 'Selecciona la opción Pago de servicios > EMPRESAS > PAGOEFECTIVO > PAGOEFECTIVOSOLES.',
          instructions2: 'Ingresa tu código CIP: 9125682 y sigue los pasos'
        },
        {
          name: 'bbva',
          url: bbva,
          instructions1: 'Selecciona la opción Pago de servicios > De Instituciones y Empresas > Busca por nombre > PAGOEFECTIVO > PAGOEFECTIVOSOLES.',
          instructions2: 'Ingresa tu código CIP: 9125682 y sigue los pasos'
        },
        {
          name: 'interbank',
          url: interbank,
          instructions1: 'Selecciona la opción Pago a Instituciones o Empresa > Empresa: PAGOEFECTIVO > Servicio: PAGOEFECTIVO',
          instructions2: 'Ingresa tu código CIP: 9125682 y sigue los pasos'
        },
        {
          name: 'scotiabank',
          url: scotiabank,
          instructions1: 'Selecciona la opción Pagos > Otras Instituciones > Otros > Busca por Empresa/Servicio: PAGOEFECTIVO > Selecciona: PAGOEFECTIVO SOLES',
          instructions2: 'Ingresa tu código CIP: 9125682 y sigue los pasos'
        },
        {
          name: 'banbif',
          url: banbif,
          instructions1: 'Selecciona la opción Pago de servicio',
          instructions2: 'Ingresa tu código CIP: 9125682 y sigue los pasos'
        }
      ];
}