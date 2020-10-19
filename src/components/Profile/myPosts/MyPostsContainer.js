import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostBody) => dispatch(addPostActionCreator(newPostBody))
    }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;