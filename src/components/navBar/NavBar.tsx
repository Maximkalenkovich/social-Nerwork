import s from './NavBar.module.css'
import React from "react";
import {NavLink} from "react-router-dom";


type NavBarType = {
    onChange:()=>void
    onClick:()=>void
}


export const NavBar = (props:NavBarType) => {

const titleNavBar = [
    {path: '/profile', name: 'Profile'},
    {path: '/dialogs', name: 'Message'},
    {path: '/news', name: 'News'},
    {path: '/music', name: 'Music'},
    {path: '/setting', name: 'Settings'},
    {path: '/users', name: 'Users'}
]

        return (
            <div>
                <nav className={s.nav}>
                    {titleNavBar.map(item => (
                        <div className={s.item} key={item.path} onClick={props.onClick}>
                            <NavLink to={item.path} className={s.navlink} activeClassName={s.active} >
                                {item.name}
                            </NavLink>
                        </div>
                    ))}
                </nav>
            </div>
        )
    }









{/*<NavLink to={'/profile'}  className={s.navlink} activeClassName={s.active}>Profile</NavLink>*/}

{/*<div className={s.item}>*/}
{/*    <NavLink to={'/dialogs'} className={s.navlink} activeClassName={s.active}>Message</NavLink>*/}
{/*</div>*/}
{/*<div className={s.item}>*/}
{/*    <NavLink to={'/news'} className={s.navlink} activeClassName={s.active}>News</NavLink>*/}
{/*</div>*/}
{/*<div className={s.item}>*/}
{/*    <NavLink to={'/music'} className={s.navlink} activeClassName={s.active}>Music</NavLink>*/}
{/*</div>*/}
{/*<div className={s.item}>*/}
{/*    <NavLink to={'/setting'} className={s.navlink} activeClassName={s.active}> Settings</ NavLink>*/}
{/*</div>*/}