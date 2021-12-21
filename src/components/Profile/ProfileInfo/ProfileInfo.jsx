import classes from "./ProfileInfo.module.css";
import Preloader from "../../Users/preloader/Preloader";
import ProfileStatus from "./ProfileStatusClasses";
import person from "../../Users/person.png";
import { useState } from "react";
import ProfileDataFormWrap from "./ProfileDataForm";



const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false);
    if(!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => setEditMode(false)
        )
    }

    return (
      <div className={classes.profileInfo}>
          <div className={classes.descriptionBlock}>
               <img src={profile.photos.large || person } alt="big" className={classes.mainPhoto} />
               {editMode 
               ? <ProfileDataFormWrap initialValues={profile} profile={profile} onSubmit={onSubmit} /> 
               : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)} />}
               {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
               <ProfileStatus status={status} updateUserStatus={updateUserStatus} />
          </div>
      </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <button onClick={goToEditMode}>Edit</button>}
            <div>
                <p><b>Name: </b>{profile.fullName}</p>
            </div>
            <div>
                <p><b>Looking for a job: </b>{profile.lookingForAJob ? "Yes" : "No"}</p>
            </div>
            {profile.lookingForAJob && 
            <div>
                <p><b>Professional skills: </b>{profile.lookingForAJobDescription}</p>
            </div>}

            <div>
                <p><b>About me: </b>{profile.aboutMe}</p>
            </div>
            <div>
                <b>Contacts</b> :{Object.keys(profile.contacts).map(
                    (key) => <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />)
                    }
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={classes.contact}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}

export default ProfileInfo;