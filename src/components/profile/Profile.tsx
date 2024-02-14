  import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {Mypost} from "./mypost/Mypost";
import s from './Profile.module.css'
import React from "react";
import {ActionType, ProfilePageType} from "../../redux/redux";


type ProfilePostType = {
    dispatch:(action:ActionType)=>void
  }

export const Profile: React.FC<ProfilePageType & ProfilePostType> = ({newPost,dataPost,dispatch}) => {

    return(
        <div className={s.profile}>
            <ProfileInfo />
            <Mypost dataPost={dataPost} dispatch = {dispatch} newPost={newPost}/>
        </div>

    )

}