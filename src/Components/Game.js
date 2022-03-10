import React, { useEffect, useState } from "react";
import { useNavigate, useHistory } from "react-router-dom";

const Game = (props) => {
    
    const nav = useNavigate()

   useState(() => {
       console.log('Hello')
       if(props.isDiffSet == false){
           nav('/')
       }
   })

   function handleClick() {
       props.removeDifficulty(false)
       
   }
    
    return (
        <div>
        <h1>difficulty {props.diff}</h1>
        <button onClick={handleClick}>return</button>
        </div>
    )
}

export default Game;    