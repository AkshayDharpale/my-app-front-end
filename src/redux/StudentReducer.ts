import { error } from "console"
import { ActionType } from "./ActionType"
import { StudentAction } from "./StudentActions"
import { AppState, StudentObjectType} from "./Type"

// const initialStudentObject = {
//    student : {
//     id: 777,
//     name : "Akshay Dharpale",
//     age : 27,
//     city: "Pune",
//     branch: "Mechnical Engineering"
//    },
//    loading : false,
//    error: " "
// }

export const DEFAUL_STATE : AppState = {
    student : null
}

export const  StudentReducer = (state = DEFAUL_STATE.student, action : StudentAction) => {
    if(action.type === ActionType.BACKEND_API_REQUEST){ 
        const updatedState =  {
                ...state,
                loading: true,
                error : ""
            } 
            console.log(updatedState)
            return updatedState;
       
    } else if (action.type === ActionType.UPDATE_STUDENT_SUCCESS || action.type === ActionType.GET_STUDENT_SUCCESS){
        const updatedState =  {
                    ...state,
                loading : false,
                student : action.payload
            }
            console.log(updatedState)
            return updatedState;
        
    } else if (action.type === ActionType.BACKEND_API_REQUEST_FAILURE){
        const updatedState =  {
                ...state,
                loading : false,
                error : action.payload
            }
            console.log(updatedState)
            return updatedState;

    } else {
        return state;
    }
}


