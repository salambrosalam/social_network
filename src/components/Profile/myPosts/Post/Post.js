import React from "react";
import classes from "./Post.module.css";
import anonymous from "../../../../media/create_account_2_anonymous.png";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src={anonymous}/>
            {props.message}
            <div>
                <span>{props.likeCounts}like's</span>
            </div>
        </div>
    )
}

export default Post;
