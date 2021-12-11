import profileReducer from "./profileReducer";
import {addNewPostCreator} from "./profileReducer";
import {deletePost} from "./profileReducer";

let state = {
    postItem: [
        {id: 1, message: "It's my first post", likes: 20},
        {id: 2, message: "Where are you from?", likes: 14},
        {id: 3, message: "It's my first post", likes: 10},
        {id: 4, message: "Where are you from?", likes: 16},
    ]
}; 

it("length of posts should be incremented", () => {
    //1. test data
    let action = addNewPostCreator("New post IT Kamasutra!!!");

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect (newState.postItem.length).toBe(5);
});

it(`text of postItem.message should be correct`, () => {
    //1. test data
    let action = addNewPostCreator("New post IT Kamasutra!!!");

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect (newState.postItem[4].message).toBe("New post IT Kamasutra!!!");
});

it("after deleting length of messages should be decrement", () => {
    //1. test data
    let action = deletePost(2);

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect (newState.postItem.length).toBe(3);
});

it("after deleting length of messages shouldn't be changed", () => {
    //1. test data
    let action = deletePost(1000);

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect (newState.postItem.length).toBe(4);
});