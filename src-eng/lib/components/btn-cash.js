import React from 'react'
import '../style/btn-efectivo.css'
import '../assets/icons/style.css'

const BtnCash = () => (
  <div className="container">
    <div className="row">
      <div className="col-12">
      <a href="https://ubicanos.pagoefectivo.pe/#/?tienda=[idServicio]&moneda=1&monto=100.00&ubicame=true&_k=p7jk0i" target="_blank" rel="noopener noreferrer" type="button" className="btn btn-lg btn-block btn-pago"><span className="icon-arrow-right-circle"></span> Find your payment point</a>
      </div>
    </div>
  </div>
)

export default BtnCash