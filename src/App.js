import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Tomar cerveza', completed: false},
  {text: 'Desayunar', completed: true},
  {text: 'Almorzar', completed: false},
  {text: 'Dormir', completed: false},
];

function App() {
  return (
      // <div className="App"> Tambien se puede hacer por medio de react fragment, que se encargar de hacer en bloque lo que retornará la función
      // al poner react fragment se daña el estilo que se encuentra aplicado sobre la clase app
      <React.Fragment>
        <TodoCounter completed={16} totalTodos={25}/>
        <TodoSearch/>

        <TodoList>
          {defaultTodos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text = {todo.text}
              completed = {todo.completed}
            />
          ))}
        </TodoList>

        <CreateTodoButton/>
      </React.Fragment>
      // </div>
  );
}

export default App;
