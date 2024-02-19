import {ActionType} from "./store";

export type MessageType = {
    id: number
    message: string

}
export type DialogType = {
    name: string
    id: number
}
let initialState = {
    dataMessage: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'how are u'},
        {id: 3, message: 'Beach'}
    ] as MessageType[],
    newMessage: '',
    dataDialogs: [{name: 'Dima', id: 1},
        {name: 'Lana', id: 2},
        {name: 'Katya', id: 3},
        {name: 'Roma', id: 4}
    ] as DialogType[],
}

export type DialogsInitialStateType = typeof initialState

export const dialogsReducer = (state:DialogsInitialStateType = initialState,action:ActionType) => {

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