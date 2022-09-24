import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
// import './App.css';

const todos = [
  { text: 'todo1', completed: false},
  { text: 'todo2', completed: true},
  { text: 'todo3', completed: false},
  { text: 'todo4', completed: false},
  { text: 'todo5', completed: true},
]

function App() {
  return (
    <React.Fragment >
      <TodoCounter />
      <TodoSearch />
      <TodoList >
        <TodoItem />
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>

  );
}

export default App;
