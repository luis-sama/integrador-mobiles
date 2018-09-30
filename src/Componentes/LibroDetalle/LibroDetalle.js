import React from 'react';

const LibroDetalle = props => {
  return (
    <div class="row justify-content-center">
      <div class="col-md-4">
        <img class="card-img-top" src={props.imagen} alt="Tapa del libro"/>
      </div>

      <div class="col-md-4">
        <div class="card">
          <div class="card-header">
            {props.titulo}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Autor: {props.autor}</li>
            <li class="list-group-item">Editorial: {props.editorial}</li>
            <li class="list-group-item">Páginas: {props.paginas}</li>
            <li class="list-group-item">Categoría/s: {props.categoria}</li>
            <li class="list-group-item">Puntación: {props.puntuacion}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LibroDetalle;