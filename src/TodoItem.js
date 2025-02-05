import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';
import './TodoItem.css';

function TodoItem(props){
    return (
      <li className="TodoItem">
        {/*Se ponen comillas invertidas y llaves para hacer esa clase dinámica*/ }
        {/*Se utliza operador ternario en dentro de las llaves con la propiedad que se recibe*/}

        <CompleteIcon 
          onClick = {props.onCompleted}
        />
        {/* <span 
          className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
          onClick={props.onCompleted}
          > 
          V
        </span>  */}

        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
          {props.text}
        </p>

        <DeleteIcon
          onClick = {props.onDeleted}
        />
        {/* <span 
          className="Icon Icon-delete"
          onClick={props.onDeleted}
        >
          X
        </span> */}
      </li>
    );
  }

export {TodoItem};