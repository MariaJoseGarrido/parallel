import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import About from "./Components/about";
import Contact from "./Components/contact";
import Home from "./Components/home";
import Portafolio from "./Components/portafolio";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <Link to="/" className="btn btn-light"> 
          Inicio
          </Link>
          <NavLink to="/sobre-mi" className="btn btn-light" activeClassName="active"> 
          Sobre mi
          </NavLink>
          <NavLink to="/portafolio" className="btn btn-light" activeClassName="active"> 
          Portafolio
          </NavLink> 
          <NavLink to="/contacto" className="btn btn-light" activeClassName="active"> 
            Contacto
          </NavLink>
        </div>
        <hr/>
        <Switch>
          <Route path="/contacto">
            <Contact />
          </Route>
          <Route path="/portafolio">
            <Portafolio />
          </Route>
          <Route path="/sobre-mi">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
