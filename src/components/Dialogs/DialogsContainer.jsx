import Dialogs from "./Dialogs";
import { addNewMessageCreator } from "../../Redux/dialogsReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsReducer
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageText) => {
            let action = addNewMessageCreator(newMessageText);
            dispatch(action);
        }
    }
}

// let authRedirectComponent = withAuthRedirect(Dialogs);

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent);

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
    )(Dialogs);