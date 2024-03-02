import {ActionType} from "./store";
import photo from '../images/avatar.webp'


interface Location {
    city: string;
    country: string;
}

export interface User {
    id: number;
    fullName: string;
    status: string;
    followed: boolean;
    location: Location;
    photoUrl:string
}

export interface UsersInitialStateType {
    users: User[];
}

const initialState: UsersInitialStateType = {
    users: [
        {
            id: 1,
            fullName: 'Max',
            status: 'i am boss',
            photoUrl:photo,
            followed: true,
            location: {
                city: 'Minsk',
                country: 'Belarus'
            }
        },
        {
            id: 2,
            fullName: 'John',
            photoUrl:photo,
            status: 'i am John',
            followed: true,
            location: {
                city: 'New York',
                country: 'USA'
            }
        },
        {
            id: 3,
            fullName: 'Anna',
            photoUrl:photo,
            status: 'i am Anna',
            followed: false,
            location: {
                city: 'Paris',
                country: 'France'
            }
        },
        {
            id: 4,
            fullName: 'Alex',
            photoUrl:photo,
            status: 'i am Alex',
            followed: false,
            location: {
                city: 'Berlin',
                country: 'Germany'
            }
        }
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
            return {...state,users: [...state.users,...action.users]}
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