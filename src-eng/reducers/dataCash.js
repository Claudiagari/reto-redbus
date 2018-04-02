import bcp from '../assets/images/bcp.png';
import bbva from '../assets/images/bbva.png';
import interbank from '../assets/images/interbank2.jpg';
import scotiabank from '../assets/images/scotiabank.gif';
import banbif from '../assets/images/banbif.png';
import fullcarga from '../assets/images/full-carga.jpg';
import western from '../assets/images/western-union.png';
import kasnet from '../assets/images/kasnet.png';

export default function () {
    return [
        {
          name: 'bcp',
          url: bcp,
          instructions1: 'State that you are going to make a payment with the company PAGOEFECTIVO',
          instructions2: 'Provide the CIP code: 9125682 and the ammount to be paid in soles',
          instructions3: 'BCP Agents Prove the code of the company 02186',
          instructions4: 'BCP Agents: Additional cost S/.1.00',
          typeEntity: 'Agents',
          typeEntity2: 'agencies and grocery stores'
        },
        {
          name: 'bbva',
          url: bbva,
          instructions1: 'State that you are going to make a payment with the company PAGOEFECTIVO',
          instructions2: 'Provide the CIP code: 9125682 and the ammount to be paid in soles.',
          instructions3: '',
          instructions4: '',
          typeEntity: 'Agents',
          typeEntity2: 'agencies and grocery stores'
        },
        {
          name: 'interbank',
          url: interbank,
          instructions1: 'State that you are going to make a payment with the company PAGOEFECTIVO',
          instructions2: 'Provide the CIP code: 9125682 and the ammount to be paid in soles.',
          instructions3: 'Interbank Agents: provide the following code 2735001',
          instructions4: 'Interbank Agents: additional cost S/.2.00 ',
          typeEntity: 'Agents',
          typeEntity2: 'agencies and grocery stores'
        },
        {
          name: 'banbif',
          url: banbif,
          instructions1: 'State that you are going to make a payment with the company PAGOEFECTIVO',
          instructions2: 'Provide the CIP code: 9125682 and the ammount to be paid in soles.',
          instructions3: '',
          instructions4: '',
          typeEntity: 'Agencies'
        },
        {
            name: 'fullcarga',
            url: fullcarga,
            instructions1: 'State that you are going to make a payment with the company PAGOEFECTIVO',
            instructions2: 'Provide the CIP code: 9125682 and the ammount to be paid in soles.',
            instructions3: 'You can find Full Carga in grocery stores, farmacies, internet cafés and pariors.',
            instructions4: '',
            typeEntity: 'Agents and grocery stores'
          },
        {
            name: 'scotiabank',
            url: scotiabank,
            instructions1: 'State that you are going to make a payment with the company PAGOEFECTIVO',
            instructions2:'Provide the CIP code: 9125682 and the ammount to be paid in soles.',
            instructions3: '',
            instructions4: '',
            typeEntity: 'Agents',
            typeEntity2: 'agencies and grocery stores'
          },
          {
            name: 'western',
            url: western,
            instructions1:'State that you are going to make a payment with the company PAGOEFECTIVO',
            instructions2:'Provide the CIP code: 9125682 and the ammount to be paid in soles.',
            instructions3: '',
            instructions4: '',
            typeEntity: 'Agents and grocery stores'
          },
          {
            name: 'kasnet',
            url: kasnet,
            instructions1:'State that you are going to make a payment with the company PAGOEFECTIVO',
            instructions2: 'Provide the CIP code: 9125682 and the ammount to be paid in soles.',
            instructions3: '',
            instructions4: '',
            typeEntity: 'Agents and grocery stores'
          }
      ];
}