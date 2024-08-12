import { useDispatch } from "react-redux";
import { updateStudentInApi , fetchStudentFromApi} from "./BackendServices";
import { StudentEntityType } from "./Type";
import { Dispatch } from "redux";
import { StudentAction } from "./StudentActions";
import { ActionType } from "./ActionType";


export const updateStudent = (student : StudentEntityType) => {
    return async(dispatch : Dispatch<StudentAction>)=>{
        dispatch({ type : ActionType.BACKEND_API_REQUEST});
        try {
           const updatedStudent = await updateStudentInApi(student);
           dispatch({ type: ActionType.UPDATE_STUDENT_SUCCESS, payload: updatedStudent });
        } catch (error) {
            if (error instanceof Error) {
                dispatch({ type: ActionType.BACKEND_API_REQUEST_FAILURE, payload: error.message });
              } else {
                dispatch({ type: ActionType.BACKEND_API_REQUEST_FAILURE, payload: 'An unknown error occurred' });
            }
        }
    }
}

  export const getStudent = (id : number) =>{
    return async(dispatch : Dispatch<StudentAction>)=>{
      dispatch({type : ActionType.BACKEND_API_REQUEST})
      try {
        const student : StudentEntityType = await fetchStudentFromApi(id);
        dispatch({type : ActionType.GET_STUDENT_SUCCESS, payload: student});
      } catch (error){
          if (error instanceof Error) {
            dispatch({ type: ActionType.BACKEND_API_REQUEST_FAILURE, payload: error.message });
          } else {
            dispatch({ type: ActionType.BACKEND_API_REQUEST_FAILURE, payload: 'An unknown error occurred' });
        }
      }
    }
  }



