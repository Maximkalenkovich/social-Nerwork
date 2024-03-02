import React, {ChangeEvent} from "react";
import {Post} from "./post/Post";
import {ProfileType} from "../../../redux/profileReducer";


type ProfilePostType = {
    updateNewPostText: (newPost: string) => void
    addPost: (text: string) => void
    posts:ProfileType[]
    newPost:string
}

export const Mypost: React.FC<ProfilePostType> = ({
                                          posts, newPost,
                                          updateNewPostText,
                                          addPost
                                      }) => {


    const onClickValue = () => {
        addPost(newPost)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let currentPost = (e.currentTarget.value)
        updateNewPostText(currentPost)
    }

    return (
        <div>
            <div>new post</div>
            <textarea value={newPost} onChange={onChangeHandler}></textarea>
            <button onClick={onClickValue}>add message</button>
            {posts.map(post => <Post message={post.message} key={post.id} like={post.like}/>)}
        </div>

    )
}
