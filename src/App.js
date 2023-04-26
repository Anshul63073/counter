import "./styles.css";
import { useState } from "react";
export default function App() {
  let [count, setCount] = useState(0);

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="App">
      <h2>Counter App</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
