import React from 'react';
import './App.css';
import Home from "./page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Notfound from "./page/Notfound";
import About from "./page/About";
import HowPlay from "./page/HowPlay";
import Game from "./page/Game";
import SignupForm from "./page/Signup";
import SigninForm from "./page/Signin";
import RoomSelect from "./page/RoomSelect";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/About" exact element={<About />} />
                <Route path="/HowPlay" exact element={<HowPlay />} />
                <Route path="/RoomSelect" exact element={<RoomSelect />} />
                <Route path="/Play" exact element={<Game />} />
                <Route path="/Signup" exact element={<SignupForm />} />
                <Route path="/Signin" exact element={<SigninForm />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
