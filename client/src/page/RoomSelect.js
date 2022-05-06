import React from 'react';
import {NavLink} from "react-router-dom";
import Navigation from "../components/Navigation";

const RoomSelect = () => {
  return (
    <div>
      <Navigation/>
      <button id={"btn1"}>
        <NavLink to={"/Play"}>
            Rejoindre une partie
        </NavLink>
      </button>

      <button id={"btn1"}>
        <NavLink to={"/Play"}>
            Créer une partie
        </NavLink>
      </button>
    </div>
  );
};

export default RoomSelect;
