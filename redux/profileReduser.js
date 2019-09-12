import { userAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    postsArr: [{
        id: 1,
        message: 'хатпвимыв',
        likesCount: 12
    },
    {
        id: 2,
        message: 'sdngdfbsdvfdqe',
        likesCount: 442
    },
    {
        id: 3,
        message: 'sdfdbsvdcxqe',
        likesCount: 43
    },
    {
        id: 4,
        message: 'sdfdadvaqe',
        likesCount: 42
    },
    {
        id: 5,
        message: 'sdfdfsvdxqe',
        likesCount: 452
    },
    {
        id: 6,
        message: 'sdfdvadvadqe',
        likesCount: 342
    },
],
profile: null,
status: '',
}

const profileReduser = (state = initialState, action) =>  {
    switch(action.type) {
        case ADD_POST :  
        let newPost = {
            id: 5,
            message: action.post,
            likesCount: 0
        };
        return {
            ...state,
          postsArr: [...state.postsArr, newPost],
          newPostText : '',
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_USER_STATUS: {
            return {
              ...state,
              status: action.status,
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                postsArr: state.postsArr.filter(el => el.id !== action.postId )

            }
        }
        default :
         return state;
    }
}

export const addPostActionCreator = (post) => ({type: ADD_POST, post});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});

export const getUserStatus = (userId) => async (dispatch) => { 
  let data = await profileAPI.getStatus(userId)
  dispatch(setUserStatus(data));
}

export const updateUserStatus = (status) => async (dispatch) => { 
  let data = await profileAPI.updateStatus(status)
         if (data.resultCode === 0) {
        dispatch(setUserStatus(status));
    } 
}
export const setUser = (userId) => async (dispatch) => {
        if (!userId) {
            userId = 2;
        }
       let data = await userAPI.getUser(userId)
        dispatch(setUserProfile(data));
    }

export default profileReduser;