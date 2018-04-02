export default function (
    state = { name: 'bcp', 
              url: 'bcp.png', 
              instructions1: 'Select the option Payment of Services > Search by Companies and type PAGOEFECTIVO > Select the Company PAGOEFECTIVO', 
              instructions2: 'Enter your CIP code: 9125682 and follow the instructions.',
              instructions3: '' }, action) {
  switch(action.type) {
    case 'ITEM_SELECT': return action.payload;
  }
  return state;
}

