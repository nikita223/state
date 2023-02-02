import logo from './logo.svg';
import './App.css';
import { Profiler, useState } from 'react';
import Div2 from "./Div2.js";
function App4() {

    const [array, setArray] = useState([
      {id:"1g", color:"green", value:0},
      {id:"1b", color:"black", value:0},
      {id:"2g", color:"green", value:0},
      {id:"2b", color:"black", value:0},
      {id:"3g", color:"green", value:0},
      {id:"3b", color:"black", value:0}
    ])

    const [count1, setCount1] = useState(1)
    const [count2, setCount2] = useState(1)
    
    
    const handleAddGreen = () => {
      setArray((prevArray) => {
       return prevArray.map((element)=>{
        console.log(element)
        console.log(count1 + "g")
        const newElement = {...element}
        if(element.id === (count1 + "g") ){
          newElement.value = newElement.value + 1 
         } 
         return newElement
        }) 
      })

      setCount1((prevCount)=>{
       return prevCount = prevCount  < 3 ? prevCount + 1 : 1;
      })
    }
   
    const handleAddBlack = () =>{
      setArray((prevArray) => {
        return prevArray.map((element) => {
          const newElement = {...element}
          if(element.id === (count2 + "b")){
            newElement.value = newElement.value + 1
          }
          return newElement
        })
      })

      setCount2((prevCount)=>{
        return prevCount = prevCount  < 3 ? prevCount + 1 : 1;
       })
    }

    return (
        <div className="App">
        <div className='content2'>
        {array.map((x)=>( 
      <Div2 key={x.id} color ={x.color} value={x.value} />
      ))}
        </div>
      <button onClick={handleAddGreen} >Добавить в зеленый</button>
      <button onClick={handleAddBlack} >Добавить</button>
    </div>

    )

}


export default App4; 