import { StudentEntityType } from "./Type"


export const fetchStudentFromApi = async(id : number) : Promise<StudentEntityType>  =>  {
  const response = await fetch(`http://localhost:8080/student/${id}`);
  if (!response.ok) throw new Error('Failed to fetch student');
  return await response.json();
}

export const updateStudentInApi = async (student: StudentEntityType) : Promise<StudentEntityType> => {
    const response = await fetch(`http://localhost:8080/student`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    });

    if(!response.ok){
      throw new Error("Error occured while updating the data in backend");

    } 
    return await response.json();
  };