import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader';
import ProfileStatusWithHooks from './ProfileStatus/PorfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateUserStatus}) => {
  if (!profile) {
    return <Preloader />
  } 
    return  <div>
    <div>
    </div>
    <div className={s.descriptionBlock}>
      <img src = {profile.photos.large } alt = '' />
      <ProfileStatusWithHooks status = {status} updateUserStatus = {updateUserStatus} />
      <div>
        <b>{profile.fullName}</b>
        <p>About me: {profile.aboutMe}</p>
      </div>
    </div>
    </div>;
}

export default ProfileInfo;