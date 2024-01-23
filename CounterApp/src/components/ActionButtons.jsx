import React, { useRef } from "react";
import { counterAction } from "../store";
import { useDispatch } from "react-redux";

const ActionButtons = ({ value }) => {
  const dispatch = useDispatch();
  const inputVal = useRef();

  const handleIncrement = () => {
    dispatch(counterAction.increment());
  };
  const handleDecrement = () => {
    dispatch(counterAction.decrement());
  };
  const handleAdd = () => {
    dispatch(
      counterAction.addition({
        num: inputVal.current.value,
      })
    );
  };
  const handleSubtract = () => {
    dispatch(
      counterAction.subtraction({
        num: inputVal.current.value,
      })
    );
  };

  return (
    <>
      <div className="button_container">
        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleDecrement}>-1</button>
      </div>
      <input
        type="text"
        name="inputVal"
        placeholder="Enter any value "
        ref={inputVal}
      />
      <div className="buuton_container">
        <button onClick={handleAdd}>ADD</button>
        <button onClick={handleSubtract}>SUBTRACT</button>
      </div>
    </>
  );
};

export default ActionButtons;
