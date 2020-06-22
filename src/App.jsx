import React from 'react';

function App() {

  const [tarea, setTarea] = React.useState('');

  const [tareas, setTareas] = React.useState([]);

  const shortid = require('shortid');

  const agregarTarea = e =>{
    e.preventDefault()

    if(!tarea.trim()){
      console.log('Elemento tarea viene vacio');
      return;
    }
    console.log(tarea);

    setTareas([
      ...tareas,
      {tarea, id: shortid.generate()}
    ]);

    setTarea('');
  }

  const eliminarTarea = id => {
    const arrayFiltrado = tareas.filter(item => item.id !== id);
    setTareas(arrayFiltrado);
  }


  return (
    <div className="container">
      <h1 className="text-center">Crud Simple</h1>
      <hr/>
      <div className="row">
          <div className="col-8">
            <h4 className="text-center">Lista de Tarea</h4> 
            <ul className="list-group">
            {
              tareas.map(item =>(
                <li className="list-group-item" key={item.id}>
                  <span className="lead">{item.tarea}</span>
                  <button 
                    className="btn btn-sm btn-danger float-right mx-2"
                    onClick={() => eliminarTarea(item.id)}
                    >
                    Eliminar
                  </button>
                  <button 
                    className="btn btn-sm btn-warning float-right"
                    
                    >
                    Editar
                  </button>
                </li>
              ))
            }
            </ul>
          </div>
          <div className="col-4">
            <h4 className="text-center">Formulario</h4>
            <form onSubmit={ agregarTarea }>
              <input 
                type="text" 
                className="form-control mb-2"
                placeholder="Ingrese Tarea"
                onChange={e => setTarea(e.target.value)}
                value={ tarea }
              />
              <button className="btn btn-dark btn-block" type="submit">Agregar</button>
            </form>            
          </div>
      </div>
    </div>
  );
}

export default App;
