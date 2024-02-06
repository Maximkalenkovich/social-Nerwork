import React, {ChangeEvent} from "react";
import {Post} from "./post/Post";
import { ProfilePageType} from "../../../redux/redux";


 type ProfilePostType = {
    addPostCallback:(post:string)=>void
     changeNewTextCallback:(newPost:string)=>void
}

export const Mypost: React.FC<ProfilePageType & ProfilePostType> = ({newPost,dataPost,addPostCallback,changeNewTextCallback}) => {


    // const newPostAdd = React.createRef<HTMLTextAreaElement>()

    const onClickValue = () =>{
            addPostCallback(newPost)
        changeNewTextCallback('')
    }

   const onChangeHandler =(e: ChangeEvent<HTMLTextAreaElement>)=>{
      changeNewTextCallback(e.currentTarget.value)
   }


    return (
<div>
        <div>new post</div>
        <textarea  value={newPost} onChange={onChangeHandler} ></textarea>
        <button onClick={onClickValue}>add message</button>
    {dataPost.map(post => <Post message={post.message} like={post.like}/>)}
</div>

    )
}