import {UserActionType} from './user.actoin.type'
const INITIAL_STATE ={
    currentUser:null 
}
const UserReducer =(state=INITIAL_STATE , action)=>{
    switch(action.type){
        case UserActionType.SET_CURRENT_REDUCERS:
            return{
                ...state,
                currentUser:action.payload
            } 
        default:
            return state    
    }

}
export default UserReducer;