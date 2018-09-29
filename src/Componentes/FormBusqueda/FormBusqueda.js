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
					Búsqueda avanzada
					<i 
						className="fas fa-sort-down"
						onClick={() => this.setState({mostrarForm:!mostrarForm})}
					/>
				</div>

				{ mostrarForm ? (<div className="card-body ">
					<div className="form-group">
						<label>Título</label>
						<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Título"/>
					</div>
					<div className="form-group">
						<label>Autor</label>
						<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Autor"/>
					</div>
					<div class="form-group">
						<label>Género</label>
						<select class="form-control" id="exampleFormControlSelect1">
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
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