import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let url =  '/dialogs/' + props.id;

    return <div className={s.dialogIt+` `+s.active}>
            <NavLink to={url} >{props.name}</NavLink>
        </div>;
}

export default DialogItem;