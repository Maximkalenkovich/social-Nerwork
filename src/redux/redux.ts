import {stat} from "fs";

export type MessageType = {
    message:string
}
export type DialogType = {
    name:string
    id:number
}
export type ProfileType ={
    message: string
    like: number
    id: number
}

export type ProfilePageType ={
    dataPost: ProfileType[]
}

export type MessagePageType ={
   dataMessage: MessageType[]
    dataDialogs: DialogType[]
}
type SideBar = {}
export type RootStateType = {
    profilePage:ProfilePageType
    messagesPage:MessagePageType
    sidebar:SideBar
}



export const state:RootStateType = {
    profilePage: {
        dataPost: [
            {id: 1, message: "Hi, how are u", like: 21},
            {id:2, message: "My first post", like: 22}
        ],

    },
    messagesPage: {
        dataMessage: [
            {message: 'Hi'},
            {message: 'how are u'},
            {message: 'Beach'}
        ],
        dataDialogs: [{name: 'Dima', id: 1},
            {name: 'Lana', id: 2},
            {name: 'Katya', id: 3},
            {name: 'Roma', id: 4}
        ],
    },
    sidebar:{}

}



export const addPost = (post: string)=>{

    let newPost: ProfileType = {
        id:new Date().getTime(),
        message: post,
        like:0
    }

    state.profilePage.dataPost.push(newPost)
}





