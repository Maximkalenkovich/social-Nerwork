import React from "react";
import HeaderPhoto from '../images/headerPhoto.jpg'
import s from './Profile.module.css'
export const Profile = () => {
    return (
        <div className={s.content}>
            <div>

                {/*далее это бкдет кнопка картинка для свайпа*/}
                <img className={s.imgContent}
                     src={HeaderPhoto}
                     alt={'image'}/></div>
            <div>ava + description</div>
            <div>my post
                <div>new post</div>
            </div>
            <div className={s.item}>post 1</div>
            <div className={s.item}>post 2</div>
            <div className={s.item}>post 3</div>
        </div>
    )
}