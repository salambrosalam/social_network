import profileReducer, {addPostActionCreator, deletePostActionCreator} from "./profileReducer";
import {render} from "@testing-library/react";
import App from "../App";
import React from "react";




test('profileReducerTest', () => {
    //1. test data
    let action = addPostActionCreator("salambrosalam")
    let initialState = {
        posts: [
            {id: 1, message: "Hi,from Java man", likesCount: 25},
            {id: 1, message: "Python the best_ ho-ho-ho", likesCount: 55}
        ],
        profile: null,
        status: ""
    }
    //2. action
    let newState = profileReducer(initialState,action)
    //3. expectation
    expect(newState.posts.length).toBe(3);
});

test('profileReducerTest', () => {
    //1. test data
    let action = deletePostActionCreator(1)
    let initialState = {
        posts: [
            {id: 1, message: "Hi,from Java man", likesCount: 25},
            {id: 2, message: "Python the best_ ho-ho-ho", likesCount: 55}
        ],
        profile: null,
        status: ""
    }
    //2. action
    let newState = profileReducer(initialState,action)
    //3. expectation
    expect(newState.posts.length).toBe(1);
});
