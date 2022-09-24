import React from "react";
import { AppUI } from "./AppUI";

function useLocalStorage(itemName, initialValue){
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect( () => {
    setTimeout( () => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parseItem;
  
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parseItem = [];
        }else{
          parseItem = JSON.parse(localStorageItem);
        };
  
        setItem(parseItem);
        setLoading(false);
      } catch (error) {
        setError(error)
      }
    }, 2000)
  });

  



  const saveItem = (newItem) => {
    try {
      const stringifiedTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedTodos)
      setItem(newItem)
    } catch (error) {
      setError(error)
    }
  };

  return{
    item,
    saveItem,
    loading,
    error,
  }
}

function App() {

  const {item: todos, saveItem:saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);


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
    loading={loading}
    error={error}
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
