import './index.css';
import store from "./redux/redux";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from "./App";


const renderTree = () =>{
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}  />
        </BrowserRouter>
        ,
        document.getElementById('root')
    );
}

renderTree()
store.subscribe.bind(store)(renderTree)