import React from "react";
import HeaderPhoto from '../../images/headerPhoto.jpg'
import s from './Mypost.module.css'

console.log(s)
export const Mypost = () => {
    return (
<div>
    <div>my post
        <div>new post</div>
    </div>
    <div className={s.item}>post 1</div>
    <div className={s.item}>post 2</div>
    <div className={s.item}>post 3</div>
</div>



    )
}