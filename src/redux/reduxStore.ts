import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import {userReducer} from "./userReducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer,
    users: userReducer
})


export type AppStateType = ReturnType<typeof rootReducer>
let store = createStore(rootReducer)

export default store