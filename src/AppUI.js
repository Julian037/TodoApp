import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setsearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}){
    return (
        <React.Fragment >
        <TodoCounter 
          completedTodos={completedTodos}
          totalTodos={totalTodos}
        />
        <TodoSearch 
          searchValue={searchValue}
          setsearchValue={setsearchValue}
        />
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
        <CreateTodoButton />
      </React.Fragment>
    )
}

export {AppUI}