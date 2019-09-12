import { userAuth } from "./authReduser";

const INITIALIZED_SUCSESS = 'INITIALIZED_SUCSESS';


let initialState = {
    initialized: false,

}

const appReduser = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZED_SUCSESS: 
        return {
           ...state,
           initialized: true,
        }
        default: 
        return state;
    }
}

export const initializedSucsess = () => ({type: INITIALIZED_SUCSESS});

export const initializeApp = () => (dispatch) => {
   let promise = dispatch(userAuth());
   promise.then(() => {
    dispatch(initializedSucsess());
   });
}

export default appReduser;