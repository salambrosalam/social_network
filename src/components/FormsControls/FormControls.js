import React from "react";
import classes from "./formsControls.module.css";

export const TextArea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <textarea {...input} {...props}/>
            { hasError ? <span>{meta.error}</span> : null}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <input {...input} {...props}/>
            { hasError ? <span>{meta.error}</span> : null}
        </div>
    )
}