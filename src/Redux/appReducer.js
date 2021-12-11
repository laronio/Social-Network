import {getAuthData} from "./authHeader";

let INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";


let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZED_SUCCESS:
            return ({
                ...state,
                initialized: true
                })
        default:
            return state;
    }
}

export default appReducer;

const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS })
const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthData());
    promise.then(() => {
        dispatch(initializedSuccess());
    });
}


export {initializedSuccess, initializeApp};