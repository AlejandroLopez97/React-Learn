import React from 'react';
import './TodoSearch.css';

/**El estado viaja desde el componente padre por medio de prop y se recibe con destructuración */
function TodoSearch({searchValue,setSearchValue}){ 
    return(
        <input 
            placeholder="Buscar"
            className="TodoSearch"
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
    );
}

export {TodoSearch};