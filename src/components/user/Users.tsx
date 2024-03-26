import React from "react";
import {UsersTypes} from "./UsersContainer";
import s from './styles/usersStyles.module.css'
import axios from "axios";
import avatar from '../../images/avatar.png'

export const Users = (props: UsersTypes) => {

function getUsers(){
    if (props.usersPage.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)})
    }
}
    console.log('rernder')

    console.log(props.usersPage.users)
    return (
        <>
            <button onClick={getUsers}>get</button>
            <div className={s.usersList}>
                {props.usersPage.users.map((u) => (
                    <div className={s.userContainer} key={u.id}>
                        <div>
                            <div>
                                <img src={u.photos.small? u.photos.small:avatar} alt="photo" className={s.avatar}/>
                            </div>
                            <div>

                                {u.followed ? <button onClick={() => props.unfollow(u.id)}
                                                      className={s.buttonUnFollowed}>unfollow</button> :
                                    <button onClick={() => props.follow(u.id)} className={s.buttonFollowed}>follow</button>
                                }
                            </div>
                        </div>
                        <div className={s.userDetails}>
                            <div className={s.username}>{u.name}</div>
                            <div className={s.status}>{u.status}</div>
                            <div className={'s.address'}>
                                {'u.location.city'}, {'u.location.country'}
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                ))}
            </div>
        </>

    );
};
