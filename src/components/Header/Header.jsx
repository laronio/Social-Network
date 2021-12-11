import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import logo from "./vk-256x256.png";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img className={classes.header_img} src={logo} alt="logo" />
            <div className={classes.header_login}>
                {props.isAuth 
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to="/login">Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;