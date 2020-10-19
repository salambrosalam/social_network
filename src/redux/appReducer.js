import {authoriseMeThunkCreator} from "./authReducer";

const SET_INITIALIZED = "SET_INITIALIZED";

let initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_INITIALIZED:
            return{
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccessActionCreator = () => {
    return{
        type: SET_INITIALIZED
    }
}

export const initializeThunkCreator = () => {
    return(dispatch) => {
        let promise = dispatch(authoriseMeThunkCreator())
        promise.then(() => {
            dispatch(initializedSuccessActionCreator())
        });
    }
}