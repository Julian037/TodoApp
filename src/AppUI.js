import React from "react";
import { TodoContext } from "./TodoContext";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

function AppUI({}){
    return (
        <React.Fragment >
        <TodoCounter />
        <TodoSearch />

        <TodoContext.Consumer >
            { ({error, loading, searchedTodos, searchValue, completeTodo, deleteTodo}) => (
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
            )}
        </TodoContext.Consumer>
        <CreateTodoButton />
      </React.Fragment>
    )
}

export {AppUI}