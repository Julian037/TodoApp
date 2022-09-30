import React from "react";
import { TodoContext } from "./TodoContext";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { Modal } from "./Modal";
import { TodoForm } from "./TodoFrom";
import { TodoHeader } from "./TodoHeader";

function AppUI({}){
    const {
        error, 
        loading, 
        searchedTodos, 
        searchValue, 
        completeTodo, 
        deleteTodo, 
        openModal, 
        setOpenModal, 
        completedTodos, 
        totalTodos,
        setSearchValue,
    } = React.useContext(TodoContext)

    return (
        <React.Fragment >
        <TodoHeader>
            <TodoCounter 
                completedTodos={completedTodos}
                totalTodos={totalTodos}
            />
            <TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
        </TodoHeader>
                <TodoList >
                    {error && <p>Error</p>}
                    {loading && <p>Cargando...</p>}
                    {(!loading && !searchValue.length) && <p>crea tu primer Todo</p>}
                    
                    {searchedTodos.map(todo =>(
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                    ))}
                </TodoList>
                
                {!!openModal && (
                    <Modal >
                        <TodoForm />
                    </Modal>
                )}
        <CreateTodoButton 
            setOpenModal={setOpenModal}
        />
      </React.Fragment>
    )
}

export {AppUI}