import React from "react";
import Friend from "./Friend/Friend";
import classes from "./Friends.module.css"
import {NavLink} from "react-router-dom";
import {FaHome, FaSearch, FaObjectGroup, FaMusic, FaNewspaper, FaFacebookMessenger} from "react-icons/fa"

const Friends = (props) => {

    let friendsElements = props.onlineFriend.map((friend) => {
        return (
            <Friend friendName={friend.name} id={friend.id}/>
        )
    })

    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <FaHome/> <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <FaFacebookMessenger/> <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <FaNewspaper/> <NavLink to="/feed" activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <FaMusic/> <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <FaObjectGroup/> <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
            </div>
            <div className={classes.item}>
                <FaSearch/> <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
            </div>
        </nav>
    )
}

export default Friends;
