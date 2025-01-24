import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue,setSearchValue}){ {/**El estado viaja desde el componente padre por medio de prop y se recibe con destructuración */}
    return(
        <input 
            placeholder="Cortar cebolla"
            className="TodoSearch"
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
    );
}

export {TodoSearch};