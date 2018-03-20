import React from 'react';

const Instructions = ({dataInstructions}) => (
  <div className="instructions">
    <h6>Instrucciones de pago</h6>
    <p>{dataInstructions.instructions1}</p>
    <p>{dataInstructions.instructions2}</p>
    <p className="instruction3">{dataInstructions.instructions3}</p>
  </div>
)

export default Instructions