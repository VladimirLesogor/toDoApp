import style from './Todo.module.css';

function Todo({ text, index, removeTodo }) {
  return (
    <div className={style.todo}
      onDoubleClick={() => {
        removeTodo(index);
      }}
    >
      {text}
    </div>
  );
}
export default Todo;
