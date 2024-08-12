import { ActionType } from "./ActionType";
import { StudentEntityType } from "./Type";

type BackendAPIRequest = {
    type: ActionType.BACKEND_API_REQUEST;
  }
  

 type UpdateStudentSuccessAction = {
    type: ActionType.UPDATE_STUDENT_SUCCESS;
    payload: StudentEntityType; 
  }

  type GetStudentSuccessAction = {
    type: ActionType.GET_STUDENT_SUCCESS;
    payload: StudentEntityType; 
  } 

  type BackendAPIRequestFailureAction = {
    type: ActionType.BACKEND_API_REQUEST_FAILURE;
    payload: string; 
  }

  export type StudentAction =
  | BackendAPIRequest
  | UpdateStudentSuccessAction
  | BackendAPIRequestFailureAction
  | GetStudentSuccessAction;