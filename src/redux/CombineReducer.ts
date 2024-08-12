import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { StudentReducer } from "./StudentReducer";

export const rootReducer = combineReducers({
    studentObject : StudentReducer
})

export const store = configureStore({
    reducer: rootReducer,
  });
  
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
