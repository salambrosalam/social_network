import React from "react";
import classes from "../Dialogs.module.css";

const MessageItem = (props) => {
    return (
        <div className={classes.message_item}>
            {props.message}
        </div>
    )
}

export default MessageItem;