import React from 'react';
import Navigation from "../components/Navigation";
import Canvas from "../components/game/canvas";
import Tchat from "../components/game/tchat";
import ListPlayers from "../components/game/listPlayers";
import Chatbox from "../components/game/tchat";

const Game = () => {
  return (
      <div className="container">
        <Navigation/>
        <Canvas/>
        <ListPlayers/>
      </div>
  )
};

export default Game;
