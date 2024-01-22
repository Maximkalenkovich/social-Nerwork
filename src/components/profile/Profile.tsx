import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {Mypost, PostProps} from "./mypost/Mypost";
import s from './Profile.module.css'
import React from "react";

export const Profile: React.FC<PostProps> = ({post}) => {

    return(
        <div className={s.profile}>
            <ProfileInfo />
            <Mypost post={post}/>
        </div>

    )

}