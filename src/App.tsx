import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Dialogs} from "./components/dilaogs/Dialogs";
import { Route} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/musik/Music";
import {Profile} from "./components/profile/Profile";
import { RootStateType} from "./redux/redux";

type AppProps = {
    state: RootStateType
    addPost: (post:string )=> void
}

const App: React.FC<AppProps> = ({state,addPost}) => {

    return (

            <div className="app-wrapper">
                <Header/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs  {...state.messagesPage}/>}/>
                    <Route path='/profile' render={() => <Profile {...state.profilePage} addPostCallback={addPost}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                </div>
            </div>



    );
}

export default App

