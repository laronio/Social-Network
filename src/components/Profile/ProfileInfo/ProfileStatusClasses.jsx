import React from "react";

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateUserStatus(this.state.status);
  }

  onChangeStatus = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.status !== prevProps.status) {
      this.setState({
        status: this.props.status
      });
    }
  }

  render() {
    return (
      <div>
          {!this.state.editMode && 
           <div>
            <b>Status: </b><span onDoubleClick={this.activateEditMode} >{this.props.status || "------------"}</span>
          </div>}
          {this.state.editMode && 
           <div>
            <b>Status: </b><input onChange={this.onChangeStatus} autoFocus={true} value={this.state.status} onBlur={this.deactivateEditMode} />
          </div>}
      </div>
    )
  }
}

export default ProfileStatus;