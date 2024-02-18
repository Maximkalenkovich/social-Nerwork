
import React from "react";
import {StoreType} from "../../redux/store";
import {addMessageActionCreate, changeNewMessageActionCreate} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";

type MessageType ={
   store:StoreType
}


export const DialogsContainer:React.FC<MessageType> = ({store}) => {

    let state = store.getState().messagesPage

    const addMessageButton = () =>{
store.dispatch(addMessageActionCreate(store._state.messagesPage.newMessage))
    }

const onChangeHandlerMessage = (text:string)=>{

store.dispatch(changeNewMessageActionCreate(text))
}
    return (
<Dialogs addMessage={addMessageButton} onChangeMessage={onChangeHandlerMessage} dialogPage={state}/>
    );
};
