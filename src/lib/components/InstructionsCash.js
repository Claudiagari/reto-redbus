import React from 'react';

const InstructionsCash = ({dataInstructionsCash}) => (
  <div className="instructions">
    <h6>Instrucciones de pago</h6>
    <p>{dataInstructionsCash.instructions1}</p>
    <p>{dataInstructionsCash.instructions2}</p>
    <p className="instruction3 "><span style={{...(dataInstructionsCash.instructions3 === '' ? {display:'none'} : {color:'#e0aa00', fontSize: '12px', fontWeight: 'bold'} )}}>(*)</span> {dataInstructionsCash.instructions3}</p>
    <p className="instruction3 right"><span style={{...(dataInstructionsCash.instructions4 === '' ? {display:'none'} : {color:'#e0aa00', fontSize: '12px', fontWeight: 'bold'} )}}>(*)</span> {dataInstructionsCash.instructions4}</p>
  </div>
)

export default InstructionsCash