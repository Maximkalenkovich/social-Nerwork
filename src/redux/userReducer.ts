import {ActionType} from "./store";


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
            photoUrl:'https://www.pnp.ru/upload/entities/2023/09/13/15/article/detailPicture/34/c2/f0/eb/b45b3e5f018ad9763d2f448a286de0a9.jpg',
            followed: true,
            location: {
                city: 'Minsk',
                country: 'Belarus'
            }
        },
        {
            id: 2,
            fullName: 'John',
            photoUrl:'https://www.pnp.ru/upload/entities/2023/09/13/15/article/detailPicture/34/c2/f0/eb/b45b3e5f018ad9763d2f448a286de0a9.jpg',
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
            photoUrl:'https://www.pnp.ru/upload/entities/2023/09/13/15/article/detailPicture/34/c2/f0/eb/b45b3e5f018ad9763d2f448a286de0a9.jpg',
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
            photoUrl:'https://www.pnp.ru/upload/entities/2023/09/13/15/article/detailPicture/34/c2/f0/eb/b45b3e5f018ad9763d2f448a286de0a9.jpg',
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
                    } })
            };


        case 'UNFOLLOW-TYPE':
          return {
              ...state,users:state.users.map(u=>{
                  if (u.id===action.userID){
                      return{...u,followed:false}
                  }
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