import './CreateTodoButton.css';

function CreateTodoButton(){
    return (
        <button 
            className='CreateTodoButton' 
            onClick={
                (event) => alert('Le diste click al botón')
            }
        >
            +
        </button>
    );
}

export {CreateTodoButton};