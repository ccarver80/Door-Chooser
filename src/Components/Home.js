import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Game from "./Game";


const Home = (props) => {

 const [difficulty, setDifficulty] = useState()
 const nav = useNavigate(   )
 useEffect(() => {
    console.log(difficulty);
    props.getDifficulty(difficulty);
    if(props.isDiffSet){
        nav('/game')
    }
 }, [difficulty])

   
   
  return (
    <div className="center">
      <h1>Pick your difficulty:</h1>

      <button className="startButton" onClick={() => {
          setDifficulty(0);
         
      }} 
      >Easy</button>

      <button className="startButton" onClick={() => {
          setDifficulty(1);
          
      }} >Normal</button>

      <button className="startButton" onClick={() => {
          setDifficulty(2);
        
      }} >Hard</button>

      
            
     
              
         
    
    </div>
  );
};

export default Home;
