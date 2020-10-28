import React from "react";
import {reduxForm, Field} from "redux-form";
import {Input} from "../FormsControls/FormControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import classes from "../FormsControls/formsControls.module.css"
import login_img from "../../media/login_img.png";

const Login = (props) => {
    return (<div className={classes.container}>
            <div className={classes.border}>
            <form className={classes.container} onSubmit={props.handleSubmit}>
                <img src={login_img} className={classes.img}/>
                <div>
                    <div>Login</div>
                    <Field placeholder="Login"
                           className={classes.textInput}
                           name={"login"}
                           component={Input}
                           validate={[requiredField]}/>
                </div>
                <div>
                    <div>password</div>
                    <Field placeholder="password"
                           name={"password"}
                           className={classes.textInput}
                           type={"password"}
                           component={Input}
                           validate={[requiredField]}/>
                </div>
                <div >
                    <Field type={"checkbox"} name={"rememberMe"} component={"input"}/>remember me
                </div>
                {props.error && <div className={classes.formSummaryError}>
                    {props.error}
                </div>
                }
                <div>
                    <button className={classes.button}>Login</button>
                </div>
            </form>
        </div>
        </div>
    )
}

const ReduxLoginForm = reduxForm({
    form: "login"
})(Login)

const LoginForm = (props) => {

    const onSubmit = formData => {
        props.login(formData.login, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        debugger;
        return <Redirect to={"/profile"}/>
    }

    return <div className={classes.container }>
        <h1>Login form</h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password, rememberMe) => {
            dispatch(loginThunkCreator(email, password, rememberMe))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
