import React, { Component } from 'react'
import { Consumer } from '../../context';
import axios from 'axios';

class BarraBusqueda extends Component {
	constructor() {
		super();
		this.state = {
			textoBusqueda: '',
		}
	}

	onBusquedaChange = e => {
		this.setState({
			textoBusqueda: e.target.value.split(' ').join('+'),
		})
	}

	handleBusqueda = (dispatch) => {
		axios.get('https://www.googleapis.com/books/v1/volumes?q=' + this.state.textoBusqueda)
		.then(resp => dispatch({type: 'GET_LIBROS', payload: resp}))	
	}

	render() {
		return (
			<Consumer>
				{value => {
					const { barraBusquedaFlag, dispatch } = value;

					return (
						<form className="card card-sm mb-1" onSubmit={this.handleBusqueda.bind(this, dispatch)}>
							<div className="card-header" onClick={() => dispatch({type: 'MOSTRAR_FORM_BUSQUEDA'})}>
							<h4 style={{float: 'left'}}>Búsqueda</h4>
							<i 
								className="fas fa-sort-down"								
								style={{float:'right'}}
							/>
							</div>
							{barraBusquedaFlag ? (<div className="card-body ">
								<div className="row no-gutters align-items-center">
									<div className="col">
											<input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Busca tus libros favoritos" onChange={this.onBusquedaChange} />
									</div>
									<div className="col-auto">
											<button className="btn btn-lg btn-success">Buscar</button>
									</div><br/>
								</div>
							</div>) : null}
						</form>
					)
				}}
			</Consumer>
		)
  }
}

export default BarraBusqueda;