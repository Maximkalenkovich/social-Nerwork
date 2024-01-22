import React from "react";
import {Post} from "./post/Post";

export interface PostProps {
    post: {
        message: string;
        like: number;
    }[];
}

export const Mypost: React.FC<PostProps> = ({post}) => {

    return (
<div>
        <div>new post</div>
        <textarea></textarea>
        <button>add message</button>

    {post.map(post => <Post message={post.message} like={post.like}/>)}
    <p></p>
</div>

    )
}