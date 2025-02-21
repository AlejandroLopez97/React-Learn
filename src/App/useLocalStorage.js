import React from "react";

//Se crea un customHooks
function useLocalStorage(itemName, initialValue){
  
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
    
    if(!localStorageItem){
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    }else{
      parsedItem = JSON.parse(localStorageItem);
    }
    
    const [item, setItem] = React.useState(parsedItem);
  
    //Funcion constante que guarda el estado y en el localstorage
    const saveItem = (newItem) =>{
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem);
    };
  
    return [item, saveItem];
  }

  export { useLocalStorage }