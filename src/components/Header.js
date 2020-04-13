import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <header className="site-header inicio">
        <div className="contenedor contenido-header">
          <div className="barra">
            {/*  <Link to="/">
              <img src="img/logo.svg" className="" />
            </Link> */}

            <nav id="" className="navegacion">
              <Link to="/">Inicio</Link>
              <Link to="Nosotros">Nosotros</Link>
            </nav>
            <h3>TheCocktailDB</h3>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
