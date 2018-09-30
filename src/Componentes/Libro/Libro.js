import React from 'react';
import { Link } from 'react-router-dom';

const Libro = props => {

  return (
    <div>
      <div className="card">
        <img className="card-img-top" src={props.imagen} alt="Tapa"/>
        <div className="card-body">
          <button type="button" className="btn btn-outline-info" data-toggle="modal" data-target={`#exampleModal${props.id}`}>
            Leer descripción
          </button>
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

      <div className="modal fade" id={`exampleModal${props.id}`} tabIndex="-1" role="dialog" aria-labelledby={`exampleModalLabel${props.id}`} aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`exampleModalLabel${props.id}`}>Descripción de {props.titulo}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {props.descripcion}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Libro;