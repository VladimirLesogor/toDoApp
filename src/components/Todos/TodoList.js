import Todo from './Todo';
import style from './TodoList.module.css';

function TodoList({ todoArrey, removeTodo }) {
  return (
    <div className={style.todoList}>
      {todoArrey.length > 0? ( todoArrey.map((todo, index) => {
        return (
          <Todo text={todo} key={index} index={index} removeTodo={removeTodo} />
        );
      })):<h1>List is empty</h1>}
    </div>
  );
}
export default TodoList;
