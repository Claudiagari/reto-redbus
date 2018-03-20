import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Internet from './internet';
import Efectivo from './efectivo';
import logo from '../assets/images/pagoefectivo.png';
import { Provider } from 'react-redux';

const App = () => (
  <Provider>
  <Router>
  <div>
    <div className="col-2">
      <img className="img-fluid" src={logo} alt="logo" />
    </div>
    <ul className="header">
      <li><Link to="/" className="active">Banca por internet</Link></li>
      <li><Link to="/efectivo" className="active">Pagar en efectivo</Link></li>
      
    </ul>
    <div className="content"> 
    <Route exact path="/" component={Internet} />
    <Route path="/efectivo" component={Efectivo} />
     
    </div>
  </div>
  </Router>
  </Provider>
);

export default App;