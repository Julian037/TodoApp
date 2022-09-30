import React from "react";
import './TodoForm.css'

function TodoForm({addTodo, setOpenModal}) {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    //const {addTodo, setOpenModal,}= React.useContext(TodoContext)
    
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    
    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)
    };

    return(
        <form onSubmit={onSubmit}>
            <label>...</label>
            <textarea 
                placeholder="Buscar ToDo"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button onClick={onCancel} type="button" className="TodoForm-button TodoForm-button-cancel">
                    Cancelar
                </button>
                <button type="submit" className="TodoForm-button TodoForm-button-add">
                    añadir
                </button>
            </div>
        </form>
    );
}

export {TodoForm};