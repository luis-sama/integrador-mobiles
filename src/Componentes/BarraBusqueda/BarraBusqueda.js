import React, { Component } from 'react'
import axios from 'axios';

class BarraBusqueda extends Component {
	constructor() {
		super();
		this.state = {
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

	onCheckChange = e => {
		switch (e.target.id) {
			case 'intitle':
				this.setState({
					check1: !this.state.check1,
					filtro: 'intitle'
				})
				console.log('Check1: ' + !this.state.check1);
				break;
			case 'inauthor':
				this.setState({
					check2: !this.state.check2,
					filtro: 'inauthor'
				})
				console.log('Check2: ' + !this.state.check2);
				break;
			case 'subject':
				this.setState({
					check3: !this.state.check3,
					filtro: 'subject'
				})
				console.log('Check3: ' + !this.state.check3);
				break;
			default:
				break;
		}
	}

	render() {
    return (
      <div>
        <form className="card card-sm mb-1" onSubmit={this.handleBusqueda}>
          <div className="card-body ">
						<div className="row no-gutters align-items-center">
							<div className="col">
									<input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Busca tus libros favoritos" onChange={this.onBusquedaChange} />
							</div>
							<div className="col-auto">
									<button className="btn btn-lg btn-success">Buscar</button>
							</div><br/>
						</div>
						<div className="row no-gutters align-items-center">
							<div className="form-check">
								<input type="checkbox" className="form-check-input" id="intitle" onChange={this.onCheckChange}/>
								<label className="form-check-label" htmlFor="intitle">Por título</label>
							</div>
							<div className="form-check">
								<input type="checkbox" className="form-check-input" id="inauthor" onChange={this.onCheckChange}/>
								<label className="form-check-label" htmlFor="inauthor">Por autor</label>
							</div>
							<div className="form-check">
								<input type="checkbox" className="form-check-input" id="subject" onChange={this.onCheckChange}/>
								<label className="form-check-label" htmlFor="subject">Por genero</label>
							</div>
						</div>
          </div>
        </form>
      </div>
    )
  }
}

export default BarraBusqueda;