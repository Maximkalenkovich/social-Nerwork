import React from "react";
import HeaderPhoto from '../../images/headerPhoto.jpg'
import s from './Profile.module.css'
import {Mypost} from "../Mypost";

console.log(s)
export const Profile = () => {
    return (
        <div className={s.content}>
            <div>

                {/*далее это бкдет кнопка картинка для свайпа*/}
                <img className={s.imgContent}
                     src={HeaderPhoto}
                     alt={'image'}/></div>
            <div>ava + description</div>
         <Mypost />

        </div>
    )
}