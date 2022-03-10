import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const nav = useNavigate();
    return(
       <div className="center">
       <h1>Pick your difficulty:</h1>
       <button className="startButton">Easy</button>
       <button className="startButton">Normal</button>
       <button className="startButton">Hard</button>
       </div>
    )
}

export default Home; 