import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { TextArea } from '../../common/FormsControls/FormsControls';

let maxLength10 = maxLengthCreator(10);


const MyPosts = React.memo(props => {

  let postElements = [...props.profilePage.postsArr].reverse().map(el =>
     <Post message={el.message} key={el.id}
      likesCount={el.likesCount}/>);

    let addNewPost = (value) => {
      props.addPost(value.newPostBody);
    }

    return <div className={s.postsBlock}>
      <h2>My post</h2>
      <div>
        <MyPostFormRedux onSubmit = {addNewPost} />
        </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>;
});

const MyPostForm = (props) => {

  return (
       <form onSubmit = {props.handleSubmit}>
    <div>
      <Field name = 'newPostBody' 
        component = {TextArea} 
        placeholder='Enter post here' 
        validate ={[required, maxLength10 ]} />
      </div>
     <div>
     <button > New post</button>
     </div>
    </form>
  );
} 

let MyPostFormRedux = reduxForm({form: 'dialogAddPostForm'})(MyPostForm);

export default MyPosts;