import React from 'react'
import clock from '../assets/images/clock.png'
import '../style/info-compra.css'
import '../assets/icons/style.css'

const InfoCompra =() => (
  <div className="container">
    <div className="row info-compra">
      <div className="col-4 text-center info codigo">
        <p>Código de pago</p>
        <h3><strong>9125682</strong></h3>
      </div>
      <div className="col-4 text-center info total">
        <h4><strong>Total</strong></h4>
        <h4>S/.140.00</h4>
      </div>  
      <div className="col-4 text-center info fecha align-middle">
        <div className="row">
          <div className="col-4 align-middle">
          <span className="icon-alarmclock"></span>
          </div>
          <div className=" col-8 align-middle">
            <p>Tu orden expirará :</p>
            <h5>23 Feb - 01:12 p.m.</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default InfoCompra