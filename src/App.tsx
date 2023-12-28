import React from 'react';
import './App.css';

import {Header} from "./components/header/Header";
import {NavBar} from "./components/navBar/NavBar";
import {Profile} from "./components/profile/mypost/Profile";
import {Dialogs} from "./components/dilaogs/Dialogs";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
              <Dialogs />
            </div>

            {/*<Profile/>*/}
        </div>
    );
}

export default App

