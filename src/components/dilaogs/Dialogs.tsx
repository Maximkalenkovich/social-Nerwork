import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem";
import {Message} from "./message/Message";

export const Dialogs = () => {

    let dataDialogs = [{name: 'Dima', id: 1},
        {name: 'Lana', id: 2},
        {name: 'Katya', id: 3},
        {name: 'Roma', id: 4}]

    let dataMessage = [
        {message: 'Hi' },
        {message: 'how are u' },
        {message: 'Beach' }]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={dataDialogs[0].name} id={dataDialogs[0].id} />
                <DialogItem name={dataDialogs[1].name} id={dataDialogs[1].id} />

            </div>
            <div className={s.messages}>
                <Message message={dataMessage[0].message}/>
                <Message message={dataMessage[1].message}/>
                <Message message={dataMessage[2].message}/>
            </div>

        </div>
    );
};
