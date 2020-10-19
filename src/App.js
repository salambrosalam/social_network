import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {withRouter,Route, BrowserRouter} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {authoriseMeThunkCreator} from "./redux/authReducer";
import {compose} from "redux";
import {initializeThunkCreator} from "./redux/appReducer";
import Loader from "./components/Loader/Loader";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized) {
            return <Loader/>
        }
        return (
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route exact path="/feed" component={News}/>
                        <Route exact path="/settings" component={Settings}/>
                        <Route exact path="/music" component={Music}/>
                        <Route exact path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                    </div>
                </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initializeApp: () => dispatch(initializeThunkCreator())
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(withRouter,connect(mapStateToProps,mapDispatchToProps))(App);
