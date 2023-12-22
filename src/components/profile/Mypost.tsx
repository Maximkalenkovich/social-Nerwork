import React from "react";
import HeaderPhoto from '../../images/headerPhoto.jpg'
import s from './Mypost.module.css'
import {Post, PostPropsType} from "./mypost/post/Post";

export const Mypost = () => {
    return (
<div>
        <div>new post</div>
        <textarea></textarea>
        <button>add message</button>
    <Post message = 'Hi, how are u' like={21}/>
    <Post message = 'My first post' like={22}/>
</div>



    )
}