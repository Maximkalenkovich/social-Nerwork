import React, {ChangeEvent} from "react";
import {Post} from "./post/Post";
import {ActionType, addPostActionCreate, changeNewPostActionCreate, ProfilePageType} from "../../../redux/redux";

type ProfilePostType = {
    dispatch: (action: ActionType) => void
}

export const Mypost: React.FC<ProfilePageType & ProfilePostType> = ({
                                                                        newPost,
                                                                        dataPost,
                                                                        dispatch
                                                                    }) => {

    const onClickValue = () => {
        dispatch(addPostActionCreate(newPost))
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      let currentPost = (e.currentTarget.value)
        dispatch(changeNewPostActionCreate(currentPost))
    }


    return (
        <div>
            <div>new post</div>
            <textarea value={newPost} onChange={onChangeHandler}></textarea>
            <button onClick={onClickValue}>add message</button>
            {dataPost.map(post => <Post message={post.message} like={post.like}/>)}
        </div>

    )
}
