import s from './NavBar.module.css'
import React, {useState} from "react";
import {NavLink} from "react-router-dom";


export const NavBar = () => {


    const [navBar, setNavBar] = useState(false)

    const hideMenu = ()=>{
        setNavBar(!navBar)
    }
    return (
        <div>
            <button onClick={hideMenu}>xxx</button>
            <nav className={navBar? s.nav:s.hidden}>
                <div className={s.item}>
                    <NavLink to={'/profile'}  className={s.navlink} activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={'/dialogs'} className={s.navlink} activeClassName={s.active}>Message</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={'/news'} className={s.navlink} activeClassName={s.active}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={'/music'} className={s.navlink} activeClassName={s.active}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={'/setting'} className={s.navlink} activeClassName={s.active}> Settings</ NavLink>
                </div>

            </nav>
        </div>

    )
}