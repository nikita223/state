import logo from './logo.svg';
import './App.css';
import { Profiler, useState } from 'react';
import Div from './Div.js'

function App3() {

  const [count, setCount] = useState(0);

  
  const handleAddDiv = ()=>{
    setCount((prevCount)=>{
        return prevCount + 1
    })
   }
 
 
  const handleDeleteDiv = ()=>{

    setCount((prevCount)=>{
        if(prevCount > 0){
            return prevCount - 1
        }
        return prevCount
    })
    }
  

console.log(count)
 
  
  return (
    
      <div className="App">
        <div className='content'>
        <Div count = {count} />
        </div>
     
      <div className='buttons'>
      <button onClick={handleAddDiv} >Добавить</button>
      <button onClick={handleDeleteDiv}>Удалить</button>
      </div>
    </div>
  );
  
}

export default App3;
