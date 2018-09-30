import React, { Component } from 'react';
import axios from 'axios';
import LibroDetalle from '../LibroDetalle/LibroDetalle';

class CompartirLibro extends Component {
  state = {
    correoEmisor: '',
    correoDestino:'',
    nombre: '',
    apellido: '',
    enlace:'',
    libroData: <LibroDetalle />
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
    this.setState({
      libroData:
        <LibroDetalle 
          imagen={res.data.volumeInfo.imageLinks.thumbnail}
          titulo={res.data.volumeInfo.title}
          autor={res.data.volumeInfo.authors}
          editorial={res.data.volumeInfo.publisher}
          paginas={res.data.volumeInfo.pageCount}
          categoria={res.data.volumeInfo.categories}
          puntuacion={res.data.volumeInfo.averageRating}
          key={res.data.id}
        />,
      enlace: res.data.volumeInfo.infoLink
    });
    console.log(res.data)
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  onSubmit = () => {
    alert('hola')
    }

  render() {
    return (
    <div>
      <div className="row justify-content-center mt-2">
        <div className="col-md-8">{this.state.libroData}</div>
      </div>

      <div className="row justify-content-center mt-2">
        <div className="col-md-8">{this.state.error}</div>
      </div>

      <form onSubmit={this.onSubmit.bind(this)}>
        <div className="row justify-content-center mt-2">
        <div className="col-md-6">

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Información del libro</span>
          </div>
          <input 
            className="form-control" 
            value={this.state.enlace}
            disabled
          />
        </div>
        
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Correo emisor</span>
          </div>
          <input 
            type="email" 
            className="form-control" 
            name="correoEmisor" 
            value={this.state.correoEmisor}
            onChange={this.onChange}
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Correo destino</span>
          </div>
          <input 
            type="email" 
            className="form-control" 
            name="correoDestino" 
            value={this.state.correoDestino}
            onChange={this.onChange}
          />
        </div>

        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Nombre y apellido</span>
          </div>
          <input 
            type="text" 
            name="nombre" 
            className="form-control" 
            value={this.state.nombre}
            onChange={this.onChange}
          />
          <input 
            type="text" 
            name="apellido" 
            className="form-control" 
            value={this.state.apellido}
            onChange={this.onChange}
          />
        </div>        

        <input className="btn btn-success mt-2" value="Enviar mail" type="submit"/>
        </div>
        </div>
      </form>
    </div>
    )
  }
}

export default CompartirLibro;