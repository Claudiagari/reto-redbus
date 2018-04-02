import React from "react";
import {BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";
import Online from './online';
import logo from '../assets/images/pagoefectivo.png';

const App = () => (
  <Router>
    <div className="container">
    <div className="row">
    <div className="col-6 col-md-2">
      <img className="img-fluid" src={logo} alt="logo" />
    </div>
    </div>
    <ul className="header ">
      <li><NavLink  exact className="title" activeStyle={{fontWeight: 'bold', color: '#e0aa00',border:'1px solid #e0aa00', borderRadius:'5px', borderBottom:'0px'}} to="/reto-redbus" >Online Banking</NavLink></li>
    </ul>
    <div className="content"> 
    <Route exact path="/reto-redbus" component={Online} />
    </div>
    </div>
  </Router>
);

export default App;