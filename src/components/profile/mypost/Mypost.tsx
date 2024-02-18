import React, {ChangeEvent} from "react";
import {Post} from "./post/Post";
import {ProfilePageType} from "../../../redux/store";


type ProfilePostType = {
    updateNewPostText: (newPost:string) => void
    addPost: () => void
    profilePage:ProfilePageType
}

export const Mypost: React.FC<ProfilePostType> = ({
    profilePage,
                                                                        updateNewPostText,
                                                                        addPost
                                                                    }) => {

let state = profilePage
    const onClickValue = () => {
        addPost()
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let currentPost = (e.currentTarget.value)
        updateNewPostText(currentPost)
    }

    return (
        <div>
            <div>new post</div>
            <textarea value={profilePage.newPost} onChange={onChangeHandler}></textarea>
            <button onClick={onClickValue}>add message</button>
            {profilePage.dataPost.map(post => <Post message={post.message} like={post.like}/>)}
        </div>

    )
}
