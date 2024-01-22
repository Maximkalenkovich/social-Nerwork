import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {Mypost} from "./mypost/Mypost";
import s from './Profile.module.css'
import React from "react";
import {ProfilePageType} from "../../redux/redux";

export const Profile: React.FC<ProfilePageType> = ({dataPost}) => {

    return(
        <div className={s.profile}>
            <ProfileInfo />
            <Mypost dataPost={dataPost} />
        </div>

    )

}