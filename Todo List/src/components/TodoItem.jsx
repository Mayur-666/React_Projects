import { useContext } from "react";
import { TodoContext } from "../store/TodoListStore";

function TodoItem({ name, date }) {

    const { deleteItem } = useContext(TodoContext);

    return (
        <div className="todo_list">
            <p className='todo_item_name'> {name} </p>
            <p className='todo_item_date'> {date} </p>
            <button id='delete_todo' onClick={() => deleteItem(name)}> Delete </button>
        </div>
    )
}

export default TodoItem;