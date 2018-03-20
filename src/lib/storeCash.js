import {createStore} from 'redux';
const initialState= [
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


const storeCash = createStore(
  (state) => state,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default storeCash