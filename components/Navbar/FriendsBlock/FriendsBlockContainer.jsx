import {connect} from 'react-redux';
import FriendsBlock from './FriendsBlock';


let mapStateToProps = (state) => {
    return {
        data: state.friendsBar,
    }
} 

let mapDispatchToProps = (dispatch) => {

}

const FriendsBlockContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsBlock);

export default FriendsBlockContainer;