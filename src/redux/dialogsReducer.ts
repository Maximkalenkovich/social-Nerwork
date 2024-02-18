import {ActionType, MessagePageType, MessageType} from "./store";


let initialState:MessagePageType = {
    dataMessage: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'how are u'},
        {id: 3, message: 'Beach'}
    ],
    newMessage: '',
    dataDialogs: [{name: 'Dima', id: 1},
        {name: 'Lana', id: 2},
        {name: 'Katya', id: 3},
        {name: 'Roma', id: 4}
    ],
}

export const dialogsReducer = (state:MessagePageType = initialState,action:ActionType) => {

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

export const changeNewMessageActionCreate = (newMessage: string) => ({
    type: 'CHANGE-MESSAGE',
    newMessage: newMessage
}) as const

export const addMessageActionCreate = (myMessage: string) => {
    return {
        type: 'ADD-MESSAGE',
        myMessage: myMessage
    } as const
}

export default dialogsReducer