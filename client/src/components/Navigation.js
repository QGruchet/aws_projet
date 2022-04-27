import React from 'react';
import {NavLink} from "react-router-dom";
import Logo from "./Logo";


const Navigation = () => {
    return (
         <div className={"navigation"}>
             <ul>
                 <NavLink exact to={"/"} className={(nav) => (nav.isActive ? "nav-active" : "")}>
                     <li>Home</li>
                 </NavLink>
                 <NavLink to={"/HowPlay"}  className={(nav) => (nav.isActive ? "nav-active" : "")}>
                     <li>Tutorial</li>
                 </NavLink>
                 <NavLink to={"/About"}  className={(nav) => (nav.isActive ? "nav-active" : "")}>
                     <li>About</li>
                 </NavLink>
                 <NavLink id={"right"} to={"/Play"}  className={(nav) => (nav.isActive ? "nav-active" : "")}>
                     <li>Play</li>
                 </NavLink>
                 <NavLink to={"/Signup"}  className={(nav) => (nav.isActive ? "nav-active" : "")}>
                     <li>Sign up</li>
                 </NavLink>
             </ul>
        </div>
    );
};

export default Navigation;