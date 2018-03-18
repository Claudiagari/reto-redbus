import React from "react";

import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import Internet from './internet';
import Efectivo from './efectivo';

const App = () => (
  <HashRouter>
  <div>
    <div className="col-2">
      <img className="img-fluid" src="pagoefectivo.png" alt="" />
    </div>
    <ul className="header">
      <li><NavLink to="/" className="active">Banca por internet</NavLink></li>
      <li><NavLink to="/efectivo" className="active">Pagar en efectivo</NavLink></li>
      
    </ul>
    <div className="content"> 
    <Route exact path="/" component={Internet} />
    <Route path="/efectivo" component={Efectivo} />
     
    </div>
  </div>
  </HashRouter>
);

export default App;