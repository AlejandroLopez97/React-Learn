import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';
import './TodoItem.css';

function TodoItem({text, completed,onCompleted,onDeleted}){
    return (
      <li className="TodoItem">
        {/*Se ponen comillas invertidas y llaves para hacer esa clase dinámica*/ }
        {/*Se utliza operador ternario en dentro de las llaves con la propiedad que se recibe*/}

        <CompleteIcon 
          onCompleted = {onCompleted}
          completed = {completed}
        />

        <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
          {text}
        </p>

        <DeleteIcon
          onDeleted = {onDeleted}
        />
      </li>
    );
  }

export { TodoItem };