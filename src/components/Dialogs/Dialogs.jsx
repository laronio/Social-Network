import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Messages from "./Messages/Messages";
import React from "react";
import { reduxForm, Field } from "redux-form";
import { Textarea } from "../../utills/formsControls/formsControls";
import { required, maxLengthCreator } from "../../utills/validators/validators";

let maxLength50 = maxLengthCreator(50);

const AddNewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
           <div>
              <Field component={Textarea} validate={[required, maxLength50]} name="newMessageText" placeholder="Enter your message!" />
           </div>
           <div>
              <button>Send data</button>
           </div>
        </form>
    )
}

const ReduxAddNewMessageForm = reduxForm({form: "DialogsAddNewMessageForm"})(AddNewMessageForm);

const Dialogs = (props) => {
    let dialogElements = props.dialogsPage.dialogItem
    .map((person) => <DialogItem name={person.name} id={person.id} />);

    let messageElements = props.dialogsPage.messageItem
    .map((message) => <Messages message={message.message} />);

    let onAddMessage = (values) => {
        props.addMessage(values.newMessageText);
    };

    return (
      <div className={classes.dialogs}>
          <div className={classes.dialogItems}>
              {dialogElements}
          </div>
          <div className={classes.messages}>
              {messageElements}
          </div>
          <ReduxAddNewMessageForm onSubmit={onAddMessage} />
      </div>
    )
}

export default Dialogs;