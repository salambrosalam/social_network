import React from "react";
import anonymous from "../../../media/create_account_2_anonymous.png";
import classes from "./Friend.module.css"

const Friend = (props) => {
    return(
    <div className={classes.item}>
        <img src={anonymous}/>
        <div>{props.friendName}</div>
    </div>
    )
}

export default Friend;