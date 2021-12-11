import React from "react";
import { useState, useEffect } from "react";

const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect( () => {
    setStatus(props.status);
  }, [props.status] );

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  }

  const onChangeStatus = (e) => {
    setStatus(e.currentTarget.value);
  }
    return (
      <div>
          {!editMode && 
           <div>
            <span onDoubleClick={activateEditMode} >{props.status || "------------"}</span>
          </div>}
          {editMode && 
           <div>
            <input onChange={onChangeStatus} autoFocus={true} onBlur={deactivateEditMode} value={status} />
          </div>}
      </div>
    )
}

// export default ProfileStatus;