import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {Mypost} from "./mypost/Mypost";
import s from './Profile.module.css'

export const Profile = () => {
    return(
        <div className={s.profile}>
            <ProfileInfo />
            <Mypost/>
        </div>

    )

}