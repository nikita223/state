import logo from './logo.svg';
import './App.css';
import { Profiler, useEffect,  useCallback, useState, useMemo } from 'react';
import Game from "./Game.js";
import GameOver from "./GameOver.js";
import { maxHP } from './gameRules';

function App7() {
    const [HP, setHP] = useState([maxHP, maxHP]);
    const [score, setScore] = useState(0);
    const [botAction, setBotAction] = useState("none");
    const [playerAction, setPlayerAction] = useState("none");
    const [count, setCount] = useState(0);
    const [clock, setClock] = useState("00:00:00");
    const [time, setTime] = useState(0);
    const [timer, setTimer] = useState(null)
    const [combo, setCombo] = useState({
        value:0,
        count:0
    })

    useEffect(()=> {

        setTimer((prevTimer) => {
            if(prevTimer){
                clearInterval(prevTimer)
            }
            return setInterval(() => {
                setTime((prevTime) =>{
                    return prevTime + 1
                })
            }, 1000)
        })
    const g = qff;

        }, [])   

    useEffect(()=> {

        let h = (time / 3600) > 9 ? parseInt(time / 3600) : "0" + parseInt(time / 3600)
        let m = (time % 3600 / 60) > 9 ? parseInt(time % 3600 / 60) : "0" + parseInt(time % 3600 / 60)
        let s = time > 9 ? time % 3600 % 60 : "0" + time % 3600 % 60  
        setClock(s + ":" + m + ":" + h)
    
    }, [time])

    const isGameOver = useMemo(() => {
        
        return (HP[0] <= 0) || (HP[1] <= 0)
    
    }, [HP]) 

    const over = () => {
        setHP([100, 100])
        setScore(0)
        setBotAction("none")
        setPlayerAction("none")
        setCount(0)
        clearInterval(timer)
        setClock("00:00:00")
        setTime(0)
        setCombo({
            value:0,
            count:0
        })
    }  

    const gameOrOver = () =>{
        if(isGameOver){
            return <GameOver HP = {HP} Score = {score} over = {over} setTimer ={setTimer} count={count}/> 
        }
        else{
            return <Game combo = {combo} setCombo = {setCombo}  HP = {HP} setHP={setHP} Score = {score} setScore={setScore} botAction = {botAction} setBotAction = {setBotAction} playerAction = {playerAction} setPlayerAction = {setPlayerAction} count = {count} setCount = {setCount} over = {over}/> 
        }
        
    }

    return (
        <div className="App">
            <div>{clock}</div>     
            {gameOrOver()}      
        </div>

    )

}


export default App7; 