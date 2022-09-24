import React from "react";
import { AppUI } from "./AppUI";

function useLocalStorage(itemName, initialValue){
  const localStorageItem = localStorage.getItem(itemName);
  let parseItem;

  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parseItem = [];
  }else{
    parseItem = JSON.parse(localStorageItem);
  };

  const [item, setItem] = React.useState(parseItem);

  const saveItem = (newItem) => {
    const stringifiedTodos = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedTodos)
    setItem(newItem)
  };

  return[
    item,
    saveItem,
  ]
}

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);


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




  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1)
    saveTodos(newTodos);
  };

  return (
    <AppUI 
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setsearchValue={setsearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
  />
  );
}

export default App;
