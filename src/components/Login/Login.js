import React from "react";
import {reduxForm,Field} from "redux-form";
import {Input} from "../FormsControls/FormControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import classes from "../FormsControls/formsControls.module.css"

const Login = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder="Login"
                           name={"login"}
                           component={Input}
                           validate={[requiredField]}/>
                </div>
                <div>
                    <Field placeholder="password"
                           name={"password"}
                           type={"password"}
                           component={Input}
                           validate={[requiredField]}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component={"input"}/>remember me
                </div>
                {props.error && <div className={classes.formSummaryError}>
                    {props.error}
                </div>
                }
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const ReduxLoginForm = reduxForm({
    form: "login"
})(Login)

const LoginForm = (props) => {

    const onSubmit = formData => {
        props.login(formData.login, formData.password, formData.rememberMe)
    }
    if (props.isAuth){
        debugger;
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>Login</h1>
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

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);