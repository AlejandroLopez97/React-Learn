import React from "react";
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';

//Creo un objeto con los tipos de iconos que se desean mostrar 
const iconTypes = {
    "check": <CheckSVG/>,
    "delete": <DeleteSVG/>
}

function TodoIcon({ type }){
    return(
        <span
            className = {`Icon Icon-svg Icon-${type}`}
        >
            {iconTypes[type]}
        </span>
    );
}

export {TodoIcon};