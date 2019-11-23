import React, { Component, Fragment } from 'react';
import Producto from './Producto'

class ListaProductos extends Component {
    state = {
        productos : [
            {id : 1, nombre : 'camisa reactjs', precio : 30 },
            {id : 2, nombre : 'camisa vuejs', precio : 30 },
            {id : 3, nombre : 'camisa angularjs', precio : 30 },
            {id : 4, nombre : 'camisa nodejs', precio : 30 },
        ]
        
    }
    render() {

        const {productos} = this.state

        return (
            <Fragment>
                <h1>Lista de Productos</h1>
                {productos.map(producto => (
                    <Producto 
                        key = {producto.id}
                        producto={producto}
                    />
                ))}

            </Fragment>
        );
    }
}

export default ListaProductos;