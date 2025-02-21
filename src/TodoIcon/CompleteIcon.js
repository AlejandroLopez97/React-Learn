import React from 'react';
import { TodoIcon} from './';

function CompleteIcon({completed, onCompleted}){
    return (
        <TodoIcon
            type = "check"
            color = {completed ? 'green' : 'gray'}
            onClick = {onCompleted} /**El evento de onClick se esta enviando al componente TodoIcon que al final es el que lanza el evento clic */
        />
    );
}

export { CompleteIcon };