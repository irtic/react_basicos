import React, {Fragment } from 'react';


function App() {

    const empleado = {
        nombre : 'Irtic',
        trabajo : 'Desarrollador web'
    }
  return (
    <div className="App">
        
        <Fragment>
            <h1>{empleado.nombre}</h1>
            <p>{empleado.trabajo}</p>
        </Fragment>

    </div>
  );
}

export default App;
