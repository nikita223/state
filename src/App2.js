import logo from './logo.svg';
import './App.css';
import { Profiler, useState } from 'react';
import Div from './Div.js'

function App2() {

  const [array, setArray] = useState([0]);
  const [value, setValue] = useState(0);
  const handleEditValue = ()=>{
    setValue((prevValue)=>{
     return prevValue = document.getElementById('inp').value;
    })
  }

  const handleAddDiv = ()=>{
    setArray((prevArray)=>{
      for(let i = value; i > 0; i--){
       prevArray = [...prevArray, prevArray.length]
      }
      return prevArray
    })
   }
 
 
  const handleDeleteDiv = ()=>{

    setArray((prevArray)=>{
    console.log(prevArray)
     return prevArray.filter((x, index)=>{
        if(index <= prevArray.length - 1 - value){
          console.log(index)
          return true
        }
      })
      }
      )
    }
  


  console.log(array)
  
  return (
    
      <div className="App">
        <div className='content2'>
        {array.map((index)=>(
      <div key = {index}></div>
      ))}
        </div>
      <input id="inp" onChange={handleEditValue}  ></input>
      <button onClick={handleAddDiv} >Добавить</button>
      <button onClick={handleDeleteDiv}>Удалить</button>
    </div>
  );
  
}

export default App2;
