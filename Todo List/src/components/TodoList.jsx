import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../store/TodoListStore";

function TodoList() {

  //creating a link from store
  const { todoList } = useContext(TodoContext);

  return (
    <div className="item_container">

      {/* via props */}
      {/* {todos.map(item => <TodoItem key={item.name} name={item.name} date={item.dueDate} onDeleteClick={onDeleteClick}/>)} */}

      {/* via context */}
      {todoList.map(item => <TodoItem key={item.name} name={item.name} date={item.dueDate} />)}
    </div>
    )
}

export default TodoList;