import React from 'react';
import Navigation from "../components/Navigation";
import Canvas from "../components/game/canvas";
import Tchat from "../components/game/tchat";
import ListPlayers from "../components/game/listPlayers";
import Chatbox from "../components/game/tchat";
import Chat from "../components/game/tchat";

const Game = () => {
  return (
      <div >
        <Navigation/>
        <Canvas/>
        <Chat/>
      </div>
  )
};

export default Game;
