import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import './Style/style.css'
import Home from "./Components/Home";
import Game from './Components/Game'; 
import { useEffect, useState } from "react";

function App() {
  const [difficulty, setDifficulty] = useState()
  const [isDiffSet, setDiff] = useState(false)

  const getDifficulty = (value) => setDifficulty(value)
  const removeDifficulty = (value) => setDiff(value)


  useEffect(() => {
    console.log(difficulty)
      setDiff(true)
    
  }, [difficulty])

  useEffect(() => {
    
  }, [isDiffSet])
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home isDiffSet={isDiffSet} getDifficulty={getDifficulty} />} />
        <Route path="/game" element={<Game isDiffSet={isDiffSet} diff={difficulty} removeDifficulty={removeDifficulty} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
