import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../../Redux/authHeader";

class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    login: state.authHeader.login,
    isAuth: state.authHeader.isAuth
})

export default connect(mapStateToProps, {logout})(HeaderContainer);