import React, { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Login from "./components/Login";
import Nosotros from "./components/Nosotros";
import Compartir from "./components/Compartir";

import CategoriasProvider from "./context/CategoriasContext";
import RecetasProvider from "./context/RecetasContext";
import ModalProvider from "./context/ModalContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <CategoriasProvider>
          <RecetasProvider>
            <ModalProvider>
              <Header />
              <Route exact path="/" component={Login} />
              <Route exact path="/nosotros" component={Nosotros} />
              <Route exact path="/compartir" component={Compartir} />
              <Footer />
            </ModalProvider>
          </RecetasProvider>
        </CategoriasProvider>
      </Switch>
    </Router>
  );
}

export default App;
