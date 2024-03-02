import React from "react";
import {UsersTypes} from "./UsersContainer";
import s from './styles/usersStyles.module.css'

export const Users = (props: UsersTypes) => {
    return (
        <div className={s.usersList}>
            {props.usersPage.users.map((u) => (
                <div className={s.userContainer} key={u.id}>
                    <div>
                        <div>
                            <img src={u.photoUrl} alt="photo" className={s.avatar}/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={()=>props.unfollow(u.id)} className={s.buttonUnFollowed}>unfollow</button>:
                                <button onClick={()=>props.follow(u.id)} className={s.buttonFollowed}>follow</button>
                            }

                        </div>

                    </div>

                    <div className={s.userDetails}>
                        <div className={s.username}>{u.fullName}</div>
                        <div className={s.status}>{u.status}</div>
                        <div className={s.address}>
                            {u.location.city}, {u.location.country}
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            ))}
        </div>
    );
};
