import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import asideReducer from "./asideReducer";
import usersReducer from "./usersReducer";
import authHeader from "./authHeader";
import appReducer from "./appReducer";
import { reducer as formReducer } from 'redux-form';
import {compose} from "redux";

let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    asideReducer,
    usersReducer,
    authHeader,
    appReducer,
    form: formReducer});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)));  

window.store = store;

export default store;