import { BrowserRouter, Route, Routes } from "react-router-dom";
import './Style/style.css'
import Home from "./Components/Home";
import Game from './Components/Game'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
