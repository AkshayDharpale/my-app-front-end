
export type StudentEntityType = {
    id: number
    name: string,
    age: number,
    city: string,
    branch: string
}

export type StudentObjectType = {
    student : StudentEntityType | null,
    loading: boolean,
    error : string
}

export type AppState = {
    student : StudentObjectType | null
}