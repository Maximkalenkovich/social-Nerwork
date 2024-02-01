  import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {Mypost} from "./mypost/Mypost";
import s from './Profile.module.css'
import React from "react";
import {ProfilePageType, } from "../../redux/redux";


type ProfilePostType = {
      addPostCallback:(post:string)=>void
  }

export const Profile: React.FC<ProfilePageType & ProfilePostType> = ({dataPost,addPostCallback}) => {

    return(
        <div className={s.profile}>
            <ProfileInfo />
            <Mypost dataPost={dataPost} addPostCallback={addPostCallback} />
        </div>

    )

}