import { useEffect, useState, memo } from "react";
import './App.css';

function GameOver({HP, Score, over, setTimer, count}){
  let index = HP.findIndex((x) => x === 0)
  useEffect(()=>{
    setTimer((prevTime)=>{
      clearInterval(prevTime)
      return null
    })
  }, [])
 
    return(
        <div className='content2'> 
        <div className="Score">SCORE: {parseInt(Score/count)}</div>
        <div className="result">{index === 1 ? "Победил игрок" : "Победил бот"}</div>  
        <div className="over" onClick={over}>Новая игра</div>
        </div>
    )
}

export default GameOver