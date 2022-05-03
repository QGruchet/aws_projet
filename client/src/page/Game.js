import React from 'react';
import "../draw.js"
import Navigation from "../components/Navigation";
import Canvas from "../components/game/canvas";
import Tchat from "../components/game/tchat";
import ListPlayers from "../components/game/listPlayers";

const Game = () => {
  return (
      <div className="container">
        <Navigation/>
        <Canvas/>
        <Tchat/>
        <ListPlayers/>
      </div>
  )
};

export default Game;
