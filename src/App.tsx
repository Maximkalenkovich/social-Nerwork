import React from 'react';
import './App.css';
import Logo from '../src/pngwing.com.png'
import {Header} from "./components/Header";
import {NavBar} from "./components/NavBar";
import {Profile} from "./components/Profile";


function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <Profile/>
        </div>
    );
}

export default App

