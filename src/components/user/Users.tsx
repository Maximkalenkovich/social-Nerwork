import React from "react";
import {UsersTypes} from "./UsersContainer";
import s from './styles/usersStyles.module.css'

export const Users = (props: UsersTypes) => {
    return (
        <div className={s.usersList}>
            {props.usersPage.users.map((u) => (
                <div className={s.userContainer} key={u.id}>
                    <div>
                        <img src={u.photoUrl} alt="photo" className={s.avatar}/>

                    </div>
                    <button>fdvwvw</button>
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
