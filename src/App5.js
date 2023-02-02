import logo from './logo.svg';
import './App.css';
import { Profiler, useState } from 'react';
import Div2 from "./Div2.js";
function App5() {

    const [array1, setArray1] = useState([
      {id:"1g", color:"green", value:0},
      {id:"2g", color:"green", value:0},
      {id:"3g", color:"green", value:0},
    ])
    const [array2, setArray2] = useState([   
        {id:"1b", color:"black", value:0},
        {id:"2b", color:"black", value:0},
        {id:"3b", color:"black", value:0}
      ])
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const handleAddGreen = () => {
      setArray1((prevArray) => {
        prevArray[count1].value = prevArray[count1].value + 1
        console.log(prevArray)
        return prevArray
      })

      setCount1((prevCount)=>{
       return prevCount = prevCount  < 3 ? prevCount + 1 : 1;
      })
    }
    console.log(count1)
    const handleAddBlack = () => {
        setArray2((prevArray) => {
          prevArray[count2].value = prevArray[count2].value + 1
          return prevArray
        })
        setCount2((prevCount)=>{
         return prevCount = prevCount  < 3 ? prevCount + 1 : 1;
        })
      }
     

    return (
        <div className="App">
        <div className='content2'>
        {array1.map((x, index)=>( 
      <Div2 key={index} value={x.value} />
      ))}
      {array2.map((x, index)=>( 
      <Div2 key={index}  value={x.value} />
      ))}
        </div>
      <button onClick={handleAddGreen} >Добавить</button>
      <button onClick={handleAddBlack} >Добавить</button>
    </div>

    )

}


export default App5; 