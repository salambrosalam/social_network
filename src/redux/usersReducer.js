import hacker from "../media/hacker.jpg"
import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOW_PROGRESS = "TOGGLE_IS_FOLLOW_PROGRESS"

const initialState = {
    users: [
    ],
    pageSize: 5,
    totalUsersCount: 19,
    currentPage: 2,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId){
                        return {...user,followed:true}
                    }
                    return(
                    user
                    )
                })

            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId){
                        return {...user,followed:false}
                    }
                    return(
                        user
                    )
                })

            }
        case SET_USERS:
            return{
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return{
                ...state, currentPage: action.currentPage
            }
        case SET_USERS_TOTAL_COUNT:
            return{
                ...state, totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return{
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOW_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}

export const followActionCreator = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}

export const unfollowActionCreator = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}

export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}
export const setCurrentPageActionCreator = (pageNumber) =>{
    return {
        type: SET_CURRENT_PAGE,
        currentPage: pageNumber
    }
}

export const setTotalUsersCountActionCreator = (totalCount) => {
    return {
        type: SET_USERS_TOTAL_COUNT,
        totalUsersCount: totalCount
    }
}

export const toggleFollowingProgressActionCreator = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOW_PROGRESS,
        isFetching: isFetching,
        userId: userId
    }
}

export const setIsFetchingActionCreator = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
}

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetchingActionCreator(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setIsFetchingActionCreator(false));
            dispatch(setUsersActionCreator(data.items));
            dispatch(setTotalUsersCountActionCreator(data.totalCount));
        });
    }
}

export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgressActionCreator(true, userId));
        usersAPI.followUsers(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followActionCreator(userId));
            }
            dispatch(toggleFollowingProgressActionCreator(false, userId));
        })
    }
}

export const UNfollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgressActionCreator(true, userId));
        usersAPI.UNfollowUsers(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowActionCreator(userId));
            }
            dispatch(toggleFollowingProgressActionCreator(false, userId));
        })
    }
}


export default usersReducer;