import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {captchaAPI} from "../api/api";

let SET_AUTH_DATA = "SET_AUTH_DATA";
let GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaURL: null
}

const authHeader = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTH_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return ({
                ...state,
                ...action.payload
                })
        default:
            return state;
    }
}

export default authHeader;

const setAuthData = (userId, email, login, isAuth) => ({type: SET_AUTH_DATA, payload: {userId, email, login, isAuth}});
const getCaptchaUrlSuccess = (captchaURL) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaURL}});


const getAuthData = () => async (dispatch) => {
    let response = await authAPI.me();
        
    if(response.data.resultCode === 0) {
    let {id, email, login} = response.data.data;
    dispatch(setAuthData(id, email, login, true));
    }
}

const login = (email, password, rememberMe, captcha) => async (dispatch) => {
   let response = await authAPI.login(email, password, rememberMe, captcha);
        
    if(response.data.resultCode === 0) {
        dispatch(getAuthData());
    } else {
        if(response.data.resultCode === 10) {
            dispatch(getCaptcha());
        }
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

const getCaptcha = () => async (dispatch) => {
    let response = await captchaAPI.getCaptcha();
    const captchaURL = response.data.url;
    debugger;
    dispatch(getCaptchaUrlSuccess(captchaURL));
 }

export {setAuthData, getAuthData, login, logout};