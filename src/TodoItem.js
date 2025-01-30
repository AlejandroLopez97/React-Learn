import './TodoItem.css';

function TodoItem(props){
    return (
      <li className="TodoItem">
        {/*Se ponen comillas invertidas y llaves para hacer esa clase dinámica*/ }
        <span 
          className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
          onClick={props.onCompleted}
        > {/*Se utliza operador ternario en dentro de las llaves con la propiedad que se recibe*/}
          V
        </span> 
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
          {props.text}
        </p>
        <span 
          className="Icon Icon-delete"
          onClick={props.onDeleted}
        >
          X
        </span>
      </li>
    );
  }

export {TodoItem};