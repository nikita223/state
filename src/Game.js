import classNames from "classnames";
import { useEffect, useState, memo } from "react";
import './App.css';
import {takeHistoryActions, actions, summHP, randomGenerateAction, StatusHeros, maxDamage, comboIf, formatTime} from './gameRules';
function Game({time, combo, setCombo, HP, setHP, Score, setScore, botAction, setBotAction, playerAction, setPlayerAction, count, setCount}){
    const [buttonActive, setButtonActive] = useState({button:'none', status:'deactive'});
    const [botID, setBotID] = useState(null)
    const [historyActions, setHistoryAction] = useState([
        [],   
        [],
        []
    ])
    useEffect(() => {
            
        setBotAction(()=>{   
            return randomGenerateAction()
        })
        console.log(botID)
        if(botID){
            setHistoryAction((prev)=>{
                const newPrev = [...prev];
                if(prev[botID].length === 3){
                    newPrev[botID] = [...prev[botID].filter((element, index) => (index > 0)), botAction]
                }
                else{
                    newPrev[botID] = [...prev[botID], botAction]
                }
                if(prev[0].length === 5){
                    newPrev[0] = [...prev[0].filter((element, index) => (index > 0)), playerAction]
                }
                else{
                    newPrev[0] = [...prev[0], playerAction]
                }
                return newPrev
            })
        }

        console.log(historyActions)
        const statusPlayer = new StatusHeros("player", actions[playerAction][botAction].HP[0], actions[playerAction][botAction].Score)
        const statusBot = new StatusHeros("bot", actions[playerAction][botAction].HP[1], null)
        console.log(statusPlayer)

        setHP((prevHP) =>{
            let newHP = [...prevHP]
            newHP[0] = summHP(prevHP[0], statusPlayer.HP)
            newHP[botID] = summHP(prevHP[botID], statusBot.HP)
            return newHP
        }        
           )
        console.log(botID) 
        console.log(historyActions)  
        setCombo((prevCombo) =>{   
            if(statusBot.HP === -maxDamage){
                if(statusPlayer.HP < 0){
                    return comboIf(prevCombo.Attack.count + 1, 0)   
                }
                return comboIf(prevCombo.Attack.count + 1, prevCombo.Defense.count)
            }
            if(statusPlayer.status === "Protected"){
                return comboIf(0, prevCombo.Defense.count + 1)
            }
                return comboIf(0, 0)
        })
            
        setScore((prevScore)=>{
            if(statusBot.HP === -maxDamage){
                return prevScore + (combo.Attack.count * statusPlayer.score)   
            }
            if(statusPlayer.status === "Protected"){
                return prevScore + (combo.Defense.count * statusPlayer.score)   
            }
            return prevScore + statusPlayer.score
        })
        }, [count])


    const handleAction = (action) =>{
        if(buttonActive.button === action && buttonActive.status === 'Active' && botID){
        if(action === "Fail") {
            setHP((prevHP)=>{
              const newHP = prevHP.filter((x, index)=>{
                    if(index > 0){
                        return x
                    }
                })
                HP = [0, ...newHP]
                return HP
            })
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
        setButtonActive(()=>{
            return {
                button:action,
                status:'Active'
            }
        })
        }

    const handleСhoice = (id) =>{
        setBotID(()=>{
            return id
        })
        
    }

    return(
        <div className="conteyner">
        <div className="infoPanel">
            <div className="combo">
                <div className="attack_combo">12</div>
                <div>0</div>
            </div>
            <div className="calc">
                <div className="time">{formatTime(time)}</div>  
                <div className="Score">SCORE: {Score}</div>
            </div>
            <div className="room">Комната 1</div>
        </div>
        <div className='content2'>
            <div className="characters">
                <div className="hpBar">
                    <div className="icons"></div>
                    <div> {HP[0]}</div>
                </div>
                <div className='player'>
                    <div className="img_player"></div>
                    <div className="actionBar">
                    <div className="iconsAction">
                        <div>1</div>
                        <div className="imgIcon"></div>
                        </div>
                        <div className="iconsAction">
                        <div>2</div>
                        <div className="imgIcon"></div>
                        </div>
                        <div className="iconsAction">
                        <div>3</div>
                        <div className="imgIcon"></div>
                        </div>  
                    </div>
                </div>
            </div>  
            <div className="characters">
                <div className="enemies">
                <div className="hpBar">
                    <div>{HP[1]}</div>
                    <div className="icons"></div>
                    </div>
                <div className='bot'>
                {takeHistoryActions(historyActions[1])}
                    <div className={classNames("img_bot", {"active_bot":botID === 1})} id="1"  onClick={() => handleСhoice(1)}></div> 
                </div>
                </div>
                <div className="enemies">
                <div className="hpBar">
                    <div className="icons"></div>
                    <div>{HP[2]}</div>
                    </div>
                <div className='bot'>
                {takeHistoryActions(historyActions[2])}
                    <div className={classNames("img_bot", {"active_bot":botID === 2})} id="2" onClick={() => handleСhoice(2)}></div>    
                </div>
                </div>   
            </div>   
        </div>
         <div className='form'>
            <div className="buttonsGroup">
         <div className={classNames('Attack', {'active': buttonActive.status === 'Active' &&  buttonActive.button === 'Attack'})}  onClick={() => handleAction("Attack")}></div>
         <div className={classNames('Defense', {'active': buttonActive.status === 'Active' &&  buttonActive.button === 'Defense'})}  onClick={() => handleAction("Defense")}></div>
         <div className={classNames('Skip', {'active': buttonActive.status === 'Active' &&  buttonActive.button === 'Skip'})}  onClick={() => handleAction("Skip")}></div>
         <div className={classNames('Spell', {'active': buttonActive.status === 'Active' &&  buttonActive.button === 'Spell'})}   onClick={() => handleAction("Spell")}></div>
         <div className='fail' onClick={() => handleAction("Fail")}></div>
            </div>
     </div>   
     </div> 
    )
}

export default Game 