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
            listaLibros = libros.data.items.volumeInfo.map(libro => {
              return (
                <Libro>
                  imagen={libro.imageLinks.thumbnail}
                  descripcion={libro.description}
                  titulo={libro.title}
                  autor={libro.authors[0]}
                  editorial={libro.publisher}
                  {/* key={} */}
                </Libro>
              )
            })
          }
          return (
            <div>
              <BarraBusqueda/>
              <FormBusqueda/>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default BuscarLibros;