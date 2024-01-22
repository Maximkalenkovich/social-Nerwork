import React from "react";
import {Post} from "./post/Post";
import {ProfilePageType} from "../../../redux/redux";


export const Mypost: React.FC<ProfilePageType> = ({dataPost}) => {

    return (
<div>
        <div>new post</div>
        <textarea></textarea>
        <button>add message</button>

    {dataPost.map(post => <Post message={post.message} like={post.like}/>)}
    <p></p>
</div>

    )
}