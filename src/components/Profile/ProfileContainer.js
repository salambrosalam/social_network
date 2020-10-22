import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatusThunkCreator,
    setUserProfileActionCreator,
    setUsersProfileThunkCreator, updateStatusThunkCreator
} from "../../redux/profileReducer";
import { withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId){
            userId = this.props.authorisedUserId;
            if(!userId){
                this.props.history.push("/login");
            }
        }
        this.props.setUsersProfileThunkCreator(userId);
        this.props.getStatusThunkCreator(userId);

    }

    render() {

        return (
            <Profile {...this.props}
                     status={this.props.status}
                     updateStatus={this.props.updateStatusThunkCreator}/>
        )
    }
}

// let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps,{setUserProfileActionCreator, setUsersProfileThunkCreator,
        getStatusThunkCreator,updateStatusThunkCreator}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)
//
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
//
// export default connect(mapStateToProps,{setUserProfileActionCreator, setUsersProfileThunkCreator })(WithUrlDataContainerComponent);