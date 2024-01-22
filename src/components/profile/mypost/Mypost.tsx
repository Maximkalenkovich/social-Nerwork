import React from "react";
import {Post} from "./post/Post";

export const Mypost = () => {
    const dataPost = [
        {message:"Hi, how are u", like:21},
        {message:"My first post", like:22}
    ]
    return (
<div>
        <div>new post</div>
        <textarea></textarea>
        <button>add message</button>
    <Post message = {dataPost[0].message} like={dataPost[0].like}/>
    <Post message = {dataPost[1].message} like={dataPost[1].like}/>
</div>

    )
}