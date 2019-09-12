import React from 'react';
import userImg from '../../assests/img/team-member-e1520967905299.png';
import styles from './Users.module.css';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const FollowingButton = styled.button`
padding: 0;
background-color: #d88c51;
height: 30px;
width: 120px;
border-radius: 20px;
color: #f3e7c9;
font-size: 15px;
border: solid #f3e7c9 1px;

:hover {
    background-color: #774023 ;
}

: focus {
    outline: none;
}
`;

let User = ( {user, followingInProgress, unfollow, follow}) => {
    return ( <div>
    <span>
        <div>
           <NavLink to = {`profile/${user.id}`}>
               <img src={user.photos.small === null ? userImg : user.photos.small} alt='' className={styles.userPhoto}/>
            </NavLink> 
        </div>
        <div>
            {user.followed ?  <FollowingButton disabled = {followingInProgress.some(id => id === user.id)} 
             onClick = {() => { unfollow(user.id)}}>Отписаться</FollowingButton> :
             <FollowingButton disabled = {followingInProgress.some(id => id === user.id)} 
             onClick = {() => { follow(user.id)}}>Подписаться</FollowingButton>}
        </div>
    </span>
    <span>
    <span>
        <div>
            {user.name}
        </div>
        <div>
            {'u.status'}
        </div>
    </span>
    <span>
         <div>{'u.location.country'}</div>
         <div>{'u.location.city'}</div>
    </span>
    </span>
</div>);
};

export default User;