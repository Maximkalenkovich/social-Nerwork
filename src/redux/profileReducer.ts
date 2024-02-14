import {ActionType, ProfilePageType, ProfileType} from "./redux";


const profileReducer = (state:ProfilePageType,action:ActionType) => {

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

export default profileReducer