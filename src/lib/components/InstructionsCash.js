import React from 'react';

const InstructionsCash = ({dataInstructionsCash}) => (
  <div className="instructions">
    <h6>Instrucciones de pago</h6>
    <p>{dataInstructionsCash.instructions1}</p>
    <p>{dataInstructionsCash.instructions2}</p>
    <span className="instruction3">{dataInstructionsCash.instructions3}</span>
    <span className="instruction3 right">{dataInstructionsCash.instructions4}</span>
    </div>
)

export default InstructionsCash