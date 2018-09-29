import React from 'react';
import { Link } from 'react-router-dom';

const Libro = props => {

  return (
    <div className="col-md-2 m-1">
      <div className="card">
        <img className="card-img-top" src={props.imagen} alt="Tapa"/>
        <div className="card-body">
          <p className="card-text" style={{height:20}}>Descripción: <i>"{props.descripcion}"</i></p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{props.titulo}</li>
          <li className="list-group-item">{props.autor}</li>
          <li className="list-group-item">{props.editorial}</li>
        </ul>
        <div className="card-body">
          <Link to={`/compartir-libro/${props.id}`} className="btn btn-primary">
            Compartir con un amigo
          </Link>
        </div>
      </div> 
    </div>
  )
}

export default Libro;