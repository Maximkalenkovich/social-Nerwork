import profileReducer, {addPostActionCreate, changeNewPostActionCreate, ProfileType} from "./profileReducer";
import dialogsReducer, {
    addMessageActionCreate,
    changeNewMessageActionCreate,
    DialogType,
    MessageType
} from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";



export type ProfilePageType = {
    dataPost: ProfileType[],
    newPost: string,
}

export type MessagePageType = {
    dataMessage: MessageType[]
    dataDialogs: DialogType[]
    newMessage: string
}
export type SideBar = {}

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
        this._state.profilePage =  profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._state.sidebar=  sidebarReducer(this._state.sidebar, action)
        this._onChange()
    }
}
export default store