
function TodoCounter({ totalTodos, completed }){ //Recibimos la propiedad en la funcion de manera destructurada, tambien se puede recibir completa
    return(
        <h1>Has completado {completed} de {totalTodos} TODOS</h1>
    );
}

export { TodoCounter };