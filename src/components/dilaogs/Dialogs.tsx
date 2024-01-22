import s from './Dialogs.module.css';
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import React from "react";


export type DialogType = {
    dialog:{
        name: string;
        id: number;
}[]
};

export type MessagesType = {
   messages:{
        message:string
    }[]
};


export const Dialogs:React.FC<DialogType & MessagesType> = ({dialog, messages}) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {
                    dialog.map((dialog)=>(<DialogItem name={dialog.name} id={dialog.id}/>))
                }

            </div>
            <div className={s.messages}>
                {
                    messages.map(el => <Message message={el.message}/>)
                }

            </div>

        </div>
    );
};
