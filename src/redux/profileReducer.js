import {usersAPI} from "../api/api";

export const ADD_POST = "ADD_POST";
export const SET_USER_PROFILE = "SET_USER_PROFILE";
export const SET_STATUS = "SET_STATUS";
export const UPDATE_STATUS = "UPDATE_STATUS";
export const DELETE_POST = "DELETE_POST";

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
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId )
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

export let deletePostActionCreator = (postId) => {
    return {
        type: DELETE_POST,
        postId
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
    return async (dispatch) => {
        let response = await usersAPI.getStatus(userId)
            dispatch(setStatusActionCreator(response.data))
        }
}

export let updateStatusThunkCreator = (status) => {
    return async (dispatch) => {
        let response = await usersAPI.updateStatus(status)
            if (response.data.resultCode === 0){
                dispatch(setStatusActionCreator(status))
            }
        }
}

export const setUsersProfileThunkCreator = (userId) => {
    return async (dispatch) => {
        let response = await usersAPI.getProfile(userId)
            dispatch(setUserProfileActionCreator(response.data));
    }
}

export default profileReducer;