import {usersAPI} from "../api/api";

export const ADD_POST = "ADD_POST";
export const SET_USER_PROFILE = "SET_USER_PROFILE";
export const SET_STATUS = "SET_STATUS";
export const UPDATE_STATUS = "UPDATE_STATUS";

let initialState = {
    posts: [
        {id: 1, message: "Hi,from Java man", likesCount: 25},
        {id: 1, message: "Python the best_ ho-ho-ho", likesCount: 55}
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostBody,
                likesCount: 100
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return{
                ...state,
                status: action.status
            }
        }
        default: return state;
    }
}


export let addPostActionCreator = (newPostBody) => {
    return {
        type: ADD_POST,
        newPostBody
    }
}

export let setUserProfileActionCreator = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
}

export let setStatusActionCreator = (status) => {
    return {
        type: SET_STATUS,
        status: status
    }
}

export let getStatusThunkCreator = (userId) => {
    return (dispatch) => {
        usersAPI.getStatus(userId).then(response => {
            dispatch(setStatusActionCreator(response.data))
        })
    }
}

export let updateStatusThunkCreator = (status) => {
    return (dispatch) => {
        usersAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0){
                dispatch(setStatusActionCreator(status))
            }
        })
    }
}

export const setUsersProfileThunkCreator = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfileActionCreator(response.data));
        });
    }
}

export default profileReducer;