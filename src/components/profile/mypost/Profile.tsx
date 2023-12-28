import React from "react";
import HeaderPhoto from '../../images/headerPhoto.jpg'
import {Mypost} from "../Mypost";

export const Profile = () => {
    return (
        <div >
            <div>

                {/*далее это бкдет кнопка картинка для свайпа*/}
                <img className={'imgContent'}
                     src={HeaderPhoto}
                     alt={'image'}/></div>
            <div>ava + description</div>
         <Mypost />

        </div>
    )
}