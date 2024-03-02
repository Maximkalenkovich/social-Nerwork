import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {
    followActionCreator,
    setUsers,
    unFollowActionCreator,
    User,
    UsersInitialStateType
} from "../../redux/userReducer";
import {Users} from "./Users";



type MapStateToPropsType = {
    usersPage:  UsersInitialStateType
};

type MapDispatchToPropsType = {
    follow: (userID: number) => void;
    unfollow: (userID: number) => void;
    setUsers:(users:User[]) =>void
};


export type UsersTypes =  MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.users

    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userID:number) => {
            dispatch(followActionCreator(userID))
        },
        unfollow: (userID:number) => {
            dispatch(unFollowActionCreator(userID))
        },
        setUsers:(users:User[])=>{
            dispatch(setUsers(users))
        }

    }
}


export const UsersContainer = connect(mapStateToProps ,mapDispatchToProps)(Users)