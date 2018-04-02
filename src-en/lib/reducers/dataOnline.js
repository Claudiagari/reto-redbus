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
          instructions1: 'Select the option Payment of Services > Search by Companies and type PAGOEFECTIVO > Select the Company PAGOEFECTIVO',
          instructions2: 'Enter your CIP code: 9125682 and follow the instructions.'
        },
        {
          name: 'bbva',
          url: bbva,
          instructions1: 'Select the optio Payment of Services > Of enterprises and institutions > search by name > PAGOEFECTIVO > PAGOEFECTIVOSOLES',
          instructions2: 'Enter your CIP code: 9125682 and follow the instructions.'
        },
        {
          name: 'interbank',
          url: interbank,
          instructions1: 'Select the options Payment to Institutions or Enterprise > Enterprise: PagoEfectivo > Service PAGOEFECTIVO',
          instructions2: 'Enter your CIP code: 9125682 and follow the instructions.'
        },
        {
          name: 'scotiabank',
          url: scotiabank,
          instructions1: 'Select the options Payment to Institutions or Enterprise > Enterprise: PagoEfectivo > Service PAGOEFECTIVO',
          instructions2: 'Enter your CIP code: 9125682 and follow the instructions.'
        },
        {
          name: 'banbif',
          url: banbif,
          instructions1: 'Select the option Payment of Services > Search by Companies and type PAGOEFECTIVO > Select the Company PAGOEFECTIVO',
          instructions2: 'Enter your CIP code: 9125682 and follow the instructions.'
        }
      ];
}