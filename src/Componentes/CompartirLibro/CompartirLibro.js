import React, { Component } from 'react';
import axios from 'axios';
import Libro from '../Libro/Libro';

class CompartirLibro extends Component {
  state = {
    correoEmisor: '',
    correoDestino:'',
    libroData: <Libro />
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
    
    this.setState({libroData:
      <Libro 
        imagen={res.data.volumeInfo.imageLinks.thumbnail}
        descripcion={res.data.volumeInfo.description}
        titulo={res.data.volumeInfo.title}
        autor={res.data.volumeInfo.authors[0]}
        editorial={res.data.volumeInfo.publisher}
        id={res.data.id}
        key={res.data.id}
      />  
    });


  }

  render() {
    return (
      <div className="row justify-content-center mt-2">
      <div className="col-sm-6">
      <form>
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
    </form>
    </div>
    <div className="col-sm-2">{this.state.libroData}</div>
    </div>
    )
  }
}

export default CompartirLibro;