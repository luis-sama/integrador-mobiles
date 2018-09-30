import React, { Component } from 'react';
import BarraBusqueda from '../BarraBusqueda/BarraBusqueda';
import FormBusqueda from '../FormBusqueda/FormBusqueda';
import Libro from '../Libro/Libro';
import { Consumer } from '../../context';

class BuscarLibros extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { libros } = value
          let listaLibros = null
          if (libros) {
            listaLibros = libros.data.items.map(libro => {
              return (
                <div className="col-md-2 m-1">
                <Libro
                  imagen={libro.volumeInfo.imageLinks.thumbnail}
                  descripcion={libro.volumeInfo.description}
                  titulo={libro.volumeInfo.title}
                  autor={libro.volumeInfo.authors}
                  editorial={libro.volumeInfo.publisher}
                  id={libro.id}
                  key={libro.id}
                />
                </div>
              )
            })
          }
          return (
            <div>
              <BarraBusqueda/>
              <FormBusqueda/>
              <div className="row justify-content-center">
                {listaLibros}
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default BuscarLibros;