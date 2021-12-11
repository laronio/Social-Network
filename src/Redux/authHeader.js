import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

let SET_AUTH_DATA = "SET_AUTH_DATA";


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authHeader = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTH_DATA:
            return ({
                ...state,
                ...action.payload
                })
        default:
            return state;
    }
}

export default authHeader;

const setAuthData = (userId, email, login, isAuth) => ({type: SET_AUTH_DATA, payload: {userId, email, login, isAuth}})
const getAuthData = () => async (dispatch) => {
    let response = await authAPI.me();
        
    if(response.data.resultCode === 0) {
    let {id, email, login} = response.data.data;
    dispatch(setAuthData(id, email, login, true));
    }
}

const login = (email, password, rememberMe) => async (dispatch) => {
   let response = await authAPI.login(email, password, rememberMe);
        
    if(response.data.resultCode === 0) {
        dispatch(getAuthData());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error!";
        dispatch(stopSubmit("login", {_error: message}));
    }
}

const logout = () => async (dispatch) => {
    let response = await authAPI.logout();

    if(response.data.resultCode === 0) {
        dispatch(setAuthData(null, null, null, false));
    }
}

export {setAuthData, getAuthData, login, logout};