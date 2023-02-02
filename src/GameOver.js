import { useEffect, useState, memo } from "react";
import './App.css';

function GameOver({HP}){
  let index = HP.findIndex((x) => x === 0)
    return(
        <div className='content2'> 
           {index === 0 ? "Победил игрок" : "Победил бот"}
        </div>
    )
}

export default GameOver