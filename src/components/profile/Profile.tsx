  import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {Mypost} from "./mypost/Mypost";
import s from './Profile.module.css'
import React from "react";
import store, {ProfilePageType, StoreType} from "../../redux/store";
  import {MypostContainer} from "./mypost/MypostContainer";


type ProfilePostType = {
  store: StoreType
  }

export const Profile = (props:ProfilePostType) => {

    return(
        <div className={s.profile}>
            <ProfileInfo />
            <MypostContainer store={store}/>
        </div>

    )

}