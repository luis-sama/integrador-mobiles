import React, { Component } from 'react';
import axios from 'axios';
import LibroDetalle from '../LibroDetalle/LibroDetalle';

class CompartirLibro extends Component {
  state = {
    correoEmisor: '',
    correoDestino:'',
    libroData: <LibroDetalle />
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
    this.setState({libroData:
      <LibroDetalle 
        imagen={res.data.volumeInfo.imageLinks.thumbnail}
        titulo={res.data.volumeInfo.title}
        autor={res.data.volumeInfo.authors}
        editorial={res.data.volumeInfo.publisher}
        paginas={res.data.volumeInfo.pageCount}
        categoria={res.data.volumeInfo.categories}
        puntuacion={res.data.volumeInfo.averageRating}
        key={res.data.id}
      />  
    });


  }

  render() {
    return (
      <form>
        <div className="row justify-content-center mt-2">
        <div className="col-md-8">{this.state.libroData}</div>
        </div>
        <div className="row justify-content-center mt-2">
        <div className="col-md-6">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Correo emisor</span>
          </div>
          <input type="email" className="form-control" value={this.state.correoEmisor}/>
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Correo destino</span>
          </div>
          <input type="email" className="form-control" value={this.state.correoDestino}/>
        </div>

        <button className="btn btn-success" type="submit">Compartir libro</button>
        </div>
        </div>
    </form>
    )
  }
}

export default CompartirLibro;