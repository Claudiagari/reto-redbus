import React from 'react'
import clock from '../assets/images/clock.png'
import '../style/info-compra.css'

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
      <div className="col-4 text-center info fecha">
        <div className="row">
          <div className="col-3">
            <img className="align-self-center  img-fluid" src={clock} alt="clock"/>
          </div>
          <div className=" col-9">
            <p>Tu orden expirará :</p>
            <h5>23 Feb - 01:12 p.m.</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default InfoCompra