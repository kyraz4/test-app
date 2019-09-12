import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {Redirect} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import { TextArea } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';

const Dialogs = (props) => {

 let addNewMessage = (values) => {
     props.onSendMessageClick(values.newMassageBody);
 }

 if (!props.isAuth) return <Redirect to = {'/login'} />

return <div className={s.dialogs}>
    <div className={s.dialogItems}>
        {props.messagesPage.dialogsArr.map(el => <DialogItem id={el.id} key={el.id} name={el.name} />)}
        </div>
        <div className = {s.messages}>
        {props.messagesPage.messagesArr.map(el => <Message id={el.id}  key={el.id} message={el.message} />)}
        </div>
        <div>
          <AddMessageFormRedux onSubmit = {addNewMessage} />   
        </div>
</div>;
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
   return (
    <form onSubmit = {props.handleSubmit}>
    <div>
        <Field name = 'newMassageBody' 
        component = {TextArea}
        validate = {[required, maxLength50]}
        placeholder='Enter message here' />
        </div>
    <div>
        <button >SEND</button>
        </div>
    </form>
   )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;