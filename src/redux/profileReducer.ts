import {ActionType} from "./store";

export type ProfileType = {
    message: string
    like: number
    id: number
}
export type ProfileInitialStateType = typeof initialState

let initialState = {
    dataPost: [
        {id: 1, message: "Hi, how are u", like: 21},
        {id: 2, message: "My first post", like: 22}
    ]as ProfileType[],
        newPost: 'пркыуерку'
}

const profileReducer = (state:ProfileInitialStateType=initialState,action:ActionType) => {

        switch (action.type) {
            case 'ADD-POST':
                let newPost: ProfileType = {
                    id: new Date().getTime(),
                    message: action.postText,
                    like: 0
                };
                state.dataPost.push(newPost);
                state.newPost = '';
                return  state;

            case 'CHANGE-POST':
                state.newPost = action.newPost;
                return state;
            default:
                return state;
        }
}


export const addPostActionCreate = (postText: string) => ({
    type: 'ADD-POST',
    postText: postText

}) as const
export const changeNewPostActionCreate = (newPost: string) => ({
    type: 'CHANGE-POST',
    newPost: newPost
}) as const


export default profileReducer