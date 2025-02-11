import React from 'react';
import { TodoIcon} from './TodoIcon';

function DeleteIcon({onDeleted}){
    return (
        <TodoIcon
            type = "delete"
            color = "gray"
            onClick={onDeleted} /**El evento de onClick se esta enviando al componente TodoIcon que al final es el que lanza el evento clic */
        />
    );
}

export { DeleteIcon };