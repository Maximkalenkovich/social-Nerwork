import Logo from "../images/logo1.png";
import React from "react";
import s from './Header.module.css'


export const Header = () =>{
    return(
        <header className={s.header}>
               <img className={s.logo} src = {Logo} alt = 'logo'/>
        </header>
    )
}