import { useEffect, useState, memo } from "react";
import './App.css';
import {actionRules, summHP, randomGenerateAction} from './gameRules';
function Game({combo, setCombo, HP, setHP, Score, setScore, botAction, setBotAction, playerAction, setPlayerAction, count, setCount, over}){

    useEffect(() => {
        setBotAction(()=>{   
          return randomGenerateAction()
        })
        let key = playerAction + botAction 
        setHP((prevHP) =>{
            const newHP = [...prevHP]
            console.log(key)
            newHP[0] = summHP(newHP[0], actionRules[key][0][0]) 
            newHP[1] = summHP(newHP[1], actionRules[key][1]) 
            return newHP
        })
        if((actionRules[key][1] < 0) || (actionRules[key][0][0] === 0)){
        setCombo((prevCombo) =>{
            let newCombo;
            if(prevCombo.value === actionRules[key][1]){
                newCombo = {
                    value:prevCombo.value,
                    count:prevCombo.count + 1
                }
            }
            else{
                newCombo = {
                    value:prevCombo.value,
                    count:1
                }
            }
            return newCombo
        })
    }
        setScore((prevScore)=>{
          return prevScore + (combo.count * actionRules[key][0][1])   
        })
        }, [count])


    const handleAction = (action) =>{
        if(action === "Fail") {
            setHP([0, 100])
        }
        else{
            setPlayerAction(()=>{
            return action
        })
        
            setCount((prevCount)=>{
            return prevCount + 1
        })
    }
    }
    
    return(
        <div className="conteyner">
        <div className='content2'>
           <div className="Score">SCORE: {Score}</div>
           <div className="characters">
           <div className='player'>
           <span>{HP[0]} xp</span> 
           <div></div>
           </div>
             <div className='bot'>
                <span>{HP[1]} xp</span>
             <div></div> 
             </div>
            </div>   
        </div>
         <div className='form'>
         <div className='Attack' onClick={() => handleAction("Attack")}></div>
         <div className='Defense' onClick={() => handleAction("Defense")}></div>
         <div className='Skip'  onClick={() => handleAction("Skip")}></div>
         <div className='Spell'  onClick={() => handleAction("Spell")}></div>
         <div className='fail' onClick={() => handleAction("Fail")}></div>
     </div>   
     </div> 
    )
}

export default Game 