import React from "react";
import {addPostActionCreate, changeNewPostActionCreate} from "../../../redux/profileReducer";
import {Mypost} from "./Mypost";
import {StoreType} from "../../../redux/store";

type ProfilePostType = {
store: StoreType
}

export const MypostContainer: React.FC<ProfilePostType> = ({store}) => {


    let state = store.getState().profilePage
    const onClickValue = () => {
        debugger
        store.dispatch(addPostActionCreate(store._state.profilePage.newPost))
    }


    const onChangeHandler = (text:string) => {
        debugger
        store.dispatch(changeNewPostActionCreate(text))
    }


    return (
 <Mypost  updateNewPostText={onChangeHandler} addPost={onClickValue} profilePage={state}/>

    )
}
