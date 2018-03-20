import React from 'react'
import '../style/footer.css'
import '../assets/icons/style.css'
import logo from '../assets/images/pagoefectivo.png'

const Footer = () => (
  <div className="container footer">
    <div className="row">
      <div className="col-4 space row d-flex justify-content-center ">
        <div className="col-6 text-center align-self-center">
          <span>Instrucciones vía </span>
        </div>
        <div className="col-6 text-left">
          <a href=""><span className="icon-printer"></span></a>
        </div>
      </div>
      <div className="col-4 space  align-self-center text-center">
        <span>Ayuda: <a href="" className="email"><span>contacto@redbus.pe</span></a></span>
      </div>
      <div className="col-4 space row d-flex justify-content-center ">
        <div className="col-6 text-right align-self-center">
          <span>Pago vía</span>
        </div>
        <div className="col-6 ">
          <a href=""><img className="img-fluid" src={logo} alt="logo"/></a>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
