import s from './Dialogs.module.css';
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import React, {ChangeEvent} from "react";
import {ActionType, MessagePageType} from "../../redux/store";


type MessageType ={
    addMessage:()=>void
    onChangeMessage:(text:string)=>void
    dialogPage:MessagePageType
}


export const Dialogs:React.FC<MessageType> = ({addMessage,onChangeMessage,dialogPage}) => {


let state = dialogPage
    const addMessageButton = () =>{
addMessage()
    }

const onChangeHandlerMessage = (e: ChangeEvent<HTMLTextAreaElement>)=>{
   let currentMessage = e.currentTarget.value
    onChangeMessage(currentMessage)

}
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {
                   dialogPage.dataDialogs.map((dialog)=>(<DialogItem name={dialog.name} id={dialog.id}/>))
                }

            </div>
            <div className={s.messages}>
                {
                    dialogPage.dataMessage.map(el => <Message message={el.message}/>)
                }
                <textarea value={dialogPage.newMessage} onChange={onChangeHandlerMessage}></textarea>
                <button onClick={addMessageButton}>отправить</button>
            </div>

        </div>
    );
};
