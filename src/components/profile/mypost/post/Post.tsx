import React from "react";
import HeaderPhoto from '../../images/headerPhoto.jpg'
import s from './Post.module.css'


export type PostPropsType = {
    message: string
    like?: number
}

console.log(s)
export const Post = (props: PostPropsType) => {
    return (
        <div>
            <div className={s.item}>{props.message}</div>
            <span>like {props.like}</span>

        </div>

    )
}