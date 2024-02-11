import { useContext } from "react";
import { TodoContext } from "../store/TodoListStore";

function WelcomeMessage() {
  const {todoList} = useContext(TodoContext);
  
  return (
    todoList.length===0 && <p className="msg">No task left. Enjoy you day!</p>
  )
}

export default WelcomeMessage;