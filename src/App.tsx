import React from 'react';
import './App.css';
import Logo from '../src/pngwing.com.png'


function App() {
    return (
        <div className="app-wrapper">
           <header className='header'>
               <img src = {Logo} alt = 'logo'/>
           </header>
            <nav className='nav'>
                <div><a>Profile</a></div>
                <div><a>Message</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>
            </nav>

            <div className={'content'}>

                <div>
                    <img className={'img-content'} src='https://media.istockphoto.com/id/1062947134/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%BE%D0%B1%D0%BE%D1%80-%D0%B2%D0%B0%D1%81%D0%B8%D0%BB%D0%B8%D1%8F-%D0%B1%D0%BB%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B8-%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D1%8B%D0%B5-%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%B5-%D0%BB%D1%83%D1%87%D0%B8-%D1%81%D0%BE%D0%BB%D0%BD%D1%86%D0%B0.jpg?s=612x612&w=0&k=20&c=rSRPoCl78qvsYxaRhOa0xS_z10jDDnJvhteWLM5w8yo=' alt={ 'image'}/></div>

            <div>ava + description</div>
            <div>my post<div>new post</div></div>
            <div>post 1</div>
            <div>post 2</div>
            <div>post 3</div>

        </div>
            </div>
    );
}

export default App

