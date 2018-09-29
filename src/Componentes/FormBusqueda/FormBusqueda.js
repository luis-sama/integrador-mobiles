import React, { Component } from 'react'
import { Consumer } from '../../context';

class FormBusqueda extends Component {
	constructor() {
		super();
		this.state = {
			mostrarForm: false,
		}
	}

	render() {
		return (
			<Consumer>
				{value => {
					const { formBusquedaFlag, dispatch } = value;

					return (
						<form className="card card-sm mb-1" >
							<div className="card-header">
								<h4 style={{float: 'left'}}>Búsqueda avanzada</h4>
								<i 
									className="fas fa-sort-down"
									onClick={() => dispatch({type: 'MOSTRAR_FORM_BUSQUEDA'})}
									style={{float:'right'}}
								/>
							</div>

							{ formBusquedaFlag ? (<div className="card-body ">
								<div className="form-group">
									<label style={{float: 'left'}}>Escribí un título</label>
									<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Título"/>
								</div>
								<div className="form-group">
									<label style={{float: 'left'}}>Ingresá un autor</label>
									<input type="text" className="form-control" id="exampleInputPassword1" placeholder="Autor"/>
								</div>
								<div className="form-group">
									<label style={{float: 'left'}}>Género</label>
									<select className="form-control" id="exampleFormControlSelect1">
										<option>Ciencia ficción</option>
										<option>Acción</option>
										<option>Policiales</option>
										<option>Romance</option>
										<option>Super Saiyan</option>
									</select>
								</div>
								<div className="col-auto">
									<button className="btn btn-lg btn-success">Buscar</button>
								</div>
							</div>) : null }
						</form>
					)
				}}
			</Consumer>
		)
	}
}

export default FormBusqueda;