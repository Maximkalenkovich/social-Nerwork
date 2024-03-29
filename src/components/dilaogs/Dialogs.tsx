import s from './Dialogs.module.css';
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import React, {ChangeEvent} from "react";
import {MessagePageType} from "../../redux/store";


type MessageType ={
    addMessage:(newMessahe:string)=>void
    onChangeMessage:(text:string)=>void
    dialogPage:MessagePageType
}


export const Dialogs:React.FC<MessageType> = ({addMessage,onChangeMessage,dialogPage}) => {


let state = dialogPage
    const addMessageButton = () =>{
addMessage(dialogPage.newMessage)
    }

const onChangeHandlerMessage = (e: ChangeEvent<HTMLTextAreaElement>)=>{
   let currentMessage = e.currentTarget.value
    onChangeMessage(currentMessage)

}
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {
                   dialogPage.dataDialogs.map((dialog)=>(<DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>))
                }

            </div>
            <div className={s.messages}>
                {
                    dialogPage.dataMessage.map(el => <Message message={el.message} key={el.id}/>)
                }
                <textarea value={dialogPage.newMessage} onChange={onChangeHandlerMessage}></textarea>
                <button onClick={addMessageButton}>отправить</button>
            </div>

        </div>
    );
};
