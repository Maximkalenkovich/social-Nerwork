import s from './Dialogs.module.css';
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import React from "react";
import {MessagePageType, RootStateType} from "../../redux/redux";




export const Dialogs:React.FC<MessagePageType> = ({dataMessage,dataDialogs}) => {


    const LinkTextarea = React.createRef<HTMLTextAreaElement>()

    const AddMessageButton = () =>{
        alert(LinkTextarea.current?.value)
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
                <textarea ref={LinkTextarea}></textarea>
                <button onClick={AddMessageButton}>отправить</button>
            </div>

        </div>
    );
};
