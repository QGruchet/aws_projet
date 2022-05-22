import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import About from './pages/About';
import Play from './pages/Play';
import Home from './pages/Home';
import Notfound from './pages/NotFound';
import RoomSelect from './pages/RoomSelect';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Tutorial from './pages/Tutorial';
import CreateGame from './pages/CreateGame';
import { PrivateRoute, PublicRoute } from './utils/RouteGuards'
import Settings from './pages/Settings';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Notfound />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />
        <Route path='/signup' element={<PublicRoute><Signup /></PublicRoute>} />
        <Route path='/tutorial' element={<Tutorial />} />
        <Route path='/room-select' element={<PrivateRoute><RoomSelect /></PrivateRoute>} />
        <Route path='/settings' element={<PrivateRoute><Settings /></PrivateRoute>} />
        <Route path='/play' element={<PrivateRoute><Play /></PrivateRoute>} />
        <Route path='/create-room' element={<PrivateRoute><CreateGame /></PrivateRoute>} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
