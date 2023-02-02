import logo from './logo.svg';
import './App.css';
import { Profiler, useEffect,  useCallback, useState } from 'react';
import Game from "./Game.js";
import GameOver from "./GameOver.js";
function App7() {
   
    const [HP, setHP] = useState([100, 100]);
    const [botAction, setBotaction] = useState("none");
    const [playerAction, setplayeraction] = useState("none");
    const [count, setCount] = useState(0);
    const [over, setOver] = useState(false)
    const actionBot = ["Attack", "Defense", "Skip", "Spell"];

    const actionrules = ({
        AttackDefense:[-5, 0],
        DefenseAttack:[0, -5],
        AttackSpell:[-10, -5],
        SpellAttack:[-5, -10],
        SpellDefense:[0, -15],
        DefenseSpell:[-15, 0],
        SkipAttack:[-10, 0],
        AttackSkip:[0, -10],
        SkipDefense:[10, 0],
        DefenseSkip:[0, 10],
        SkipSpell:[-5, 0],
        SpellSkip:[0, -5],
        AttackAttack:[-10, -10],
        SpellSpell:[-15, -15],
        SkipSkip:[10, 10],
        DefenseDefense:[0, 0],
        nonenone:[0, 0]
        })

    const summHP = (HP, rul) => {
        let newHP = HP + rul
        if(newHP <= 0){
            newHP = 0
            setOver(()=>{
                return true
            })
        }
        if(newHP >= 100){
            newHP = 100
        }
       
        return newHP
    }

    useEffect(() => {
        setBotaction(()=>{
            const max = actionBot.length - 1;
            const index = Math.floor(Math.random() * (max + 1));
            return actionBot[index]
        })
       
        setHP((prevHP) =>{
            const newHP = [...prevHP]
            let key = playerAction + botAction 
            console.log(key)
            newHP[0] = summHP(newHP[0], actionrules[key][0]) 
            newHP[1] = summHP(newHP[1], actionrules[key][1]) 
            return newHP
        })
        }, [count])

       
        const gameOrOver = () =>{
            return over ? <GameOver HP = {HP}/> : <Game  HP = {HP}/> 
        }

        const handleAction = (event) =>{
            setplayeraction(()=>{
                return event.target.name
            })
        
            setCount((prevCount)=>{
                return prevCount + 1
            })
        }

    return (
        <div className="App">
           
            {gameOrOver()}

            <div className='form'>
                <button name='Attack' onClick={handleAction}>Атаковать</button>
                <button name='Defense' onClick={handleAction}>Защититься</button>
                <button name='Skip' onClick={handleAction}>Пропустить</button>
                <button name='Spell' onClick={handleAction}>Заклинание</button>
            </div>
        </div>

    )

}


export default App7; 