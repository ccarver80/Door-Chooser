import React from "react";
import { useNavigate } from "react-router-dom";
import scary from '../imgs/scary.png'

function GameOver(props) {
    const nav = useNavigate()
    return(
        <div className="center">
        <div className="title">
        <h1>YOU GOT CAUGHT! </h1> 
        <h1>Score: {props.score}</h1>
        <img src={scary} alt='scary'/>
        <button className="gameButtons" onClick={() => nav('/')}>Try Again?</button>
        </div>
        </div>
    )
}

export default GameOver; 