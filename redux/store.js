import profileReduser from './profileReduser';
import dialogsReduser from './dialogsReduser.js';
import sidebarReduser from './sidebarReduser';


let store = {
    _state: {
        profilePage: {
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
            newPostText: '',
        },

        messagesPage: {
            dialogsArr: [{
                    id: 1,
                    name: 'sdfdqe'
                },
                {
                    id: 2,
                    name: 'sdfhhege'
                },
                {
                    id: 3,
                    name: 'sdfbsd'
                },
                {
                    id: 4,
                    name: 'ssdve'
                },
                {
                    id: 5,
                    name: 'sdsbvdcxqe'
                },
            ],
            messagesArr: [{
                    id: 1,
                    message: 'svdacsx'
                },
                {
                    id: 2,
                    message: 'svbbsdvdacsx'
                },
                {
                    id: 3,
                    message: 'svdacssvdx'
                },
                {
                    id: 4,
                    message: 'svdacvdasx'
                },
                {
                    id: 5,
                    message: 'svdacsvdcsx'
                },
                {
                    id: 6,
                    message: 'svdacssdvcxx'
                },
            ],
            newMessageBody: '',
        },
        friendsBar: [{
                id: 1,
                name: 'sdgsefd'
            },
            {
                id: 1,
                name: 'sdgsefd'
            },
            {
                id: 1,
                name: 'sdgsefd'
            },
            {
                id: 1,
                name: 'sdgsefd'
            },
            {
                id: 1,
                name: 'sdgsefd'
            },
        ]

    },
    getState() {
        return this._state;
    },
    _callsubscriber() {

    },
    subscribe(observer) {
        this._callsubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.messagesPage = dialogsReduser(this._state.messagesPage, action);
        this._state.friendsBar = sidebarReduser(this._state.friendsBar, action);
        this._callsubscriber(this._state);
    }
}







export default store;