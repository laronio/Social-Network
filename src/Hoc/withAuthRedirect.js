import React from "react";
import { Redirect } from "react-router";
import {connect} from "react-redux";

let mapStateToPropsIsAuth = (state) => {
    return {
        isAuth: state.authHeader.isAuth
    }
}

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.isAuth) return <Redirect to={"/login"} />;
            return <Component {...this.props} />
        }
    }

    let connectedAuthRedirect = connect(mapStateToPropsIsAuth)(RedirectComponent);

    return connectedAuthRedirect;
}