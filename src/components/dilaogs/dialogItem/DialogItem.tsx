import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React  from 'react';

type DialogItemProps = {
    name: string
  id: number
}
export const DialogItem = (props: DialogItemProps) => {
    return (
        <div className={s.dialogItems}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={s.active} className={s.dialog}>
                {props.name}
            </NavLink>
        </div>
    )

}