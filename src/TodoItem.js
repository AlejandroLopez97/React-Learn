import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';
import './TodoItem.css';

function TodoItem(props){
    return (
      <li className="TodoItem">
        {/*Se ponen comillas invertidas y llaves para hacer esa clase dinámica*/ }
        {/*Se utliza operador ternario en dentro de las llaves con la propiedad que se recibe*/}

        <CompleteIcon 
          onComplete = {props.onCompleted}
          completed = {props.completed}
        />

        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
          {props.text}
        </p>

        <DeleteIcon
          onDelete = {props.onDeleted}
        />
      </li>
    );
  }

export {TodoItem};