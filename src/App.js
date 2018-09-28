import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import BarraBusqueda from './Componentes/BarraBusqueda/BarraBusqueda'
class App extends Component {
  render() {
    return (
      <div className="App container">
        <h1>Libro - Sama</h1>
        <BarraBusqueda/>
      </div>
    );
  }
}

export default App;
