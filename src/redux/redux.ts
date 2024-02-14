export type MessageType = {
    id: number
    message: string

}
export type DialogType = {
    name: string
    id: number
}
export type ProfileType = {
    message: string
    like: number
    id: number
}

export type ProfilePageType = {
    dataPost: ProfileType[]
    newPost: string
}

export type MessagePageType = {
    dataMessage: MessageType[]
    dataDialogs: DialogType[]
    newMessage: string
}
type SideBar = {}

export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagePageType
    sidebar: SideBar
}


export type StoreType = {
    _state: RootStateType
    subscribe: (callback: () => void) => void
    _onChange: () => void
    getState: () => RootStateType
    dispatch: (action: ActionType) => void
}


export type ActionType = ReturnType<typeof addPostActionCreate> |
    ReturnType<typeof changeNewPostActionCreate> |
    ReturnType<typeof changeNewMessageActionCreate> |
    ReturnType<typeof addMessageActionCreate>

export const addPostActionCreate = (postText: string) => ({
    type: 'ADD-POST',
    postText: postText

}) as const
export const changeNewPostActionCreate = (newPost: string) => ({
    type: 'CHANGE-POST',
    newPost: newPost
}) as const
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

let store: StoreType = {
    _state: {
        profilePage: {
            dataPost: [
                {id: 1, message: "Hi, how are u", like: 21},
                {id: 2, message: "My first post", like: 22}
            ],
            newPost: ''
        },
        messagesPage: {
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
        },
        sidebar: {}

    },
    subscribe(callback) {
        this._onChange = callback
    },
    _onChange() {
    },
    getState() {
        return this._state
    },
    dispatch(action: ActionType) {
        if (action.type === 'ADD-POST') {
            let newPost: ProfileType = {
                id: new Date().getTime(),
                message: action.postText,
                like: 0
            }
            this._state.profilePage.dataPost.push(newPost)
            this._state.profilePage.newPost = ''
            this._onChange()

        } else if (action.type === 'CHANGE-POST') {
            this._state.profilePage.newPost = action.newPost
            this._onChange()
        } else if (action.type === 'ADD-MESSAGE') {
            let myNewMessage: MessageType = {
                id: new Date().getTime(),
                message: action.myMessage
            }
            this._state.messagesPage.dataMessage.push(myNewMessage)
            this._state.messagesPage.newMessage = ''
            this._onChange()
        } else if (action.type === 'CHANGE-MESSAGE') {
            this._state.messagesPage.newMessage = action.newMessage
            this._onChange()
        }
    }
}
export default store