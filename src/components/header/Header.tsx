
import React, {useState} from "react";
import s from './Header.module.css'
import {NavBar} from "../navBar/NavBar";
import Logo from "../images/logo1.png";


export const Header = () =>{

    const [navBar, setNavBar] = useState(false)
    const [onChange, setOnChange] = useState(true)

    const hideMenu = ()=>{
        setNavBar(!navBar)
    }
    const onChangeItem= ()=>{
        setOnChange(!onChange)
        hideMenu()
    }

    return(
        <header className={s.header}>
            <img className={s.logo} src = {Logo} alt = 'logo' onClick={hideMenu} />
            {
                navBar && <div >
                    <NavBar onChange={()=>hideMenu()} onClick={onChangeItem}/>
                </div>



            }


        </header>
    )
}