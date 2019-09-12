import {connect} from 'react-redux'
import {follow, unfollow, getRequestUsers, toggleIsFollowingProgress} from '../../redux/usersReduser';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader';
import { compose } from 'redux';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/usersSelectors';

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pagesSize} = this.props;
   this.props.getRequestUsers(currentPage, pagesSize);
    }

    setCurrentPage = (value) => {
        const {pagesSize} = this.props;
        this.props.getRequestUsers(value, pagesSize);
    }

    render() {
        return <>
        {this.props.isFetching ? <Preloader />: null}
        <Users totalUserCount = {this.props.totalUserCount} 
        pageSize = {this.props.pageSize}
        currentPage = {this.props.currentPage}
        setCurrentPage = {this.setCurrentPage}
        users = {this.props.users}
        follow = {this.props.follow}
        unfollow = {this.props.unfollow}
        isFetching = {this.props.isFetching}
        followingInProgress = {this.props.followingInProgress}
        toggleIsFollowingProgress = {this.props.toggleIsFollowingProgress}
        />
        </>
    }
}

let mapStateToPorps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToPorps, 
        {follow, unfollow, toggleIsFollowingProgress, getRequestUsers })
)(UsersContainer);
