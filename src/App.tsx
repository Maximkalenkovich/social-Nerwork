import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {NavBar} from "./components/navBar/NavBar";
import {Dialogs, DialogType, MessagesType} from "./components/dilaogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/musik/Music";
import {Profile} from "./components/profile/Profile";
import {PostProps} from "./components/profile/mypost/Mypost";


type DataProps = PostProps & DialogType & MessagesType

const App:React.FC<DataProps> = ({post,dialog, messages}) => {

    return (
        <BrowserRouter >
            <div className="app-wrapper">
                <Header/>
                    <NavBar  />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={()=><Dialogs dialog={dialog} messages={messages}/>} />
                    <Route path='/profile' render={()=><Profile post={post}/>} />
                    <Route path='/news' render={()=><News />} />
                    <Route path='/music' render={()=><Music />} />
                </div>


            </div>

        </BrowserRouter>

    );
}

export default App

