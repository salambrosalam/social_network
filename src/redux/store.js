import React from "react";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state :{
        profilePage: {
            posts: [
                {id: 1, message: "Hi,from Java man", likesCount: 25},
                {id: 1, message: "Python the best_ ho-ho-ho", likesCount: 55}
            ],
            newPostText: ""
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: "Roman"},
                {id: 2, name: "Daniel"},
                {id: 3, name: "Max"}],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "When will u connect Mongo Homie???)))"},
                {id: 3, message: "AHAHAHAHhHH"}],
            newMessageText: ""
        },
        sidebar: {
            friends: [
                {id: 1, name: "Max"},
                {id: 2, name: "Daniel"}
            ]
        }
    },

    _callSubscriber(){
        console.log("state is changed")
    },

    getState(){
         return this._state;
    },

    addPost(){
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 100
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscribe(observer){
        this._callSubscriber = observer; // observer - наблюдатель (pattern)
        //examples: addEventListener, onClick
    },
    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
        }

}


export default store;
window.store = store;