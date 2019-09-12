import {createSelector} from 'reselect';

const getRequestUsersSelector = (state) => {
    return state.usersPage.usersArr;
}

export const getUsers = createSelector(getRequestUsersSelector, (users) => {
  return users.filter(el => true);
});

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUserCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}