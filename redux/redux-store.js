import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReduser from './profileReduser';
import dialogsReduser from './dialogsReduser';
import sidebarReduser from './sidebarReduser';
import usersReduser from './usersReduser';
import authReduser from './authReduser';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import appReduser from './appReduser';

let redusers = combineReducers({
    profilePage: profileReduser, 
    messagesPage:  dialogsReduser, 
    friendsBar:  sidebarReduser,
    usersPage: usersReduser,
    auth: authReduser,
    form: formReducer,
    app: appReduser
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;