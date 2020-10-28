import React from "react";
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (

    <div className={classes.header}>

        <div className={classes.loginBlock}>
            {props.isAuth ?<div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                : <NavLink className={classes.item} to={"/login"}>
                    LOGIN
                </NavLink>}
        </div>
    </div>
    )
}

export default Header;
