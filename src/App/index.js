import React from 'react';
import { AppUI } from './AppUI';
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

  return (
    <AppUI
      completedTodos = {completedTodos}
      totalTodos = { totalTodos}
      searchValue = { searchValue}
      setSearchValue = { setSearchValue}
      searchedTodos = { searchedTodos}
      completeTodo = { completeTodo}
      onDelete = { onDelete}
    />
  );
  
}

export default App;
