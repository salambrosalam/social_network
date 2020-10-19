import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {reduxForm,Field} from "redux-form";
import {requiredField, maxLengthCreator} from "../../../utils/validators/validators";
import {TextArea} from "../../FormsControls/FormControls";

let maxLength30 = maxLengthCreator(30);

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={TextArea}
                   name={"newPostBody"}
                   validate={[requiredField, maxLength30]}
                   placeholder={"enter here your post message"}/>
            <button onClick={props.addPost}>Add Post</button>
            <button>Remove</button>
        </form>
    )
}

const ReduxPostForm = reduxForm({
    form: "postForm"
})(PostForm)

const MyPosts = (props) => {

    let postElements = props.posts.map((post) =>
        <Post message={post.message} likeCounts={post.likesCount}/>
    )

    let addNewPost = (values) => {
        props.addPost(values.newPostBody)
    }


    return (
        <div>
            {postElements}
            <ReduxPostForm onSubmit={addNewPost}/>
            <div className={classes.posts}>
             </div>
        </div>
    )
}

export default MyPosts;