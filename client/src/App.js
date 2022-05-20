import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import About from './pages/About';
import Game from './pages/Game';
import Home from './pages/Home';
import Notfound from './pages/NotFound';
import RoomSelect from './pages/RoomSelect';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Tutorial from './pages/Tutorial';
import CreateGame from "./pages/CreateGame";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Notfound />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/play' element={<Game />} />
        <Route path='/create-room' element={<CreateGame/>} />
        <Route path='/room-select' element={<RoomSelect />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/tutorial' element={<Tutorial />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
