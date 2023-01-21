import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [str, setStr] = useState('text');
  const [arr, setArr] = useState([1, 2]);
  const handleAddOne = ()=>{
    setCount((prevCount)=>{
      return prevCount + 1
    })
  }
  const handleAddString = ()=>{
    setStr((prevStr)=>{
      return prevStr + 'text'.repeat(count)
    })
  }
  const handleAddArray = ()=>{
    setArr((prevArr)=>{
      let randomNum = Math.floor(Math.random()*10)
      return [...prevArr, randomNum]
    })
  }
  return (
    <div className="App">
      <div>{count}</div>
      <div>{str}</div>
      <div>{arr}</div>
      {console.log(arr)}
      <button onClick={handleAddOne}>1</button>
      <button onClick={handleAddString}>2</button>
      <button onClick={handleAddArray}>3</button>
    </div>
  );
}

export default App;
