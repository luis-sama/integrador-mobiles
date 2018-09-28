import React, { Component } from 'react'
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
			textoBusqueda: e.target.value
		})
	}

	handleBusqueda = () => {
		axios.get('https://www.googleapis.com/books/v1/volumes?q=intitle:' + this.state.textoBusqueda.split(' ').join('+'))
    .then(response => console.log(response))
	}

	render() {
    return (
      <div>
        <form className="card card-sm mt-2" onSubmit={this.handleBusqueda}>
          <div className="card-body row no-gutters align-items-center">
              <div className="col">
									<input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Busca tus libros favoritos" onChange={this.onBusquedaChange}/>
              </div>
              <div className="col-auto">
                  <button className="btn btn-lg btn-success">Buscar</button>
              </div>
          </div>
        </form>
      </div>
    )
  }
}

export default BarraBusqueda;