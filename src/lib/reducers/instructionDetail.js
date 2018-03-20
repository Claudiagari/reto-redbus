export default function (
    state = { name: 'bcp', 
              url: 'bcp.png', 
              instructions1: 'Selecciona la opción Pago de servicios > EMPRESAS > PAGOEFECTIVO > PAGOEFECTIVOSOLES.', 
              instructions2: 'Ingresa tu código CIP: 9125682 y sigue los pasos',
              instructions3: '' }, action) {
  switch(action.type) {
    case 'ITEM_SELECT': return action.payload;
  }
  return state;
}

