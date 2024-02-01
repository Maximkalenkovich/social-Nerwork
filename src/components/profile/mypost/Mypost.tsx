import React  from "react";
import {Post} from "./post/Post";
import {addPost, ProfilePageType} from "../../../redux/redux";


 type ProfilePostType = {
    addPostCallback:(post:string)=>void
}

export const Mypost: React.FC<ProfilePageType & ProfilePostType> = ({dataPost,addPostCallback}) => {


    const newPostAdd = React.createRef<HTMLTextAreaElement>()

    const onClickValue = () =>{
        if(newPostAdd.current){
            addPostCallback(newPostAdd.current.value )
        }


    }

    return (
<div>
        <div>new post</div>
        <textarea ref={newPostAdd}></textarea>
        <button onClick={onClickValue}>add message</button>
    {dataPost.map(post => <Post message={post.message} like={post.like}/>)}
</div>

    )
}