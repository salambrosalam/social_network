import {usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setUserDataActionCreator = (userId, login, email, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId, login, email, isAuth
        }
    }
}

export const authoriseMeThunkCreator = () => {
    return async (dispatch) => {
        let response = await usersAPI.authoriseMe()
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setUserDataActionCreator(id, login, email, true));
        }
    }
}

export const loginThunkCreator = (email, password, rememberMe) => {
    return async (dispatch) => {
        let response = await usersAPI.login(email, password, rememberMe);
        if (response.data.resultCode === 0) {
            dispatch(authoriseMeThunkCreator())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
            dispatch(stopSubmit("login", {_error: message}));
        }
    }
}

export const logoutThunkCreator = () => {
    return async (dispatch) => {
        let response = await usersAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setUserDataActionCreator(null, null, null, false))
        }
    }
}

export default authReducer;