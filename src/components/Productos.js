import React, { Component } from 'react';

class Productos extends Component {
    state = {
        productos : [
            {id : 1, name : 'camisa reactjs', precio : 30 },
            {id : 2, name : 'camisa vuejs', precio : 30 },
            {id : 3, name : 'camisa angularjs', precio : 30 },
            {id : 4, name : 'camisa nodejs', precio : 30 },
        ]
    }
    render() {

        const {productos} = this.state

        return (
            
            <h1>Lista de Productos</h1>
        );
    }
}

export default Productos;