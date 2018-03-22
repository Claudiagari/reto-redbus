import React from 'react';

const InstructionsCash = ({dataInstructionsCash}) => (
  <div className="instructions">
    <h6>Instrucciones de pago</h6>
    <p>{dataInstructionsCash.instructions1}</p>
    <p>{dataInstructionsCash.instructions2}</p>
    <p className="instruction3">{dataInstructionsCash.instructions3}</p>
  </div>
)

export default InstructionsCash