import './index.css';
import store from "./redux/reduxStore";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from "./App";
import {Provider} from "react-redux";
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                    <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );

// store.subscribe.bind(store)(renderTree)