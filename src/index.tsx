import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';




const dataPost = [
    {message:"Hi, how are u", like:21},
    {message:"My first post", like:22}
]

let dataDialogs =
    [{name: 'Dima', id: 1},
    {name: 'Lana', id: 2},
    {name: 'Katya', id: 3},
    {name: 'Roma', id: 4}]

let dataMessage = [
    {message: 'Hi' },
    {message: 'how are u' },
    {message: 'Beach' }]


ReactDOM.render(
    <App post = {dataPost} dialog={dataDialogs} messages = {dataMessage}/>,
  document.getElementById('root')
);