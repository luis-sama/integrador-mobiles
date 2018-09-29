import React, { Component } from 'react'

class FormBusqueda extends Component {
	constructor() {
		super();
		this.state = {
			mostrarForm: false,
		}
	}

	render() {
		const { mostrarForm } = this.state
		return (
			<form className="card card-sm mb-1" >
				<div class="card-header">
					<h4 style={{float: 'left'}}>Búsqueda avanzada</h4>
					<i 
						className="fas fa-sort-down"
						onClick={() => this.setState({mostrarForm:!mostrarForm})}
						style={{float:'right'}}
					/>
				</div>

				{ mostrarForm ? (<div className="card-body ">
					<div className="form-group">
						<label style={{float: 'left'}}>Escribí un título</label>
						<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Título"/>
					</div>
					<div className="form-group">
						<label style={{float: 'left'}}>Ingresá un autor</label>
						<input type="text" className="form-control" id="exampleInputPassword1" placeholder="Autor"/>
					</div>
					<div class="form-group">
						<label style={{float: 'left'}}>Género</label>
						<select class="form-control" id="exampleFormControlSelect1">
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
	}
}

export default FormBusqueda;