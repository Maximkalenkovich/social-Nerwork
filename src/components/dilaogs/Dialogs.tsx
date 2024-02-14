import s from './Dialogs.module.css';
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import React, {ChangeEvent} from "react";
import {ActionType, addMessageActionCreate, changeNewMessageActionCreate, MessagePageType} from "../../redux/redux";

type MessageType ={
    dispatch:(action:ActionType)=>void
}


export const Dialogs:React.FC<MessagePageType & MessageType> = ({dataMessage,dataDialogs,newMessage,dispatch}) => {



    const addMessageButton = () =>{
dispatch(addMessageActionCreate(newMessage))
    }

const onChangeHandlerMessage = (e: ChangeEvent<HTMLTextAreaElement>)=>{
   let currentMessage = e.currentTarget.value
dispatch(changeNewMessageActionCreate(currentMessage))
}
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {
                   dataDialogs.map((dialog)=>(<DialogItem name={dialog.name} id={dialog.id}/>))
                }

            </div>
            <div className={s.messages}>
                {
                    dataMessage.map(el => <Message message={el.message}/>)
                }
                <textarea value={newMessage} onChange={onChangeHandlerMessage}></textarea>
                <button onClick={addMessageButton}>отправить</button>
            </div>

        </div>
    );
};
