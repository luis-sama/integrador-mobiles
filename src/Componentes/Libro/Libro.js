import React from 'react';

const Libro = props => {
  return (
    <div className="col-md-3 m-1">
      <div className="card">
        <img className="card-img-top" src={props.imagen} alt="Tapa"/>
        <div className="card-body">
          <p className="card-text">Descripción: <i>"{props.descripcion}"</i></p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{props.titulo}</li>
          <li className="list-group-item">{props.autor}</li>
          <li className="list-group-item">{props.editorial}</li>
        </ul>
      </div> 
    </div>
  )
}

export default Libro;