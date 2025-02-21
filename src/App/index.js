import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
import { useLocalStorage } from './useLocalStorage';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Tomar cerveza', completed: false},
  {text: 'Desayunar', completed: true},
  {text: 'Almorzar', completed: false},
  {text: 'Dormir', completed: false},
];


function App() {

  const [todos, saveTodos] = useLocalStorage('TODO',[]); //Estado que me permite contar la lista y enviarse al todoCounter como props

  const [searchValue, setSearchValue] = React.useState(''); //Estado que me permite manejar la busqueda del input y enviarse al todoSearch y al todoList para filtrar

  const completedTodos = todos.filter(todo => !!todo.completed).length; //como el estado es un filtro, busco los que cuentan con la propiedad completed como true, considerado un estado derivado de todos
  const totalTodos = todos.length; //los cuento todos

  //Estado derivado de la busqueda
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText); //Convertimos los dos textos en minusculas para que la busqueda la haga sin importar si esta en mayus
    }
  );

  
  //Estado derivado de los todos completados, donde se utiliza el actualizador del estado
  const completeTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((item) => item.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  //Estado derivado de los todos eliminados, donde se utiliza el actualizador del estado
  const onDelete = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((item) => item.text === text);
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  };


  //console.log('los usuarios buscan todos de ' + searchValue);

  return (
      // <div className="App"> Tambien se puede hacer por medio de react fragment, que se encargar de hacer en bloque lo que retornará la función
      // al poner react fragment se daña el estilo que se encuentra aplicado sobre la clase app
      <React.Fragment>
        <TodoCounter 
          completed={completedTodos} 
          totalTodos={totalTodos}
        />

        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <TodoList>          
          {searchedTodos.map(todo => (
            <TodoItem 
              key = {todo.text} 
              text = {todo.text}
              completed = {todo.completed}  
              onCompleted = {() => completeTodo(todo.text)}
              onDeleted = {() => onDelete(todo.text)}            
            />
          ))}
        </TodoList>

        <CreateTodoButton/>
      </React.Fragment>
      // </div>
  );
}

export default App;
