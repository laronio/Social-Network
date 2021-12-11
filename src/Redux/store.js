import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import asideReducer from "./asideReducer";


let store = {
    _state: {
        profilePage: {
            postItem: [
                {id: 1, message: "It's my first post", likes: 20},
                {id: 2, message: "Where are you from?", likes: 14},
                {id: 3, message: "It's my first post", likes: 10},
                {id: 4, message: "Where are you from?", likes: 16},
            ],
            newPostText: "Tashiiiii"
        },
        dialogsPage: {
            dialogItem: [
                {id: 1, name: "Vovka"},
                {id: 2, name: "Temka"},
                {id: 3, name: "Dimka"},
                {id: 4, name: "Stasyan"},
                {id: 5, name: "Danya"},
                {id: 6, name: "Andrei"},
            ],
            messageItem: [
                {id: 1, message: "Hi!"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "I'm chilling out!"},
            ],
            newMessageText: "Olololososeqerym"
        },
        sideBar: {}
    },
    _callSubscriber() {
        console.log("I`m fake function!")
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = asideReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);
    }
}

export default store;