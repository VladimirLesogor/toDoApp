import { useState } from 'react';
import style from './TodoForm.module.css';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  return (
    <div className={style.form}>
      <input
        className={style.input}
        placeholder="Input text here"
        valuse={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button
        className={style.button}
        onClick={() => {
          addTodo(text);
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
export default TodoForm;
