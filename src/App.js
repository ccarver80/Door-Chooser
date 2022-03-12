import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import './Style/style.css'
import Home from "./Components/Home";
import Game from './Components/Game'; 
import { useEffect, useState } from "react";

function App() {
  const [difficulty, setDifficulty] = useState()
  

  const getDifficulty = (value) => setDifficulty(value)
  

  const nav = useNavigate()
  useEffect(() => {
    if(difficulty != undefined){
      nav('/game')
    }else {
      nav('/')
    }
    
    
  }, [difficulty])

  
  
  return (
    
      <Routes>
        <Route exact path="/" element={<Home  getDifficulty={getDifficulty} />} />
        <Route path="/game" element={<Game  diff={difficulty} getDifficulty={getDifficulty} />} />
      </Routes>
    
  );
}

export default App;
