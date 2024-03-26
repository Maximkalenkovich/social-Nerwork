import {ActionType} from "./store";



interface Photos {
    small: null | string;
    large: null | string;
}

export interface User {
    name: string;
    id: number;
    photos: Photos;
    status: null | string;
    followed: boolean;
}

export interface UsersInitialStateType {
    users: User[];
}

const initialState: UsersInitialStateType = {
    users: [

    ]
};


export const userReducer = (state:UsersInitialStateType = initialState, action: ActionType)=>{
    switch (action.type){
        case 'FOLLOW-TYPE':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true };
                    }
                return u
                })
            };


        case 'UNFOLLOW-TYPE':
          return {
              ...state,users:state.users.map(u=>{
                  if (u.id===action.userID){
                      return{...u,followed:false}
                  }
              return u
              })
          }
        case 'SET-USERS':
            return {...state,users:[...state.users,...action.users]}
        default:
            return state;
    }
}




export const followActionCreator = (userID:number)=>{
    return {
        type:'FOLLOW-TYPE',
        userID
    }as const
}
export const unFollowActionCreator = (userID:number)=>{
    return {
        type:'UNFOLLOW-TYPE',
        userID
    }as const
}
export const setUsers = (users:User[])=>{
    return {
        type:'SET-USERS',
       users
    }as const
}