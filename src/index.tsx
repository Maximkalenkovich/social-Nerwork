import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType,state} from "./redux/redux";



ReactDOM.render(
    <App state = {state}/>,
  document.getElementById('root')
);