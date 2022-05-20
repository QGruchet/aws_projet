import { NavLink } from "react-router-dom";
import Navigation from "../components/Navigation";
import React from 'react';

const RoomSelect = () => {
  return (
    <div>
      <Navigation/>
      <button id={"btn1"}>
        <NavLink to={{
          pathname: "/Play",
          state: { mode: "join" }
        }}>
          Rejoindre une partie
        </NavLink>
      </button>

      <button id={"btn1"}>
      <NavLink to={{
          pathname: "/create-room",
          state: { mode: "create" }
        }}>
            Créer une partie
        </NavLink>
      </button>
    </div>
  );
};

export default RoomSelect;
