import React from 'react';

const LibroDetalle = props => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-4">
        <img className="card-img-top" src={props.imagen} alt="Tapa del libro"/>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-header">
            {props.titulo}
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Autor: {props.autor}</li>
            <li className="list-group-item">Editorial: {props.editorial}</li>
            <li className="list-group-item">Páginas: {props.paginas}</li>
            <li className="list-group-item">Categoría/s: {props.categoria}</li>
            <li className="list-group-item">Puntación: {props.puntuacion}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LibroDetalle;