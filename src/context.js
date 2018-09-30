import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'MOSTRAR_FORM_BUSQUEDA':
            return {
                ...state,
                barraBusquedaFlag: !state.barraBusquedaFlag,
                formBusquedaFlag: !state.formBusquedaFlag
            }
        case 'GET_LIBROS':
            return {
                ...state,
                libros: action.payload
            }
        case 'PAGINA_SIGUIENTE':
            return {
                ...state,
                indicePagina: state.indicePagina += 10,
            }
        case 'PAGINA_ANTERIOR':
            if (state.indicePagina !== 0) {
                return {
                    ...state,
                    indicePagina: state.indicePagina -= 10
                }
            } else {
                return state
            }
        default:
            return state;
    }
}
export class Provider extends Component {
    state = {
        barraBusquedaFlag: true,
        formBusquedaFlag: false,
        libros: null,
        indicePagina: 0,
        dispatch: action => this.setState(state => reducer(state, action))
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;