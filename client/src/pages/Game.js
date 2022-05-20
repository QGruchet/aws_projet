import React from 'react';
import Navigation from "../components/Navigation";
import Canvas from "../components/game/canvas";
import Chat from "../components/game/Chat";

const Game = () => {
  return (
    <div class="container">
      <Navigation/>
      <Canvas/>
      <Chat/>
    </div>
  )
};

export default Game;
