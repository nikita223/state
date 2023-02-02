import { useEffect, useState, memo } from "react";
import './App.css';

function Game({HP}){
    return(
        <div className='content2'> 
            <div className='player'> {HP[0]} xp</div>
             <div className='bot'> {HP[1]} xp</div>
        </div>
    )
}

export default Game 