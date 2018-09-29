import React, { Component } from 'react'
import axios from 'axios';
import { Consumer } from '../../context';

class BarraBusqueda extends Component {
	constructor() {
		super();
		this.state = {
			mostrarForm : true,
			textoBusqueda: '',
			filtro: '',
			check1: false,
			check2: false,
			check3: false,
		}
	}

	onBusquedaChange = e => {
		this.setState({
			textoBusqueda: e.target.value,
		})
	}

	handleBusqueda = () => {
		axios.get('https://www.googleapis.com/books/v1/volumes?q=' + this.state.filtro + ':' + this.state.textoBusqueda.split(' ').join('+'))
    .then(response => console.log(response))
	}

	// onClick={this.onDeleteClick.bind(this, id, dispatch)}

	render() {
		return (
			<Consumer>
				{value => {
					const { barraBusquedaFlag, dispatch } = value;

					return (
						<form className="card card-sm mb-1" onSubmit={this.handleBusqueda}>
							<div className="card-header">
							<h4 style={{float: 'left'}}>Búsqueda</h4>
							<i 
								className="fas fa-sort-down"
								onClick={() => dispatch({type: 'MOSTRAR_FORM_BUSQUEDA'})}
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