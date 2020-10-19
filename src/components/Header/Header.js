import React from "react";
import anonymous from "../../media/create_account_2_anonymous.png";
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (

    <header className={classes.header}>
        <img src={anonymous}/>

        <div className={classes.loginBlock}>

            {props.isAuth ?<div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                : <NavLink to={"/login"}>
                    LOGIN
                </NavLink>}
        </div>
    </header>
    )
}

export default Header;