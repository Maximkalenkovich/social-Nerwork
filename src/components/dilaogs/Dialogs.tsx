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
                {
                    dataDialogs.map((el)=>(<DialogItem name={el.name} id={el.id}/>))
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
