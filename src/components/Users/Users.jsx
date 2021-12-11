// import axios from "axios";
// import classes from "./Users.module.css";
// import person from "./person.png";

// const Users = (props) => {

//     if(props.users.length === 0) {
//         axios.get("https://social-network.samuraijs.com/api/1.0/users").
//         then((response ) => props.setUsers(response.data.items))
//     }


//     return (
//         <div className={classes.users}>
//             {props.users.map((user) => {
//                return (
//                 <div key={user.id} className={classes.user}>
//                     <div>
//                         <div>
//                             <img className={classes.user_image} src={user.photos.small != null ? user.photos.small : person } alt="avatar" />
//                         </div>
//                         {user.followed 
//                         ? <button onClick={() => {props.unfollow(user.id)}}>unfollow</button> 
//                         : <button onClick={() => {props.follow(user.id)}}>follow</button>
//                         }
//                     </div>
//                     <div>
//                         <p>{`${"user.location.country"}, ${"user.location.city"}`}</p>
//                         <p>{user.name}</p>
//                         <p>{user.status}</p>
//                     </div>
//                 </div>
//             )
//             })}
//         </div>
//     )
// }

// export default Users;