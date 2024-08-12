import { useDispatch, useSelector } from "react-redux"
import { RootState, AppDispatch } from "../redux/CombineReducer"
import { getStudent, updateStudent } from "../redux/StudentActionCreator";
import { StudentEntityType } from "../redux/Type";
import { useEffect } from "react";


export const Container = () : JSX.Element=> {

  const student = useSelector((state: RootState)=> state.studentObject?.student)
  
  const dispatch = useDispatch<AppDispatch>();

  useEffect(()=>{

    dispatch(getStudent(777))

  }, [])

  const UpdateStudent = () =>{
    const studentObject: StudentEntityType = {
      id: 777,
      name : "Akshay",
      age: 27,
      city: "pune",
      branch : "Computer Engineering "
    }
    
     dispatch(updateStudent(studentObject)) 
    
  }

    return(
        <>
        {student ? (
          <div>
          <h1>Student Info</h1>
          <h3>Id : {student.id}</h3>
          <h3>Name : {student.name}</h3>
          <h3>Age : {student.age}</h3>
          <h3>City : {student.city}</h3>
          <h3>Branch : {student.branch}</h3>
        </div>
 
        ) :

        (
          <div>
            <h3 style={{color : 'red'}}>Stdudent Not Found</h3>
          </div>
        )
          
        }
        
          <input type="button" value="Update_Student" onClick={UpdateStudent} />
        </>
    )

}