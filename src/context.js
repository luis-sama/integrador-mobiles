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
        default:
            return state;
    }
}
export class Provider extends Component {
    state = {
        barraBusquedaFlag: true,
        formBusquedaFlag: false,
        libros: null,
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