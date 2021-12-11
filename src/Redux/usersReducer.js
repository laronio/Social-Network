import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utills/objectHelpers";
let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";
let SET_USERS = "SET_USERS";
let SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
let SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
let SET_FETCH_TOGGLE = "SET_FETCH_TOGGLE";
let TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";



let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
       case FOLLOW:
           return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
        }

        case UNFOLLOW:
        return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
        }

        case SET_USERS:
        return {
            ...state,
            users: [...action.users]
        }
        case SET_CURRENT_PAGE:
        return {
            ...state,
            currentPage: action.currentPage
        }
        case SET_TOTAL_USERS_COUNT:
        return {
            ...state,
            totalUsersCount: action.count
        }
        case SET_FETCH_TOGGLE:
        return {
            ...state,
            isFetching: action.isFetching
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
        return {
            ...state,
            followingInProgress: action.isFetching 
            ? [...state.followingInProgress, action.userId]
            : [state.followingInProgress.filter(id => id !== action.userId)]
        }
        default:
            return state;
    }
}

export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(SetToggleIsFetching(true));
        dispatch(SetCurrentPage(page))

        let data = await usersAPI.getUsers(page, pageSize);
            dispatch(SetToggleIsFetching(false));
            dispatch(SetUsers(data.items));
            dispatch(SetTotalUsersCount(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
        let response = await apiMethod(userId);

        if(response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => {
        return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
    };
}

export const unfollow = (userId) => {
        return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    };
}

export default usersReducer;

const followSuccess = (userId) => ({type: FOLLOW, userId});

const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});

const SetUsers = (users) => ({type: SET_USERS, users})

const SetCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

const SetTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count: count})

const SetToggleIsFetching = (isFetching) => ({type: SET_FETCH_TOGGLE, isFetching})

const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export {followSuccess, unfollowSuccess, SetUsers, SetCurrentPage, SetTotalUsersCount, SetToggleIsFetching, toggleFollowingProgress};