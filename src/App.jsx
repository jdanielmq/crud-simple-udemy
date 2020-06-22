import React from 'react';

function App() {
  return (
    <div className="container">
      <h1 className="text-center">Crud Simple</h1>
      <hr/>
      <div className="row">
          <div className="col-8">
            <h4 className="text-center">Lista de Tarea</h4> 
            <ul className="list-group">
              <li className="list-group-item">
                <span className="lead">Tarea #1</span>
                <button className="btn btn-sm btn-danger float-right mx-2">Eliminar</button>
                <button className="btn btn-sm btn-warning float-right">Editar</button>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <h4 className="text-center">Formulario</h4>
          </div>
      </div>
    </div>
  );
}

export default App;
