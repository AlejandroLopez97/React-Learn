import React from 'react';
import './TodoCounter.css'

function TodoCounter({ totalTodos, completed }){ //Recibimos la propiedad en la funcion de manera destructurada, tambien se puede recibir completa

    
    //Se valida si se completan todos los todos y se cambia el mensaje a mostrar
        return (completed !== totalTodos ? <h1 className='TodoCounter'>Has completado <span>{completed}</span> de <span>{totalTodos}</span> TODOS </h1> :
             <h1 className='TodoCounter'>No existen TODOS para mostrar, crea nuevos TODO'S</h1>);

}

export { TodoCounter };