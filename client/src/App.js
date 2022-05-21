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
import CreateGame from './pages/CreateGame';
import Chat from './components/game/Chat';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Notfound />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/tutorial' element={<Tutorial />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/room-select' element={<PrivateRoute><RoomSelect /></PrivateRoute>} />
        <Route path='/play' element={<PrivateRoute><Game /></PrivateRoute>} />
        <Route path='/create-room' element={<PrivateRoute><CreateGame /></PrivateRoute>} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
