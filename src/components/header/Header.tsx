import Logo from "../images/logo1.png";
import React from "react";
import './Header.css'

export const Header = () =>{
    return(
        <header className='header'>
               <img className={'logo'} src = {Logo} alt = 'logo'/>
        </header>
    )
}