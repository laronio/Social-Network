import classes from "./Aside.module.css";
import { NavLink } from "react-router-dom";

const Aside = (props) => {
    return (
        <div className={classes.aside}>
            <ul className={classes.aside_list}>
                <li className={classes.aside_list_item}>
                    <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
                    </li>
                <li className={classes.aside_list_item}>
                    <NavLink to="/dialogs" activeClassName={classes.active}>Dialogs</NavLink>
                    </li>
                <li className={classes.aside_list_item}>
                    <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
                    </li>
                <li className={classes.aside_list_item}>
                    <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
                    </li>
                <li className={classes.aside_list_item}>
                    <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
                    </li>
                <li className={classes.aside_list_item}>
                    <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
                    </li>
            </ul>
        </div>
    )
}

export default Aside;