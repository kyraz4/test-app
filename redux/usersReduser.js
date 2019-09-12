import {userAPI } from '../api/api';
import { updateObjectArr } from '../utils/objectHelpers';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGLE_IS_FOLLOWING_PROGRESS = 'TOGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    usersArr: [],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const usersReduser = (state = initialState, action) =>  {
    switch(action.type) {
        case FOLLOW: 
          return {
              ...state, 
            usersArr: updateObjectArr(state.usersArr, action.userId, 'id', {followed: true})
        }
        case UNFOLLOW:
        return {
            ...state, 
          usersArr:updateObjectArr(state.usersArr, action.userId, 'id', {followed: false})
      }
      case SET_USERS: {
        return {...state, usersArr: action.users}
      }
      case SET_CURRENT_PAGE: {
          return {...state, currentPage: action.value}
      }
      case SET_TOTAL_USERS_COUNT: {
          return {...state, totalUserCount: action.totalCount}
      }
      case TOGGLE_IS_FETCHING: {
          return {...state, isFetching: action.isFetching}
      }
      case TOGLE_IS_FOLLOWING_PROGRESS: {
          return {
              ...state, 
            followingInProgress: action.isFetching
            ? [...state.followingInProgress, action.userId]
            : state.followingInProgress.filter(id => id !== action.userId) }
      }
        default :
         return state;
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (value) => ({type: SET_CURRENT_PAGE, value});
export const setTotalUsersCount = (totalCount) => ({type:SET_TOTAL_USERS_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingProgress = (isFetching, userId) => ({type: TOGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export const getRequestUsers = (currentPage, pagesSize) => {
 return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
     let data =  await userAPI.getUsers(currentPage,pagesSize)
                 dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
   }
}

const followUnfollow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    let data = await apiMethod(userId);
          if (data.resultCode === 0) {               
          dispatch(actionCreator(userId)); 
          }
          dispatch(toggleIsFollowingProgress(false, userId)); 
}

export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollow(dispatch, userId, userAPI.follow.bind(userAPI), followSuccess);     
      }
   }

export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollow(dispatch, userId, userAPI.unfollow.bind(userAPI), unfollowSuccess);
    }
}   
export default usersReduser;