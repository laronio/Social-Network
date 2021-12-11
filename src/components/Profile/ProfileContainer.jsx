import React from "react";
import Profile from "./Profile";
import { getUserProfile, getUserStatus, updateUserStatus } from "../../Redux/profileReducer";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";
import { withAuthRedirect } from "../../Hoc/withAuthRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
      let userId = this.props.match.params.userId;
      if(!userId) {
        userId = this.props.authorizedUserId;
        if(!userId) {
          this.props.history.push("/login");
        }
      }
      this.props.getUserProfile(userId);
      this.props.getUserStatus(userId);
    }
    render() {
      return (
        <div>
            <Profile {...this.props} profile={this.props.selectedUserProfile} status={this.props.status} updateUserStatus={this.props.updateUserStatus} />
        </div>
      )
    }
}

// let authRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
  selectedUserProfile: state.profileReducer.selectedUserProfile,
  status: state.profileReducer.status,
  authorizedUserId: state.authHeader.userId,
  isAuth: state.authHeader.isAuth
})

// let getNewIdFunctionProfileContainer = withRouter(authRedirectComponent);


export default compose(
  connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
  withRouter
)(ProfileContainer);
// connect(mapStateToProps, {getUserProfile})(getNewIdFunctionProfileContainer);