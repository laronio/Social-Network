import classes from "./Messages.module.css";

const Messages = (props) => {
    return (
      <div className={classes.message}>
          {props.message}
      </div>
    )
}

export default Messages;