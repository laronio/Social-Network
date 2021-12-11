import React from "react";
import Users from "./UsersC";
import {connect} from "react-redux";
import { follow, unfollow, SetCurrentPage, toggleFollowingProgress, requestUsers } from "../../Redux/usersReducer";
import Preloader from "./preloader/Preloader";
import { compose } from "redux";
import {getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress} from "../../Redux/users-selectors";

class UsersContainer extends React.Component  {

    componentDidMount() {
    if(this.props.users.length === 0) {
        const {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
        // this.props.SetToggleIsFetching(true);
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        // .then((data ) => {
        //     this.props.SetToggleIsFetching(false);
        //     this.props.SetUsers(data.items);
        //     this.props.SetTotalUsersCount(data.totalCount);
        //     });
        }
    }
    
    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.requestUsers(pageNumber, pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users 
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            toggleFollowingProgress={this.props.toggleFollowingProgress}
            followingInProgress={this.props.followingInProgress} />
            
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default compose(
    connect(mapStateToProps, {
    follow,
    unfollow,
    SetCurrentPage,
    toggleFollowingProgress,
    requestUsers
}))(UsersContainer);

// export default withAuthRedirect(connect(mapStateToProps, {
//     follow,
//     unfollow,
//     SetCurrentPage,
//     toggleFollowingProgress,
//     getUsers
// })(UsersContainer));