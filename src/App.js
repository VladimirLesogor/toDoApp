import { useState } from 'react';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

function App() {
  const [todoArrey, setTodoArrey] = useState([]);
  const addTodo = (newTodo) => {
    newTodo && setTodoArrey([...todoArrey, newTodo]);
  };
  const removeTodo = (index) => {
    const newArr = todoArrey;
    newArr.splice(index, 1);
    setTodoArrey([...newArr]);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todoArrey={todoArrey} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
