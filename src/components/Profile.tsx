import React from "react";
import HeaderPhoto from '../components/images/headerPhoto.jpg'

export const Profile = () => {
    return (
        <div className={'content'}>
            <div>
                <img className={'img-content'}
                     src={HeaderPhoto}
                     alt={'image'}/></div>
            <div>ava + description</div>
            <div>my post
                <div>new post</div>
            </div>
            <div>post 1</div>
            <div>post 2</div>
            <div>post 3</div>
        </div>
    )
}