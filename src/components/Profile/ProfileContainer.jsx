import React from "react";
import Profile from "./Profile";
import { getUserProfile, getUserStatus, updateUserStatus, savePhoto } from "../../Redux/profileReducer";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";
import { compose } from "redux";
import { saveProfile } from "../../Redux/profileReducer";


class ProfileContainer extends React.Component {

    refreshProfile() {
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

    componentDidMount() {
      this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
     if(this.props.match.params.userId !== prevProps.match.params.userId) {
       this.refreshProfile();
     }
    }
    
    render() {
      return (
        <div>
            <Profile 
            {...this.props}
            profile={this.props.selectedUserProfile}
            status={this.props.status}
            updateUserStatus={this.props.updateUserStatus}
            isOwner={!this.props.match.params.userId}
            savePhoto={this.props.savePhoto}
            saveProfile={this.props.saveProfile} />
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
  connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile}),
  withRouter
)(ProfileContainer);
// connect(mapStateToProps, {getUserProfile})(getNewIdFunctionProfileContainer);