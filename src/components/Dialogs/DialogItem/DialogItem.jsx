import classes from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
    return (
      <div className={classes.dialogItem}>
          <NavLink to={path} id={props.id}>{props.name}</NavLink>
      </div>
    )
}

export default DialogItem;