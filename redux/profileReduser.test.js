import profileReduser, { addPostActionCreator, deletePost} from "./profileReduser";

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
        message: 'Hello',
        likesCount: 43
    },
    {
        id: 4,
        message: 'sdfdadvaqe',
        likesCount: 42
    },
    {
        id: 5,
        message: 'Hello',
        likesCount: 452
    },
    {
        id: 6,
        message: 'sdfdvadvadqe',
        likesCount: 342
    }
]
}


it('length of the post should be incremented', () => {
    //test data
    let action = addPostActionCreator('Hello');
    //action
    let newState = profileReduser(initialState, action);
    //expection
   expect(newState.postsArr.length).toBe(7);
  });

it('message of new post should be Correct', () => {
    let action = addPostActionCreator('Hello');
       //action
    let newState = profileReduser(initialState, action);
       //expection
       expect(newState.postsArr[6].message).toBe('Hello');
});

it('after deliting length of messages should be decrement', () => {
    let action = deletePost(1);
       //action
    let newState = profileReduser(initialState, action);
       //expection
       expect(newState.postsArr.length).toBe(5);
});

it('after deliting length of messages should not be decrement if it doesnt incorrect', () => {
    let action = deletePost(1000);
       //action
    let newState = profileReduser(initialState, action);
       //expection
       expect(newState.postsArr.length).toBe(6);
});



