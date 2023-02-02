import { useEffect, useState, memo } from "react";
import './App.css';
const Timer = ({name})=>{
    const [time, setTime] = useState(0)
    const [clock, setClock] = useState("00:00:00")
    const [timer, setTimer] = useState(null)
    
    useEffect(() =>{
        let h = time / 3600
        let m = time % 3600 / 60
        let s = time > 9 ? time % 3600 % 60 : "0" + time % 3600 % 60  
        setClock(s + ":" + parseInt(m) + ":" + parseInt(h))
    }, [time])

   const handleNull = () =>{
        clearInterval(timer);
            setTime(null);
            setTimer(null)
    }
    
   const handleStart = () =>{
    setTimer((prevTimer)=>{
        if(prevTimer){
            clearInterval(prevTimer)
        }
        return (
            setInterval(() => {
            setTime((prevState) => prevState + 1)  
        },
            1000
        )
    )
    })
   }
   const handleStop = () =>{
     setTimer((prevTimer)=>{
        clearInterval(prevTimer);
        return null
    })
}

    return( 
    <div className="we">
        <div className='timer'>
           
            {name}:{clock}
        </div>
        <div className='buttons'>
            <button onClick={handleStart}></button>
            <button onClick={handleStop}></button>
            <button onClick={handleNull}></button>
        </div>
    </div>     
    )
} 
export default memo(Timer)