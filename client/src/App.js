import React from 'react';
import './App.css';
import Home from "./page/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Notfound from "./page/Notfound";
import About from "./page/About";
import HowPlay from "./page/HowPlay";
import Game from "./page/Game";
import Sign from "./page/Sign";

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/About" exact element={<About/>} />
                <Route path="/HowPlay" exact element={<HowPlay/>} />
                <Route path="/Play" exact element={<Game/>}/>
                <Route path="/Sign" exact element={<Sign/>}/>
                <Route path="*" element={<Notfound/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;