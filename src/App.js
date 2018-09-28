import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './Componentes/NotFound/NotFound';

import BarraBusqueda from './Componentes/BarraBusqueda/BarraBusqueda';
import Header from './Componentes/Header/Header';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App container">
        <Header />
        <Switch>
              <Route exact path="/" component={BarraBusqueda}/>
              <Route exact path="/libros"/>
              <Route exact path="/contacto" />
              <Route component={NotFound} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
