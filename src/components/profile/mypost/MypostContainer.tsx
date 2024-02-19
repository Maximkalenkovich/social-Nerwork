import {
    addPostActionCreate,
    changeNewPostActionCreate, ProfileInitialStateType,
} from "../../../redux/profileReducer";
import {Mypost} from "./Mypost";
import {AppStateType} from "../../../redux/reduxStore";
import {Dispatch} from "redux";
import {connect} from "react-redux";


type mapStateToPropsType = {
   profilePage:ProfileInitialStateType
}

type mapDispatchToPropsType = {
    addPost: (text: string) => void
    updateNewPostText: (text: string) => void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {

    profilePage:state.profilePage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (text: string) => {
            dispatch(addPostActionCreate(text))
        },
        updateNewPostText: (text: string) => {
            dispatch(changeNewPostActionCreate(text))
        }
    }
}


export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(Mypost)

//
// type ProfilePostType = {
// store: StoreType
// }
//
// export const MypostContainer: React.FC<ProfilePostType> = ({store}) => {
//
//
//     let state = store.getState().profilePage
//     const onClickValue = () => {
//         debugger
//         store.dispatch(addPostActionCreate(store._state.profilePage.newPost))
//     }
//
//
//     const onChangeHandler = (text:string) => {
//         debugger
//         store.dispatch(changeNewPostActionCreate(text))
//     }
//
//
//     return (
//  <Mypost  updateNewPostText={onChangeHandler} addPost={onClickValue} profilePage={state}/>
//
//     )
// }
