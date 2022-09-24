import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
// import './App.css';

const defaulttodos = [
  { text: 'todo1', completed: true},
  { text: 'todo2', completed: true},
  { text: 'todo3', completed: false},
  { text: 'todo4', completed: false},
  { text: 'todo5', completed: true},
]

function App() {

  const [todos, setTodos] = React.useState(defaulttodos);

  const [searchValue, setsearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })

    
  }

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
        {searchedTodos.map(todo =>(
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>

  );
}

export default App;
