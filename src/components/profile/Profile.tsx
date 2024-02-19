import {ProfileInfo} from "./profileInfo/ProfileInfo";
import s from './Profile.module.css'
import React from "react";
import {MyPostContainer} from "./mypost/MypostContainer";






export const Profile = () => {

    return(
        <div className={s.profile}>
            <ProfileInfo />
            <MyPostContainer />
        </div>

    )

}