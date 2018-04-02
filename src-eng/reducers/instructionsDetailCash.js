export default function (
    state = {  name: 'bcp',
    url: 'bcp.png',
    instructions1: 'State that you are going to make a payment with the company PAGOEFECTIVO',
    instructions2: 'Provide the CIP code: 9125682 and the ammount to be paid in soles',
    instructions3: 'BCP Agents Prove the code of the company 02186',
    instructions4: 'BCP Agents: Additional cost S/.1.00'}, action) {
  switch(action.type) {
    case 'ITEM_SELECT_CASH': return action.payload;
  }
  return state;
}