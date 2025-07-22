

import { Route, Routes } from 'react-router-dom'
import StartGame from './pages/StartGame';
import PlayGame from './pages/Playgame';
import HomePage from './pages/HomePage';
// import HomePage from './pages/HomePage';

function App() {


  return (
    <div>
      <Routes>
      <Route path='/' element={<HomePage/>} />
        <Route path="/start" element={<StartGame />} />
        <Route path="/play" element={<PlayGame/>} />
      </Routes>
      
    </div>
  );
}

export default App
