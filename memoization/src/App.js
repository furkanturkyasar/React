import "./App.css";
import { useState, useMemo } from "react";
import Header from "./components/Header";

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  const data = useMemo(() => {
    return calculator(number);
  }, [number]);

  return (
    <div className="App">
      <Header number={number < 5 ? 0 : number} data={data} />
      <hr />
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
      <br />
      <input value={text} onChange={({ target }) => setText(target.value)} />
    </div>
  );
}

function calculator(number) {
  console.log("Calculating...");
  for (let i = 0; i < 10000; i++) {}
  console.log("Calculation completed");

  return { name: "Furkan Turkyasar", number };
}

export default App;
