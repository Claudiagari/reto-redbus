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
          instructions1: 'Indica que vas a realizar un pago a la empresa PAGOEFECTIVO',
          instructions2: 'Indica el Código CIP: 9125682 y el importe a pagar en Soles',
          instructions3: 'Agentes BCP. Brinda el código de empresa 02186',
          instructions4: 'Agencias BCP. Costo adicional: S/.1.00',
          typeEntity: 'Agentes y Bodegas',
          typeEntity2: 'Agencias'
        },
        {
          name: 'bbva',
          url: bbva,
          instructions1: 'Indica que vas a realizar un pago a la empresa PAGOEFECTIVO',
          instructions2: 'Indica el Código CIP: 9125682 y el importe a pagar en Soles.',
          instructions3: '',
          instructions4: '',
          typeEntity: 'Agentes y Bodegas',
          typeEntity2: 'Agencias'
        },
        {
          name: 'interbank',
          url: interbank,
          instructions1: 'Indica que vas a realizar un pago a la empresa PAGOEFECTIVO',
          instructions2: 'Indica el Código CIP: 9125682 y el importe a pagar en Soles.',
          instructions3: 'Agentes Interbank. Brinda el siguiente código 2735001',
          instructions4: 'Agencias Market de Interbank Costo adicional S/.2.00 ',
          typeEntity: 'Agentes y Bodegas',
          typeEntity2: 'Agencias'
        },
        {
          name: 'banbif',
          url: banbif,
          instructions1: 'Indica que vas a realizar un pago a la empresa PAGOEFECTIVO',
          instructions2: 'Indica el Código CIP: 9125682 y el importe a pagar en Soles.',
          instructions3: '',
          instructions4: '',
          typeEntity: 'Agencias'
        },
        {
            name: 'fullcarga',
            url: fullcarga,
            instructions1: 'Indica que vas a realizar un pago a la empresa PAGOEFECTIVO',
            instructions2: 'Indica el Código CIP: 9125682 y el importe a pagar en Soles.',
            instructions3: 'Encuentra a Full Carga en Bodegas, Farmacia, cabinas de Internet y Locutorios.',
            instructions4: '',
            typeEntity: 'Agentes y Bodegas'
          },
        {
            name: 'scotiabank',
            url: scotiabank,
            instructions1: 'Indica que vas a realizar un pago a la empresa PAGOEFECTIVO',
            instructions2: 'Indica el Código CIP: 9125682 y el importe a pagar en Soles.',
            instructions3: '',
            instructions4: '',
            typeEntity: 'Agentes y Bodegas',
            typeEntity2: 'Agencias'
          },
          {
            name: 'western',
            url: western,
            instructions1: 'Indica que vas a realizar un pago a la empresa PAGOEFECTIVO',
            instructions2: 'Indica el Código CIP: 9125682 y el importe a pagar en Soles.',
            instructions3: '',
            instructions4: '',
            typeEntity: 'Agentes y Bodegas'
          },
          {
            name: 'kasnet',
            url: kasnet,
            instructions1: 'Indica que vas a realizar un pago a la empresa PAGOEFECTIVO',
            instructions2: 'Indica el Código CIP: 9125682 y el importe a pagar en Soles.',
            instructions3: '',
            instructions4: '',
            typeEntity: 'Agentes y Bodegas'
          }
      ];
}