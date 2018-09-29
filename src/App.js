import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './Componentes/NotFound/NotFound';
import './App.css';
import Header from './Componentes/Header/Header';
import BuscarLibros from './Componentes/BuscarLibros/BuscarLibros';
import Contacto from './Componentes/Contacto/Contacto';
import { Provider } from './context';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
        <div className="App text-center">
          <Header />
          <Switch>
                <Route exact path="/" component={BuscarLibros}/>
                <Route exact path="/contacto" component={Contacto} />
                <Route component={NotFound} />
          </Switch>
        </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
