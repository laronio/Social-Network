import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import { required, maxLengthCreator } from "../../../utills/validators/validators";
import { Textarea } from "../../../utills/formsControls/formsControls";

let maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name="newPostText" validate={[required, maxLength10]} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const ReduxAddNewPostForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = React.memo((props) => {
  console.log("Render!")
  let postElements = props.postItem.map((post) => <Post message={post.message} likes={post.likes} />)

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

    return (
      <div className={classes.postsBlock}>
          <h3>My posts</h3>
          <ReduxAddNewPostForm onSubmit={onAddPost} />
          <div className={classes.posts}>
            {postElements}
          </div>
      </div>
    )
})

export default MyPosts;