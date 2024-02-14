import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Dialogs} from "./components/dilaogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/musik/Music";
import {Profile} from "./components/profile/Profile";
import {StoreType} from "./redux/redux";

type StoreTypeProps = {
    store: StoreType
}

const App: React.FC<StoreTypeProps> = (props) => {
    const state = props.store.getState()
    return (
        <div className="app-wrapper">
            <Header/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <Dialogs  {...state.messagesPage}
                                                               dispatch={props.store.dispatch.bind(props.store)}/>}/>
                <Route path='/profile' render={() => <Profile {...state.profilePage}
                                                              dispatch={props.store.dispatch.bind(props.store)}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
            </div>
        </div>


    );
}

export default App

