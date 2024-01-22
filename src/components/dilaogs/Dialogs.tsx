import s from './Dialogs.module.css';
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import React from "react";
import {MessagePageType, RootStateType} from "../../redux/redux";




export const Dialogs:React.FC<MessagePageType> = ({dataMessage,dataDialogs}) => {

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

            </div>

        </div>
    );
};
