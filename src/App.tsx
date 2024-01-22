import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {NavBar} from "./components/navBar/NavBar";
import {Dialogs} from "./components/dilaogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/musik/Music";
import {Profile} from "./components/profile/Profile";

function App() {

    return (
        <BrowserRouter >
            <div className="app-wrapper">
                <Header/>


                    <NavBar  />



                <div className='app-wrapper-content'>
                    <Route path='/dialogs' component={Dialogs} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                </div>


            </div>

        </BrowserRouter>

    );
}

export default App

