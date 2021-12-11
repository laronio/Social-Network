import MyPosts from "./MyPosts";
import { addNewPostCreator} from "../../../Redux/profileReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    newPostText: state.profileReducer.newPostText,
    postItem: state.profileReducer.postItem
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      let action = addNewPostCreator(newPostText);
      dispatch(action);
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;