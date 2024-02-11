import { useState, useRef, useContext } from "react";
import { TodoContext } from "../store/TodoListStore";

function TodoInput() {

  // code if we use useState hook
  // const [todoName, setTodoName] = useState("");
  // const [todoDate, setTodoDate] = useState("");
  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current++;
  // }
  // const handleDateChange = (event) => {
  //   setTodoDate(event.target.value);
  //   console.log(noOfUpdates)
  // }

  /* -------------------------------------------------
  useState hooks, useRef can be used with ""ref"" 
  attribute to directly itereact with element in dom
  --------------------------------------------------*/
  const todoNameElement = useRef("");
  const todoDateElement = useRef("");

  //creating link to store
  const { addNewItem } = useContext(TodoContext);

  const handleAddItem = (e) => {
    e.preventDefault();
    addNewItem(todoNameElement.current.value, todoDateElement.current.value);
    todoDateElement.current.value = "";
    todoNameElement.current.value = "";

    //when using useState
    /* 
      addNewItem(todoName, todoDate);
      setTodoName("");
      setTodoDate("");
    */
  }

  return (
    <form className="todo_input" onSubmit={handleAddItem}>
      {/* removed value={} and onChange={} from  from inputs cause we don't use useState anymore */}

      <input type="text" name="todo_input" id="todo_name" placeholder='Enter Todo here' ref={todoNameElement} />
      <input type="date" name="todo_date" id="todo_date" ref={todoDateElement} />
      <button type='submit' id='add_todo'>Add</button>
    </form>
  )
}

export default TodoInput;