import Todo from './Todo';
import style from './TodoList.module.css';

function TodoList({ todoArrey, removeTodo, changeStatus }) {

  const complitedCount = todoArrey.reduce((a, b) => {
    return !b.isActive? a += 1 : a;
  }, 0);



  return (
    <div className={style.todoList}>
      {todoArrey.length === 0 && <h1>List is empty</h1>}
      {todoArrey.map((todo, index) => {
        return (
          <Todo
            isActive={todo.isActive}
            text={todo.text}
            key={index}
            index={index}
            removeTodo={removeTodo}
            changeStatus={changeStatus}
          />
        );
      })}
      {!!complitedCount && <div>You have {complitedCount} complited Todo</div>}
    </div>
  );
}
export default TodoList;
