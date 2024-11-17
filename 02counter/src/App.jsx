import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(15);
  const addValue = () => {
    if (counter < 20) setCounter(counter + 1);
    // its changing in javascript, but not updating in JSX-UI, that's where react comes up!
    //React will say, i will control the UI and provide you some hooks, use it and see the magic!
  };
  const removeValue = () => {
    if (!counter <= 0) setCounter(counter - 1);
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>{" "}
      {/*addValue() executed without click - addValue pass ref, executed onClick*/}
      <br />
      <button onClick={removeValue}>Remove Value Value</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
