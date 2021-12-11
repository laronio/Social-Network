import classes from "./Users.module.css";
import React from "react";
import Paginator from "./Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) =>  {
        return (
        <div className={classes.users}>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize} />
            {users.map((user) => {
               return (
                <User user={user} key={user.id} followingInProgress={props.followingInProgress} follow={props.follow} unfollow={props.unfollow}   />
            )
            })}
        </div>
        )
}

export default Users;