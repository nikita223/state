import logo from './logo.svg';
import './App.css';
import { Profiler, useState } from 'react';
import Timer from './Timer';
function App6() {
    const [array, setArray] = useState([])
    const [name, setName] = useState(null)
    const handleAddName = (event) =>{
        setName(event.target.value)
    }
    const handleAddTimer = () =>{
        setArray((prevArray) =>{
            return [...prevArray, {name:name}]
        })
    }
   
    return (
        <div className="App">
            <div className='content2'>
            {array.map((x, index) =>{
              return <Timer key={index} name={x.name}/>
            })}
            </div>
            <div className='form'>
                <input placeholder='Введите название таймера' onChange={handleAddName} />
                <button onClick={handleAddTimer} >Добавить таймер</button>
            </div>
        </div>

    )

}


export default App6; 