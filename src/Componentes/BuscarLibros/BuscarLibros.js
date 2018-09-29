import React, { Component } from 'react';

import BarraBusqueda from '../BarraBusqueda/BarraBusqueda';
import FormBusqueda from '../FormBusqueda/FormBusqueda';
import Libro from '../Libro/Libro';

class BuscarLibros extends Component {
  state = {
    libros: [
      {id:0, imagen:"https://http2.mlstatic.com/S_581221-MLA20725041553_052016-O.jpg", descripcion: "bla bla bla bla bla bla bla", titulo:"El principito", autor: "Antoine de Saint-Exupery", editorial: "Terramar"},
      {id:1, imagen:"https://images-na.ssl-images-amazon.com/images/I/71qTpmsuTHL.jpg", descripcion:"bla bla bla bla bla bla bla", titulo:"Fahrenheit 451", autor:"Ray Bradbury", editorial:"minotauro"},
      {id:2, imagen:"https://libretec.com/16221-large_default/1984-tapa-dura.jpg", descripcion:"", titulo:"1984", autor:"Ray Bradbury", editorial:"Lumen"}
    ]
  }

  render() {
    const listaLibros = this.state.libros.map(libro => {
      return(
        <Libro 
          imagen={libro.imagen}
          descripcion={libro.descripcion}
          titulo={libro.titulo}
          autor={libro.autor}
          editorial={libro.editorial}
          key={libro.id}
        />
      )
    })
    return(
      <div>
        <BarraBusqueda/>
        <FormBusqueda/>
        <div className="row">{listaLibros}</div>
      </div>
    )
  }
}

export default BuscarLibros;