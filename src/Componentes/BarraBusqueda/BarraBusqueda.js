import React, { Component } from 'react'

class BarraBusqueda extends Component {
  render() {
    return (
      <div>
        <form class="card card-sm mb-1">
          <div class="card-body row no-gutters align-items-center">
              <div class="col">
                  <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Busca tus libros favoritos"/>
              </div>
              <div class="col-auto">
                  <button class="btn btn-lg btn-success" type="submit">Buscar</button>
              </div>
          </div>
        </form>
      </div>
    )
  }
}

export default BarraBusqueda;