import { useState, useMemo } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import useCustomMemo from './hooks/useCustomMemo';

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(100);

  const increment = () => {
    const newCount = count+1;
    setCount(newCount);
  }

  const squareCount = () =>{
    console.log('expensive calculation');
    return count*count;
  }

  // const memoisedSquareCount = useMemo(squareCount, [count]);
  const memoisedSquareCount = useCustomMemo(squareCount, [count]);

  const increment2 = () => {
    const newCount = count2-1;
    setCount2(newCount);
  }

  return (
    <>
      Counter : {count};
      Square : {memoisedSquareCount}
      <button onClick={increment}>Increment</button>
      Counter2 : {count2}
      <button onClick={increment2}>Decrement</button>
    </>
  )
}

export default App
