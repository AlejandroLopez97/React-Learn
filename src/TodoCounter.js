import React from 'react';
import './TodoCounter.css'

function TodoCounter({ totalTodos, completed }){ //Recibimos la propiedad en la funcion de manera destructurada, tambien se puede recibir completa

    return(
        <h1 className='TodoCounter'>
            Has completado <span>{completed}</span> de <span>{totalTodos}</span> TODOS
        </h1>
    );
}

export { TodoCounter };