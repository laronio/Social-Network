import classes from "./Users.module.css";
import person from "./person.png";
import React from "react";
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, follow, unfollow}) =>  {
        return (
                <div key={user.id} className={classes.user}>
                    <div>
                        <div>
                            <NavLink to={"/profile/" + user.id}>
                                <img className={classes.user_image} src={user.photos.small != null ? user.photos.small : person } alt="avatar" />
                            </NavLink>
                        </div>
                        {user.followed 
                            ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {unfollow(user.id);}
                            }>unfollow</button> 
                            : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {follow(user.id);}
                            }>follow</button>
                        }
                    </div>
                    <div>
                        <p>{`${"user.location.country"}, ${"user.location.city"}`}</p>
                        <p>{user.name}</p>
                        <p>{user.status}</p>
                    </div>
                </div>
        )
}

export default User;