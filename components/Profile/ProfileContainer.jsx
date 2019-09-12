import React from 'react';
import Profile from './Profile';
import {setUserProfile, setUser, updateUserStatus, getUserStatus} from '../../redux/profileReduser';
import {connect} from  'react-redux';
import {withRouter} from 'react-router-dom';
import { compose } from 'redux';
import styled from 'styled-components';

const ProfileBlock = styled.div`
  grid-area: c;
  background-color: #ffffff;

  img{
    height: 400px;
    width: 400px;
    background-color: #f3e7c9;
  }
`;
class ProfileContainer extends React.Component {

    componentDidMount() {
          let userId = this.props.match.params.userId;
         if (!userId) {
             userId = this.props.authorizedUserId;
             if (!userId) {
                 this.props.history.push('/login');
             }
         }
        this.props.setUser(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return ( <ProfileBlock>
                 <Profile {...this.props}
             profile = {this.props.profile} 
             status = {this.props.status}
             updateUserStatus = {this.props.updateUserStatus}
             />
           </ProfileBlock>);
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {setUserProfile, setUser, getUserStatus, updateUserStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);