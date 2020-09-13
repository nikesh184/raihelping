import {UserActionType} from "./user.actoin.type"
export const setCurrentUser= user =>({
    type:UserActionType.SET_CURRENT_REDUCERS,
    payload:user
})
    
