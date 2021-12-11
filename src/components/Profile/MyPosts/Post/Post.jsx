import classes from "./Post.module.css";
import avatar from "./avatar.jpg";

const Post = (props) => {
    return (
      <div className={classes.post}>
        <img className={classes.post_img} src={avatar} alt="avatar" />
        {props.message}
        <div>
            <span className={classes.post_likes}>{props.likes}</span>
        </div>
      </div>
    )
}

export default Post;