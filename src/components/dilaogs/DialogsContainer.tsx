import {
    addMessageActionCreate,
    changeNewMessageActionCreate,
    DialogsInitialStateType,
} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    dialogPage:DialogsInitialStateType
}

type maDispatchToPropsType = {
  addMessage:(newMessage:string)=>void
    onChangeMessage:(text:string)=>void
}

let mapStateToProps = (state:AppStateType):mapStateToPropsType=>{
    return{
        dialogPage:state.messagesPage
    }
}
let mapDispatchToProps = (dispatch:Dispatch):maDispatchToPropsType =>{
    return{
        addMessage:(newMessage:string)=>{
            dispatch(addMessageActionCreate(newMessage))
        },
        onChangeMessage:(text:string)=>{
            dispatch(changeNewMessageActionCreate(text))
        }
    }
}


export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)









// type MessageType ={
//    store:StoreType
// }
//
//
//
// export const DialogsContainer:React.FC<MessageType> = ({store}) => {
//
//     let state = store.getState().messagesPage
//
//     const addMessageButton = () =>{
// store.dispatch(addMessageActionCreate(store._state.messagesPage.newMessage))
//     }
//
// const onChangeHandlerMessage = (text:string)=>{
//
// store.dispatch(changeNewMessageActionCreate(text))
// }
//     return (
// <Dialogs addMessage={addMessageButton} onChangeMessage={onChangeHandlerMessage} dialogPage={state}/>
//     );
// };
