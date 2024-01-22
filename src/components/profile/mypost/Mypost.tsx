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

    {dataPost.map(post => <Post message={post.message} like={post.like}/>)}

</div>

    )
}