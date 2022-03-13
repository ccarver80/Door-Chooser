import React from "react";
import { useNavigate } from "react-router-dom";
import freedom from '../imgs/freedom.png'

function GameOver(props) {
    const nav = useNavigate()
    return(
        <div className="center">
        <div className="title">
        <h1>YOU ESCAPED GREAT JOB!</h1> 
        <img className="gameWin" src={freedom} alt='freedom'/>
        <button className="gameButtons" onClick={() => nav('/')}>Try Again?</button>
        </div>
        </div>
    )
}

export default GameOver; 