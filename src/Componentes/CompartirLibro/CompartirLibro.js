import React, { Component } from 'react';
import Libro from '../Libro/Libro';

class CompartirLibro extends Component {
  state = {
    correoEmisor: '',
    correoDestino:''
  }

  render() {
    return (
      <div className="row justify-content-center mt-2">
      <div className="col-md-6">
      <form>
        {/* Acá se debería renderizar el libro al que le di "Compartir con un" 
          * amigo, el cual lo recuperaría por ID. El tema es que para eso necesito
          * la api posta utilizando `https://www.googleapis.com/books/v1/volumes?q=/${id}`
          * Lo podria hacer con la lista de Libros pero el state esta en BuscarLibros.js 
          * y no se como conectarlo con este componente.
          */}
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">Correo emisor</span>
          </div>
          <input type="email" class="form-control" value={this.state.correoEmisor}/>
        </div>

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">Correo destino</span>
          </div>
          <input type="email" class="form-control" value={this.state.correoDestino}/>
        </div>

        <button className="btn btn-success" type="submit">Compartir libro</button>
    </form>
    </div>
    </div>
    )
  }
}

export default CompartirLibro;