import React from "react";
import Friend from "./Friend/Friend";
import classes from "./Friends.module.css"
import {NavLink} from "react-router-dom";

const Friends = (props) => {

    let friendsElements = props.onlineFriend.map((friend) => {
        return (
            <Friend friendName={friend.name} id={friend.id}/>
        )
    })

    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/feed" activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
            </div>
            <div className={classes.bg}>
                Friends online:
                {friendsElements}
            </div>
        </nav>
    )
}

export default Friends;