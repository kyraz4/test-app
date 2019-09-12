import {addPostActionCreator} from '../../../redux/profileReduser';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    } 
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => {
            dispatch(addPostActionCreator(post));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;