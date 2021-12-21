import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from "../../../utills/formsControls/formsControls";
import classes from "../../../utills/formsControls/FormControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {error && <div className={classes.commonLoginError}>{error}</div>}
            <button>Save</button>
            <div>
                <b>Name: </b>{createField("Name", "fullName", Input, [])}
            </div>
            <div>
                <b>Looking for a job: </b>{createField("", "lookingForAJob", Input, [], {type: "checkbox"})}
            </div>
            <div>
                <b>Professional skills: </b>{createField("Professional skills", "lookingForAJobDescription", Textarea, [])}
            </div>
            <div>
                <b>About me: </b>{createField("About me", "aboutMe", Textarea, [])}
            </div>
            <div>
                <b>Contacts</b> :{Object.keys(profile.contacts).map(
                    (key) => {
                        return (
                            <div>
                                <b>{key}: {createField(key, "contacts." + key, Input, [])}</b>
                            </div>
                                )})
                    }
            </div>
        </form>
    )
}

const ProfileDataFormWrap = reduxForm({
    form: "profileForm"
})(ProfileDataForm);



export default ProfileDataFormWrap;