let ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";

let initialState = {
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
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_NEW_MESSAGE:
            let message = {
                id: 4,
                message: action.newMessageText
            };
            return {
                ...state,
                messageItem: [...state.messageItem, message],
                newMessageText: ""
            };

        default:
            return state;
    }
}

export default dialogsReducer;

const addNewMessageCreator = (newMessageText) => ({type: ADD_NEW_MESSAGE, newMessageText});

export {addNewMessageCreator};