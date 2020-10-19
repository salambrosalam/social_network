import React from "react";
import classes from "./Navbar.module.css";
import Friends from "../Friends/Friends";
import {connect} from "react-redux";

//NavLink - для динамической подгрузки контента без перезагрузки страниц

const mapStateToProps = (state) => {
    return {
        onlineFriend: state.sidebar.friends
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const NavBar = connect(mapStateToProps,mapDispatchToProps)(Friends);

export default NavBar;