import React from "react";
import { useTodos } from "./TodoContext";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { Modal } from "./Modal";
import { TodoForm } from "./TodoFrom";
import { TodoHeader } from "./TodoHeader";
import { EmptyTodos } from "./EmptuTodos";
import { TodosLoading } from "./TodosLoading";
import { TodosError } from "./TodosError";
import { ChangeAlert } from "./ChangeAlert";

function App() {

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
    addTodo,
    sincronizeTodos,
} = useTodos();

return (
    <React.Fragment >
        <TodoHeader loading={loading}>
            <TodoCounter 
                completedTodos={completedTodos}
                totalTodos={totalTodos}
                //loading={loading}
            />
            <TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                //loading={loading}
            />
  </TodoHeader>
    <TodoList 
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}

        onError={() => <TodosError/>}
        onLoading={() => <TodosLoading/>}
        onEmptyTodos={() => <EmptyTodos/>}
        onEmptySearchResults={(searchText) => <p>NO hay resultado para {searchText}</p>}
        render={ todo => (
            <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
            />
        )}
    />
    {/* <TodoList >
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
    </TodoList> */}
    
    {!!openModal && (
        <Modal >
            <TodoForm 
                addTodo={addTodo}
                setOpenModal={setOpenModal}
            />
        </Modal>
    )}
  <CreateTodoButton 
      setOpenModal={setOpenModal}
  />
  <ChangeAlert 
    sincronize={sincronizeTodos}
  />
</React.Fragment>
)

  // return (
  //   <TodoProvider >
  //     <AppUI />
  //   </TodoProvider>
  // );
}

export default App;
