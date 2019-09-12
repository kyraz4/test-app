const SEND_MESSAGE = 'SEND_MESSAGE';

let initialSatate = {
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
}

const dialogsReduser = (state = initialSatate, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
                let body = action.massage;
                return {
                    ...state,
                  messagesArr: [...state.messagesArr, {id:6, message: body}],        
                }; 
        default:
            return state;
    }
}

export const sendMessageCreator = (massage) => ({
    type: SEND_MESSAGE,
    massage
});
export default dialogsReduser;