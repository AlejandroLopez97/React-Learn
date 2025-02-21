import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    onDelete
}){
    return (
        // <div className="App"> Tambien se puede hacer por medio de react fragment, que se encargar de hacer en bloque lo que retornará la función
        // al poner react fragment se daña el estilo que se encuentra aplicado sobre la clase app
        <>
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
        </>
    );
}

export { AppUI }