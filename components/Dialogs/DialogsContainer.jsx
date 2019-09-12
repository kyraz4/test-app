import {sendMessageCreator} from '../../redux/dialogsReduser';
import Dialogs from './Dialogs';
import  {connect} from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
   return {
       messagesPage: state.messagesPage,
   }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: (massage) => {
            dispatch(sendMessageCreator(massage));   
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs);