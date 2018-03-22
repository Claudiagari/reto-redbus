export default function (
    state = { name: 'bcp',
                url: 'bcp.png',
                instructions1: 'Indica que vas a realizar un pago a la empresa PAGOEFECTIVO',
                instructions2: 'Indica el Código CIP: 9125682 y el importe a pagar en Soles',
                instructions3: 'Agentes BCP. Brinda el código de empresa 02186',
                instructions4: 'Agencias BCP. Costo adicional: S/.1.00' }, action) {
  switch(action.type) {
    case 'ITEM_SELECT_CASH': return action.payload;
  }
  return state;
}