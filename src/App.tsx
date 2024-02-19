import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Route} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/musik/Music";
import {Profile} from "./components/profile/Profile";
import {DialogsContainer} from "./components/dilaogs/DialogsContainer";

const App = () => {

    return (
        <div className="app-wrapper">
            <Header/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>

            </div>
        </div>


    );
}

export default App

