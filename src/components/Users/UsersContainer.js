import React from "react";
import {connect} from "react-redux";
import {
    followActionCreator, followThunkCreator, getUsersThunkCreator,
    setCurrentPageActionCreator, toggleFollowingProgressActionCreator,
    unfollowActionCreator, UNfollowThunkCreator
} from "../../redux/usersReducer";
import Users from "./Users";
import Loader from "../Loader/Loader";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";

class UsersAPIComponent extends React.Component{

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber,this.props.pageSize);
    }


    render() {
        return (
            <>
                {this.props.isFetching ? <Loader/> : null}
                <Users currentPage={this.props.currentPage}
                       totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       setCurrentPage={this.props.setCurrentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       followingProgress={this.props.followingProgress}
                       followUsers={this.props.followUsers}
                       unfollowUsers={this.props.unfollowUsers}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingInProgress
    }
}

// const UsersContainer = connect(mapStateToProps,
//     {follow: followActionCreator,
//     unfollow: unfollowActionCreator,
//     setCurrentPage: setCurrentPageActionCreator,
//     toggleProgress: toggleFollowingProgressActionCreator,
//         getUsers: getUsersThunkCreator,
//     followUsers: followThunkCreator,
//     unfollowUsers: UNfollowThunkCreator})(UsersAPIComponent);

export default compose(connect(mapStateToProps,
    {follow: followActionCreator,
        unfollow: unfollowActionCreator,
        setCurrentPage: setCurrentPageActionCreator,
        toggleProgress: toggleFollowingProgressActionCreator,
        getUsers: getUsersThunkCreator,
        followUsers: followThunkCreator,
        unfollowUsers: UNfollowThunkCreator}),
    WithAuthRedirect)(UsersAPIComponent);

