import { useState } from 'react';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

function App() {
  const [todoArrey, setTodoArrey] = useState([]);
  class TodoObj {
    constructor(text, isActive) {
      this.text = text;
      this.isActive = isActive;
    }
  }

  

  const addTodo = (text, isActive) => {
    text && setTodoArrey([...todoArrey, new TodoObj(text, isActive)]);
  };
  const removeTodo = (index) => {
    const newArr = todoArrey;
    newArr.splice(index, 1);
    setTodoArrey([...newArr]);
  };

  const changeStatusHandler = function (index, isActive) {
    const newArr = todoArrey;
    const currentTodo = newArr[index];
    currentTodo.isActive = isActive;
    newArr.splice(index, 1, currentTodo);
    setTodoArrey([...newArr]);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todoArrey={todoArrey}
        removeTodo={removeTodo}
        changeStatus={changeStatusHandler}
      />
    </div>
  );
}

export default App;
