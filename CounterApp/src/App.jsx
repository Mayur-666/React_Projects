import React from "react";
import CounterScreen from "./components/CounterScreen";
import ActionButtons from "./components/ActionButtons";
import "./App.css";

function App() {
  return (
    <div className="card">
      <h1>Counter</h1>
      <CounterScreen />
      <ActionButtons />
    </div>
  );
}

export default App;
