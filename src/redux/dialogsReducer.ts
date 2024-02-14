import {ActionType, MessagePageType, MessageType} from "./redux";


export const dialogsReducer = (state:MessagePageType,action:ActionType) => {

    switch (action.type) {
        case 'ADD-MESSAGE':
            let myNewMessage: MessageType = {
                id: new Date().getTime(),
                message: action.myMessage
            };
            state.dataMessage.push(myNewMessage);
            state.newMessage = '';
return state;
        case 'CHANGE-MESSAGE':
            state.newMessage = action.newMessage;
            return state;
        default:
            return state;
    }
};

export default dialogsReducer