import { useState } from 'react';
import style from './TodoForm.module.css';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  function onSubmitHandler(event) {
    event.preventDefault();
    addTodo(text, true);
    setText('');
  }

  return (
    <form className={style.form}>
      <input
        className={style.input}
        placeholder="Input text here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button type="submit" className={style.button} onClick={onSubmitHandler}>
        Add Todo
      </button>
    </form>
  );
}
export default TodoForm;
