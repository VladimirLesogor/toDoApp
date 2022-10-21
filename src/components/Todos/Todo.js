import { RiTodoFill, RiCheckFill, RiDeleteBin5Fill } from 'react-icons/ri';
import style from './Todo.module.css';

function Todo({ text, index, removeTodo, isActive, changeStatus }) {
  return (
    <div className={isActive ? style.todo : style.todoNotActive}>
      <RiTodoFill className={style.badge} />
      <div>{text}</div>
      <RiDeleteBin5Fill
        onClick={() => {
          removeTodo(index);
        }}
      />
      <RiCheckFill
        onClick={() => changeStatus(index, isActive ? false : true)}
      />
    </div>
  );
}
export default Todo;
