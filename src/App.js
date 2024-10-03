import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0)

  const add = () => setCounter((prevCount) => prevCount + 1)
  const minus = () => setCounter((prevCount) => prevCount - 1)

  useEffect(() => {
    const test = "You've changed the counter to" + counter
  }, [counter])

  return (
    <div className="App">
      <button onClick={add}>ADD</button>
      <h1>{counter}</h1>
      <button onClick={minus}>MINUS</button>
    </div>
  );
}

export default App;
