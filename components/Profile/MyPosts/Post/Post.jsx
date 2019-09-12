import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return <div className ={s.item}>
        <div>
            <span>Like</span>
        </div>
        {props.message}
        </div>;
}

export default Post;