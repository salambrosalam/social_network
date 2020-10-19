import React from "react";
import Dialogs from "./Dialogs";
import {sendMessageActionCreator} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }

}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageActionCreator(newMessageBody));
        }
    }
}

export const DialogsContainer = compose(
    WithAuthRedirect,
    connect(mapStateToProps,mapDispatchToProps)
)(Dialogs);