import React from 'react';
import "../draw.js"
import Navigation from "../components/Navigation";
import Canvas from "../components/game/canvas";

const Game = () => {
  return (
      <div className="container">
        <Navigation/>
        <Canvas/>

      </div>
  )
};

export default Game;
