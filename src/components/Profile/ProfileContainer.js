import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatusThunkCreator, savePhotoThunkCreator,
    setUserProfileActionCreator,
    setUsersProfileThunkCreator, updateStatusThunkCreator
} from "../../redux/profileReducer";
import { withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile(){
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

    componentDidMount() {
       this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {

        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     status={this.props.status}
                     updateStatus={this.props.updateStatusThunkCreator}
                     savePhoto={this.props.savePhotoThunkCreator}/>
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
        getStatusThunkCreator,updateStatusThunkCreator,savePhotoThunkCreator}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)
//
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
//
// export default connect(mapStateToProps,{setUserProfileActionCreator, setUsersProfileThunkCreator })(WithUrlDataContainerComponent);
