import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/MessageItem";
import {Redirect} from "react-router-dom";
import {reduxForm,Field} from "redux-form";
import {TextArea} from "../FormsControls/FormControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

//ИЗБЕГАЙ ДУБЛИРОВАНИЯ КОДА!!!
//REFACTOR!!!

const Dialogs = (props) => {
    let state = props.messagesPage;

    let dialogsElements = state.dialogs.map((dialog) =>
        <DialogItem name={dialog.name} id={dialog.id}/>
    );

    let messageElements = state.messages.map((message) =>
        <MessageItem message={message.message} id={message.id}/>
    );

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if(!props.isAuth){
        return <Redirect to={"/login"} />
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>
                    {messageElements}
                </div>
                <hr/>
                <ReduxAddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

let maxLength100 = maxLengthCreator(100);

const addMessageForm = props => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={TextArea} validate={[requiredField, maxLength100]} name="newMessageBody" placeholder="enter new message" />
            <button>Send</button>
        </form>
    )
}

const ReduxAddMessageForm = reduxForm({
    form: "addMessageForm"
})(addMessageForm)

export default Dialogs;