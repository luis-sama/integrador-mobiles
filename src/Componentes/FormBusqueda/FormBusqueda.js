import React, { Component } from 'react'
import { Consumer } from '../../context';

class FormBusqueda extends Component {
	constructor() {
		super();
		this.state = {
			textoBusquedaTitulo: '',
			textoBusquedaAutor: '',
			textoBusquedaGenero: ''
		}
	}

	onBusquedaChange = e => {
		switch (e.target.id) {
			case 'titulo':
				this.setState({
					textoBusquedaTitulo: e.target.value.split(' ').join('+'),
				})
				break;
			case 'autor':
				this.setState({
					textoBusquedaAutor: e.target.value.split(' ').join('+'),
				})
				break;
			case 'genero':
				this.setState({
					textoBusquedaGenero: e.target.value.split(' ').join('+'),
				})
				break;
			default:
				null
		}
	}

	handleBusqueda = (dispatch) => {
		let url = 'https://www.googleapis.com/books/v1/volumes?q=';
		if (this.state.textoBusquedaTitulo !== '') {url += 'intitle:' + this.state.textoBusquedaTitulo + '+'}
		if (this.state.textoBusquedaAutor !== '') {url += 'inauthor:' + this.state.textoBusquedaAutor + '+'}
		if (this.state.textoBusquedaGenero !== '') {url += 'subject:' + this.state.textoBusquedaGenero}

		// axios.get(url) 
		// .then(resp => dispatch({type: 'GET_LIBROS', payload: resp}))			
		console.log(url)
	}

	render() {
		return (
			<Consumer>
				{value => {
					const { formBusquedaFlag, dispatch } = value;

					return (
						<form className="card card-sm mb-1" onSubmit={this.handleBusqueda.bind(this, dispatch)}>
							<div className="card-header" onClick={() => dispatch({type: 'MOSTRAR_FORM_BUSQUEDA'})}>
								<h4 style={{float: 'left'}}>Búsqueda avanzada</h4>
								<i 
									className="fas fa-sort-down"
									style={{float:'right'}}
								/>
							</div>

							{ formBusquedaFlag ? (<div className="card-body ">
								<div className="form-group">
									<label style={{float: 'left'}}>Título</label>
									<input
										type="text" 
										className="form-control" 
										id="titulo" 
										aria-describedby="emailHelp" 
										placeholder="Búsqueda por título" 
										onChange={this.onBusquedaChange}
									/>
								</div>
								<div className="form-group">
									<label style={{float: 'left'}}>Autor</label>
									<input 
										type="text" 
										className="form-control" 
										id="autor" 
										placeholder="Búsqueda por autor"
										onChange={this.onBusquedaChange}
									/>
								</div>
								<div className="form-group">
									<label style={{float: 'left'}}>Género</label>
									<select className="form-control" id="genero" onChange={this.onBusquedaChange}>
										<option></option>
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