import React from "react";
import { useSelector } from "react-redux";

const CounterScreen = () => {
  const { counterVal } = useSelector((store) => store.counter);

  return <p>Current Value : {counterVal}</p>;
};

export default CounterScreen;
