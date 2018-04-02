import React from 'react'
import '../style/footer.css'
import '../assets/icons/style.css'
import logo from '../assets/images/pagoefectivo.png'

const Footer = () => (
  <div className="container footer">
    <div className="row">
      <div className="col-12 col-md-4 space row d-flex justify-content-center ">
        <div className="col-6 text-right align-self-center">
          <span>Instructions </span>
        </div>
        <div className="col-6 text-left">
          <a href=""><i className="icon-printer"></i></a>
        </div>
      </div>
      <div className="col-6 col-md-4 space  align-self-center text-center">
        <span>Assistance: <a href="" className="email"><span>contacto@redbus.pe</span></a></span>
      </div>
      <div className="col-6 col-md-4 space row d-flex justify-content-center ">
        <div className="col-6 text-right align-self-center">
          <span>Payment by</span>
        </div>
        <div className="col-6 align-self-center">
          <a href=""><img className="img-fluid" src={logo} alt="logo"/></a>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
