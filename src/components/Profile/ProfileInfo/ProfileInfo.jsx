import classes from "./ProfileInfo.module.css";
import Preloader from "../../Users/preloader/Preloader";
import ProfileStatus from "./ProfileStatusClasses";

const ProfileInfo = ({profile, status, updateUserStatus}) => {
    if(!profile) {
        return <Preloader />
    }
    return (
      <div className={classes.profileInfo}>
          <div className={classes.descriptionBlock}>
               <img src={profile.photos.large} alt="big" />
               <ProfileStatus status={status} updateUserStatus={updateUserStatus} />
          </div>
      </div>
    )
}

export default ProfileInfo;