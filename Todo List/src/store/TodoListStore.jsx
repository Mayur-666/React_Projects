import { createContext, useReducer } from "react";

/* --------creating a context object with emplty list --------*/
export const TodoContext = createContext(
    { todoList : [], 
      addNewItem: ()=> {}, 
      deleteItem: ()=> {} });

/* -------- pure reducer function -------- */
const todoReducer = (curTodoList, action) => {
  let newTodoList = curTodoList;
  if(action.type === "ADD_ITEM"){
    newTodoList =  [{name : action.payload.item_name, dueDate: action.payload.item_date}, ...curTodoList];
  }
  else if(action.type === "DELETE_ITEM") {
    newTodoList = curTodoList.filter(item=> item.name !== action.payload.item_name)
  }
  return newTodoList;
}

const TodoContextProvider = ({children}) => {

  const [todoList, dispatchTodoList] = useReducer(todoReducer, []);
  
  const addNewItem = (item_name, item_date) => {
    
    //making action
    const addNewItemAction = {
      type: "ADD_ITEM",
      payload: {
        item_name,
        item_date
      }
    }
    //dispatching action
    dispatchTodoList(addNewItemAction);
  }
  const deleteItem = (item_name) => {
    //making action
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        item_name
      }
    }

    //dispatching action
    dispatchTodoList(deleteItemAction);
  }
  return (
    <TodoContext.Provider value = {{ todoList, addNewItem, deleteItem }}>
      {children}
    </TodoContext.Provider>
    )
}

export default TodoContextProvider;