import React, { Component } from 'react';
import BarraBusqueda from '../BarraBusqueda/BarraBusqueda';
import FormBusqueda from '../FormBusqueda/FormBusqueda';
import Libro from '../Libro/Libro';
import { Consumer } from '../../context';

class BuscarLibros extends Component {
  pasarPagina = () => {

  }
  render() {
    return (
      <Consumer>
        {value => {
          const { libros, dispatch } = value
          let listaLibros = null
          let botones = null
          if (libros) {
            if (libros.data.totalItems !== 0) {
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
              botones = <div>
                <button className="btn btn-lg btn-success" onClick={() => dispatch({type: 'PAGINA_ANTERIOR'})}><i className="fas fa-angle-double-left"/></button>
              <button className="btn btn-lg btn-success" onClick={() => dispatch({type: 'PAGINA_SIGUIENTE'})}><i className="fas fa-angle-double-right"/></button>
              </div>
            } else {
              listaLibros = <h1>No se encontraron coincidencias</h1>
            }
          }
          return (
            <div>
              <BarraBusqueda/>
              <FormBusqueda/>
              <div className="row justify-content-center">
                {listaLibros}
              </div>
              {botones}
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default BuscarLibros;