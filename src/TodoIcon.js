import React from "react";
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import './TodoIcon.css';

//Creo un objeto con los tipos de iconos que se desean mostrar 
//Recibo la propiedad color y convierto el contenido del objeto en una funcion anonima cada una y le envio ese color por medio de la propiedad fill del componente
const iconTypes = {
    "check": (color) => <CheckSVG className="Icon-svg" fill={color}/>,
    "delete": (color) => <DeleteSVG className="Icon-svg" fill={color}/>
}

function TodoIcon({ type, color }){
    return(
        <span
            className = {`Icon-container Icon-container-${type}`}
        >
            {iconTypes[type](color)} {/**En los parantesis le envio la propiedad que recibo como si fuese una función */}
        </span>
    );
}

export {TodoIcon};