import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import './Style/style.css'
import Home from "./Components/Home";
import Game from './Components/Game'; 
import GameOver from "./Components/GameOver";
import { useEffect, useState } from "react";

function App() {
  const [difficulty, setDifficulty] = useState()
  const [isgameOver, setGameOver] = useState(false)
  const [score, setScore] =useState();
  

  const getDifficulty = (value) => setDifficulty(value);
  const getScore = (value) => setScore(value); 
  

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
        <Route path="/game" element={<Game getScore={getScore}  diff={difficulty} getDifficulty={getDifficulty} />} />
        <Route path="/gameOver" element={<GameOver score={score}/>} />

      </Routes>
    
  );
}

export default App;
